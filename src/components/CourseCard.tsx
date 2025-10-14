import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  progress: number;
  category: string;
}

export const CourseCard = ({ id, title, description, lessons, duration, progress, category }: CourseCardProps) => {
  const isCompleted = progress === 100;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={isCompleted ? "success" : "secondary"}>
            {category}
          </Badge>
          {isCompleted && <CheckCircle2 className="w-5 h-5 text-success" />}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/course/${id}`} className="w-full">
          <Button className="w-full" variant={isCompleted ? "outline" : "default"}>
            {progress === 0 ? "Start Course" : isCompleted ? "Review" : "Continue"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
