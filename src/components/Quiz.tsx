import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";
import { QuizQuestion } from "@/data/coursesData";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

export const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === questions[index].answer).length;
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <Card className={`border-2 ${passed ? "border-success" : "border-destructive"}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {passed ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-success" />
                Congratulations! You passed!
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-destructive" />
                Keep practicing
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">{percentage}%</p>
            <p className="text-muted-foreground">
              You got {score} out of {questions.length} questions correct
            </p>
          </div>

          <div className="space-y-4">
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === q.answer;
              
              return (
                <Card key={index} className={`border ${isCorrect ? "border-success/50 bg-success/5" : "border-destructive/50 bg-destructive/5"}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium mb-2">{q.question}</p>
                        <p className="text-sm">
                          <span className="text-muted-foreground">Your answer: </span>
                          <span className={isCorrect ? "text-success" : "text-destructive"}>
                            {userAnswer}. {q.options[userAnswer as keyof typeof q.options]}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm mt-1">
                            <span className="text-muted-foreground">Correct answer: </span>
                            <span className="text-success">
                              {q.answer}. {q.options[q.answer as keyof typeof q.options]}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex gap-4">
            {passed ? (
              <Button onClick={onComplete} className="w-full" size="lg">
                Complete Lesson
              </Button>
            ) : (
              <Button onClick={handleRetake} className="w-full" size="lg" variant="outline">
                Retake Quiz
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <CardTitle className="text-xl mt-4">{currentQ.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup 
          value={selectedAnswers[currentQuestion] || ""} 
          onValueChange={handleAnswerSelect}
        >
          {Object.entries(currentQ.options).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer">
              <RadioGroupItem value={key} id={`option-${key}`} />
              <Label htmlFor={`option-${key}`} className="flex-1 cursor-pointer">
                <span className="font-medium">{key}.</span> {value}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-between gap-4">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion]}
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next Question"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
