'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { quizQuestions } from '@/lib/data/questions';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function QuizContainer() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const hasAnswered = answers[currentQuestion.id] !== undefined;

  const handleAnswerSelect = (answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion && hasAnswered) {
      // Store answers in sessionStorage and navigate to results
      sessionStorage.setItem('quizAnswers', JSON.stringify(answers));
      router.push('/results');
    } else if (hasAnswered) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="absolute top-40 right-40 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-4xl space-y-8">
        {/* Progress Bar */}
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={quizQuestions.length}
        />

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between max-w-3xl mx-auto"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={isFirstQuestion}
            className="group"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>

          <Button
            size="lg"
            onClick={handleNext}
            disabled={!hasAnswered}
            className="gradient-primary group"
          >
            {isLastQuestion ? 'See Results' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Hint Text */}
        {!hasAnswered && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground"
          >
            Select an answer to continue
          </motion.p>
        )}
      </div>
    </div>
  );
}
