import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { LessonSidebar } from "@/components/LessonSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/Quiz";
import { coursesData } from "@/data/coursesData";
import { ArrowLeft, CheckCircle2, ChevronRight, Lightbulb, Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lessonsCompletions, setLessonsCompletions] = useState<Record<string, boolean>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const course = coursesData.find(c => c.id === courseId);
  const lesson = course?.lessonsList.find(l => l.id === lessonId);

  useEffect(() => {
    // Reset state when lesson changes
    setCompleted(false);
    setVideoWatched(false);
    setQuizStarted(false);
    
    // Load completion status from database for ALL lessons in the course
    const loadProgress = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setLoading(false);
          return;
        }

        // Load ALL completions for this course
        const { data: allCompletions, error: allError } = await (supabase as any)
          .from('lesson_completions')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', courseId!);

        if (allError) {
          console.error('Error loading all progress:', allError);
        } else if (allCompletions) {
          // Create a map of lesson_id to completion status
          const completionsMap: Record<string, boolean> = {};
          allCompletions.forEach((completion: any) => {
            completionsMap[completion.lesson_id] = true;
          });
          setLessonsCompletions(completionsMap);
          
          // Check if current lesson is completed
          if (completionsMap[lessonId!]) {
            setCompleted(true);
            setVideoWatched(true);
          }
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [courseId, lessonId]);

  if (!course || !lesson) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = course.lessonsList.findIndex(l => l.id === lessonId);
  const nextLesson = course.lessonsList[currentIndex + 1];
  const previousLesson = course.lessonsList[currentIndex - 1];
  const isCompleted = completed;
  const hasVideo = !!lesson.content.videoUrl;
  const hasQuiz = !!lesson.content.quizQuestions;
  
  // Check if previous lesson (video) is completed for quiz access
  const isPreviousLessonCompleted = previousLesson ? lessonsCompletions[previousLesson.id] : true;
  const isQuizLocked = hasQuiz && !isPreviousLessonCompleted;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = async () => {
      setVideoWatched(true);
      setCompleted(true);
      
      // Save to database
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await (supabase as any)
          .from('lesson_completions')
          .insert({
            user_id: user.id,
            course_id: courseId!,
            lesson_id: lessonId!,
          });

        if (error && error.code !== '23505') { // Ignore duplicate key errors
          console.error('Error saving progress:', error);
        } else {
          // Update the completions map immediately
          setLessonsCompletions(prev => ({
            ...prev,
            [lessonId!]: true
          }));
          toast.success("Video completed! You can now proceed to the next lesson.");
        }
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [courseId, lessonId]);

  const handleQuizComplete = async () => {
    setCompleted(true);
    setQuizStarted(false);
    
    // Save to database
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await (supabase as any)
        .from('lesson_completions')
        .insert({
          user_id: user.id,
          course_id: courseId!,
          lesson_id: lessonId!,
        });

      if (error && error.code !== '23505') { // Ignore duplicate key errors
        console.error('Error saving progress:', error);
      } else {
        // Update the completions map immediately
        setLessonsCompletions(prev => ({
          ...prev,
          [lessonId!]: true
        }));
        toast.success("Quiz completed! Great work! 🎉");
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <LessonSidebar 
          courseId={courseId!}
          lessons={course.lessonsList}
          currentLessonId={lessonId!}
          lessonsCompletions={lessonsCompletions}
        />

        <main className="flex-1 p-8">
          <Link to={`/course/${courseId}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto">
            {/* Lesson Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Lesson {currentIndex + 1} of {course.lessonsList.length}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{lesson.content.title}</h1>
              <p className="text-lg text-muted-foreground">{lesson.content.description}</p>
              {isCompleted && (
                <div className="flex items-center gap-2 mt-4 text-success">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">You've completed this lesson</span>
                </div>
              )}
              {isQuizLocked && (
                <Card className="mt-4 border-warning bg-warning/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-warning">
                      <Lock className="w-5 h-5" />
                      <span className="font-medium">Complete the previous lesson to unlock this quiz</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Video */}
            {lesson.content.videoUrl && !isQuizLocked && !quizStarted && (
              <Card className="mb-8 overflow-hidden">
                <video 
                  ref={videoRef}
                  className="w-full aspect-video"
                  controls
                  controlsList="nodownload"
                >
                  <source src={lesson.content.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!videoWatched && !isCompleted && (
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Watch the full video to unlock the next lesson
                    </p>
                  </CardContent>
                )}
                {videoWatched && !isCompleted && (
                  <CardContent className="pt-4">
                    <p className="text-sm text-success flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Video completed! You can now proceed to the quiz.
                    </p>
                  </CardContent>
                )}
              </Card>
            )}
            
            {/* Show video after quiz completion */}
            {lesson.content.videoUrl && !isQuizLocked && quizStarted && !isCompleted && (
              <Card className="mb-8 border-warning bg-warning/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-warning">
                    <Lock className="w-5 h-5" />
                    <span className="font-medium">Complete the quiz to re-watch the video</span>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {lesson.content.videoUrl && !isQuizLocked && isCompleted && (
              <Card className="mb-8 overflow-hidden">
                <video 
                  className="w-full aspect-video"
                  controls
                  controlsList="nodownload"
                >
                  <source src={lesson.content.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <CardContent className="pt-4">
                  <p className="text-sm text-success flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Lesson completed! You can re-watch the video anytime.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quiz */}
            {hasQuiz && !isQuizLocked && !isCompleted && (
              <div className="mb-8">
                <Quiz 
                  questions={lesson.content.quizQuestions!} 
                  onComplete={handleQuizComplete}
                  onStart={handleQuizStart}
                />
              </div>
            )}

            {hasQuiz && isCompleted && (
              <Card className="mb-8 border-success bg-success/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Quiz completed successfully!</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Lesson Content */}
            {!isQuizLocked && lesson.content.sections.length > 0 && (
              <div className="space-y-8 mb-8">
                {lesson.content.sections.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{section.heading}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Key Takeaways */}
            {!isQuizLocked && !hasVideo && lesson.content.keyTakeaways.length > 0 && (
              <Card className="mb-8 border-accent/50 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lesson.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}


            {isCompleted && nextLesson && (
              <div className="flex justify-end pt-8 border-t">
                <Link to={`/course/${courseId}/lesson/${nextLesson.id}`}>
                  <Button size="lg">
                    Next Lesson
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </article>
        </main>
      </div>
    </div>
  );
};

export default LessonPage;
