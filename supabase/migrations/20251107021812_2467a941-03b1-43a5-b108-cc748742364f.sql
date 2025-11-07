-- Add missing UPDATE policy for lesson_completions table
-- This fixes the upsert operation that requires both INSERT and UPDATE permissions

CREATE POLICY "Users can update their own completions"
  ON public.lesson_completions FOR UPDATE
  USING (auth.uid() = user_id);