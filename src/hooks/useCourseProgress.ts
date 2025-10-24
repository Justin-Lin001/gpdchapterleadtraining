import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { coursesData } from "@/data/coursesData";

interface CourseProgressData {
  course_id: string;
  lessons_completed: number;
  total_lessons: number;
  completed: boolean;
  last_accessed: string;
}

export const useCourseProgress = () => {
  const [progress, setProgress] = useState<Record<string, CourseProgressData>>({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.id || null);
    };
    getUser();
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      if (!userId) return;
      
      try {
        // @ts-ignore - Table types not yet generated
        const { data, error} = await (supabase as any)
          .from("course_progress")
          .select("*")
          .eq("user_id", userId);

        if (error) throw error;

        const progressMap: Record<string, CourseProgressData> = {};
        data?.forEach((item: any) => {
          progressMap[item.course_id] = item;
        });
        
        setProgress(progressMap);
      } catch (error: any) {
        console.error("Error loading course progress:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [userId]);

  const getCourseProgress = (courseId: string) => {
    return progress[courseId] || null;
  };

  const getTotalCompletedModules = () => {
    return Object.values(progress).filter(p => p.completed).length;
  };

  const getTotalCompletedLessons = () => {
    return Object.values(progress).reduce((sum, p) => sum + p.lessons_completed, 0);
  };

  const getCourseProgressPercentage = (courseId: string) => {
    const courseProgress = progress[courseId];
    if (!courseProgress) return 0;
    
    return Math.round((courseProgress.lessons_completed / courseProgress.total_lessons) * 100);
  };

  return {
    progress,
    loading,
    getCourseProgress,
    getTotalCompletedModules,
    getTotalCompletedLessons,
    getCourseProgressPercentage,
  };
};

