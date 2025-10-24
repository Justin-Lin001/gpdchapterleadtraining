import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useProgress = (courseId: string, totalLessons: number) => {
  const [lessonsCompletions, setLessonsCompletions] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  // Get current user
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.id || null);
    };
    getUser();
  }, []);

  // Load progress from database
  useEffect(() => {
    const loadProgress = async () => {
      if (!userId) return;
      
      try {
        // @ts-ignore - Table types not yet generated
        const { data, error } = await (supabase as any)
          .from("lesson_completions")
          .select("lesson_id")
          .eq("user_id", userId)
          .eq("course_id", courseId);

        if (error) throw error;

        const completions: Record<string, boolean> = {};
        data?.forEach((completion: any) => {
          completions[completion.lesson_id] = true;
        });
        
        setLessonsCompletions(completions);
      } catch (error: any) {
        console.error("Error loading progress:", error);
        toast.error("Failed to load your progress");
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [userId, courseId]);

  // Save lesson completion to database
  const markLessonComplete = async (lessonId: string) => {
    if (!userId) return;

    try {
      // Insert lesson completion
      // @ts-ignore - Table types not yet generated
      const { error: lessonError } = await (supabase as any)
        .from("lesson_completions")
        .upsert({
          user_id: userId,
          course_id: courseId,
          lesson_id: lessonId,
        }, {
          onConflict: "user_id,course_id,lesson_id"
        });

      if (lessonError) throw lessonError;

      // Update local state
      setLessonsCompletions(prev => ({
        ...prev,
        [lessonId]: true
      }));

      // Update course progress
      const completedCount = Object.keys({ ...lessonsCompletions, [lessonId]: true }).length;
      const isFullyCompleted = completedCount >= totalLessons;

      // @ts-ignore - Table types not yet generated
      const { error: progressError } = await (supabase as any)
        .from("course_progress")
        .upsert({
          user_id: userId,
          course_id: courseId,
          lessons_completed: completedCount,
          total_lessons: totalLessons,
          completed: isFullyCompleted,
          last_accessed: new Date().toISOString(),
        }, {
          onConflict: "user_id,course_id"
        });

      if (progressError) throw progressError;

      return true;
    } catch (error: any) {
      console.error("Error saving progress:", error);
      toast.error("Failed to save progress");
      return false;
    }
  };

  return {
    lessonsCompletions,
    loading,
    markLessonComplete,
  };
};

