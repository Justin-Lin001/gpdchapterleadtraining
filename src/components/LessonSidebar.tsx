import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface LessonSidebarProps {
  courseId: string;
  lessons: Lesson[];
  currentLessonId: string;
  lessonsCompletions: Record<string, boolean>;
}

export const LessonSidebar = ({ courseId, lessons, currentLessonId, lessonsCompletions }: LessonSidebarProps) => {
  return (
    <aside className="w-80 bg-card border-r min-h-screen p-6">
      <h2 className="font-semibold text-lg mb-4">Course Content</h2>
      <nav className="space-y-2">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === currentLessonId;
          const isCompleted = lessonsCompletions[lesson.id] || false;
          return (
            <Link
              key={lesson.id}
              to={`/course/${courseId}/lesson/${lesson.id}`}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg transition-all",
                isCurrent
                  ? "bg-primary/10 border-l-4 border-primary"
                  : "hover:bg-muted border-l-4 border-transparent"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                ) : isCurrent ? (
                  <PlayCircle className="w-5 h-5 text-primary" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn("text-sm font-medium", isCurrent && "text-primary")}>
                  Lesson {index + 1}
                </p>
                <p className="text-sm truncate">{lesson.title}</p>
                <p className="text-xs text-muted-foreground">{lesson.duration}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
