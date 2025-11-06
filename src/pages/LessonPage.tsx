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
import { useProgress } from "@/hooks/useProgress";
import { useCourseProgress } from "@/hooks/useCourseProgress";

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastValidTimeRef = useRef<number>(0);
  
  const course = coursesData.find(c => c.id === courseId);
  const lesson = course?.lessonsList.find(l => l.id === lessonId);
  
  const { lessonsCompletions, loading, markLessonComplete } = useProgress(
    courseId || "",
    course?.lessonsList.length || 0
  );

  const { progress, loading: progressLoading } = useCourseProgress();

  // Check if all previous 4 modules are completed for final quiz access
  const isFinalQuiz = courseId === "final-quiz";
  const [allModulesCompleted, setAllModulesCompleted] = useState(false);

  useEffect(() => {
    if (!isFinalQuiz) return;

    const requiredModules = ["leadership-basics", "creative-writing", "community-impact", "troubleshooting"];
    
    const allCompleted = requiredModules.every(moduleId => {
      const moduleProgress = progress[moduleId];
      return moduleProgress && moduleProgress.completed;
    });

    setAllModulesCompleted(allCompleted);
  }, [isFinalQuiz, progress]);

  useEffect(() => {
    // Check if current lesson is already completed
    if (lessonId && lessonsCompletions[lessonId]) {
      setCompleted(true);
    } else {
      setCompleted(false);
      setVideoWatched(false);
      setQuizStarted(false);
    }
  }, [courseId, lessonId, lessonsCompletions]);

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
  const isQuizLocked = hasQuiz && (!isPreviousLessonCompleted || (isFinalQuiz && !allModulesCompleted));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = async () => {
      setVideoWatched(true);
      setCompleted(true);
      
      // Save progress to database
      if (lessonId) {
        await markLessonComplete(lessonId);
      }
      
      toast.success("Video completed! You can now proceed to the quiz.");
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [courseId, lessonId, markLessonComplete]);

  const handleQuizComplete = async () => {
    setCompleted(true);
    setQuizStarted(false);
    
    // Save progress to database
    if (lessonId) {
      await markLessonComplete(lessonId);
    }
    
    toast.success("Quiz completed! Great work! 🎉");
  };

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  if (loading || progressLoading) {
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
                      <span className="font-medium">
                        {isFinalQuiz 
                          ? "Complete and pass all previous 4 modules to unlock the Final Quiz"
                          : "Complete the previous lesson to unlock this quiz"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Video */}
            {lesson.content.videoUrl && !isQuizLocked && !quizStarted && !isCompleted && (
              <Card className="mb-8 overflow-hidden">
                <video 
                  ref={videoRef}
                  className="w-full aspect-video"
                  controls
                  controlsList="nodownload noplaybackrate"
                  onSeeking={(e) => {
                    const video = e.currentTarget;
                    if (video.currentTime > lastValidTimeRef.current) {
                      video.currentTime = lastValidTimeRef.current;
                    }
                  }}
                  onTimeUpdate={(e) => {
                    lastValidTimeRef.current = e.currentTarget.currentTime;
                  }}
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
