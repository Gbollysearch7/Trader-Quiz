'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-black">

      <div className="relative z-10 w-full max-w-4xl space-y-6 sm:space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <Image
            src="/logos/tradersyard-logo-2.svg"
            alt="Tradersyard Logo"
            width={446}
            height={82}
            className="h-8 sm:h-10 md:h-12 w-auto"
            priority
          />
        </motion.div>

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
          className="flex items-center justify-between gap-3 max-w-3xl mx-auto"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={isFirstQuestion}
            className="group min-h-[48px] text-sm sm:text-base px-4 sm:px-6"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="hidden xs:inline">Back</span>
          </Button>

          <Button
            size="lg"
            onClick={handleNext}
            disabled={!hasAnswered}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white group min-h-[48px] text-sm sm:text-base px-4 sm:px-6"
          >
            {isLastQuestion ? 'See Results' : 'Next'}
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Hint Text */}
        {!hasAnswered && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs sm:text-sm text-muted-foreground"
          >
            Select an answer to continue
          </motion.p>
        )}
      </div>
    </div>
  );
}
