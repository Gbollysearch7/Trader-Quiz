'use client';

import { motion } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizQuestion } from '@/types';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer?: string;
  onAnswerSelect: (answerId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="w-full max-w-3xl mx-auto gradient-card border-2 shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary capitalize">
              {question.category}
            </span>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
            {question.question}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <RadioGroup
            value={selectedAnswer}
            onValueChange={onAnswerSelect}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Label
                  htmlFor={option.id}
                  className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 ${
                    selectedAnswer === option.id
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-border bg-card'
                  }`}
                >
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="mt-0.5 mr-3"
                  />
                  <span className="flex-1 text-base leading-relaxed">
                    {option.text}
                  </span>
                </Label>
              </motion.div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </motion.div>
  );
}
