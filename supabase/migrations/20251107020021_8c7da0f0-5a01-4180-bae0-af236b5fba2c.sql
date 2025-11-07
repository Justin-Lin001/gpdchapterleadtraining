-- Drop the unused profiles table and related function
-- The profiles table is not used anywhere in the application code
-- and causes unnecessary overhead and potential data inconsistency

DROP TABLE IF EXISTS public.profiles CASCADE;

DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;