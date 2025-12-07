import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen, Lightbulb, ScrollText } from "lucide-react";
import { PoemType } from "@/data/coursesData";

interface PoemTypesGuideProps {
  poemTypes: PoemType[];
  onComplete: () => void;
  isCompleted: boolean;
}

export const PoemTypesGuide = ({ poemTypes, onComplete, isCompleted }: PoemTypesGuideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isCompleted) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollableHeight = scrollHeight - clientHeight;
      
      if (scrollableHeight <= 0) {
        setScrollProgress(100);
        if (!hasReachedEnd) {
          setHasReachedEnd(true);
          onComplete();
        }
        return;
      }

      const progress = Math.round((scrollTop / scrollableHeight) * 100);
      setScrollProgress(progress);

      // Consider complete when scrolled to 95% or more
      if (progress >= 95 && !hasReachedEnd) {
        setHasReachedEnd(true);
        onComplete();
      }
    };

    container.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [onComplete, hasReachedEnd, isCompleted]);

  return (
    <div className="space-y-4">
      {/* Progress indicator */}
      {!isCompleted && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ScrollText className="w-4 h-4" />
                <span>Scroll through the entire guide to unlock the quiz</span>
              </div>
              <span className="text-sm font-medium">{scrollProgress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {isCompleted && (
        <Card className="border-success bg-success/5">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Guide completed! You can now proceed to the quiz.</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scrollable guide content */}
      <div 
        ref={containerRef}
        className="max-h-[600px] overflow-y-auto space-y-6 pr-2"
      >
        {poemTypes.map((poem, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {poem.name}
                </CardTitle>
                <Badge variant="secondary">{index + 1} of {poemTypes.length}</Badge>
              </div>
              <p className="text-muted-foreground mt-2">{poem.description}</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Rules */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-warning" />
                  Rules
                </h4>
                <ul className="space-y-1">
                  {poem.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example */}
              {poem.example && (
                <div>
                  <h4 className="font-semibold mb-3">Example</h4>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                    {poem.example.title && (
                      <p className="font-medium mb-2 text-primary">{poem.example.title}</p>
                    )}
                    {poem.example.lines.map((line, lIdx) => (
                      <p key={lIdx} className={`text-sm ${line === '' ? 'h-3' : ''}`}>
                        {line || '\u00A0'}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* More Reading */}
              {poem.moreReading && (
                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground">More Reading</h4>
                  <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                    {poem.moreReading.lines.map((line, lIdx) => (
                      <p key={lIdx} className={`text-sm text-muted-foreground ${line === '' ? 'h-3' : ''}`}>
                        {line || '\u00A0'}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {/* End marker */}
        <div className="text-center py-4 text-muted-foreground text-sm">
          — End of Poetry Types Guide —
        </div>
      </div>
    </div>
  );
};
