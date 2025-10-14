import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { LessonSidebar } from "@/components/LessonSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coursesData } from "@/data/coursesData";
import { ArrowLeft, CheckCircle2, ChevronRight, Lightbulb } from "lucide-react";
import { toast } from "sonner";

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  
  const course = coursesData.find(c => c.id === courseId);
  const lesson = course?.lessonsList.find(l => l.id === lessonId);

  if (!course || !lesson) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = course.lessonsList.findIndex(l => l.id === lessonId);
  const nextLesson = course.lessonsList[currentIndex + 1];
  const isCompleted = lesson.completed || completed;

  const handleMarkComplete = () => {
    setCompleted(true);
    toast.success("Lesson completed! Great work! 🎉");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <LessonSidebar 
          courseId={courseId!}
          lessons={course.lessonsList}
          currentLessonId={lessonId!}
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
            </div>

            {/* Video Placeholder */}
            {lesson.content.videoUrl && (
              <Card className="mb-8 overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Video content would appear here</p>
                </div>
              </Card>
            )}

            {/* Lesson Content */}
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

            {/* Key Takeaways */}
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

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-8 border-t">
              {!isCompleted ? (
                <Button onClick={handleMarkComplete} size="lg" variant="gradient">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Mark as Complete
                </Button>
              ) : (
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Completed</span>
                </div>
              )}

              {nextLesson && (
                <Link to={`/course/${courseId}/lesson/${nextLesson.id}`}>
                  <Button size="lg">
                    Next Lesson
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default LessonPage;
