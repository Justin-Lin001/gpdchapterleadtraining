import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/coursesData";
import { BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const Dashboard = () => {
  const totalLessons = coursesData.reduce((sum, course) => sum + course.lessons, 0);
  const completedModules = coursesData.filter(c => c.progress === 100).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Welcome Back
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Chapter Lead <span className="text-primary">Training Portal</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Continue your journey to becoming an exceptional Grandparents' Diary chapter leader. 
                Access comprehensive training modules designed to help you create meaningful impact in your community.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="gradient">
                  Continue Learning
                </Button>
                <Button size="lg" variant="outline">
                  Browse All Modules
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Training Portal Hero"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalLessons}</p>
                  <p className="text-sm text-muted-foreground">Total Lessons</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{completedModules}</p>
                  <p className="text-sm text-muted-foreground">Completed Modules</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Modules */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Training Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
