'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TraderTypeReveal } from '@/components/results/TraderTypeReveal';
import { PersonalityProfile } from '@/components/results/PersonalityProfile';
import { AccountRecommendation } from '@/components/results/AccountRecommendation';
import { ShareButtons } from '@/components/results/ShareButtons';
import { calculateTraderType } from '@/lib/utils/scoring';
import { getRecommendation } from '@/lib/utils/recommendations';
import { Recommendation } from '@/types';
import { Loader2 } from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const [recommendation, setRecommendation] = useState<Recommendation | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get answers from sessionStorage
    const answersJson = sessionStorage.getItem('quizAnswers');

    if (!answersJson) {
      // No answers found, redirect to quiz
      router.push('/quiz');
      return;
    }

    try {
      const answers = JSON.parse(answersJson);

      // Calculate trader type
      const traderTypeId = calculateTraderType(answers);

      // Get recommendation
      const result = getRecommendation(traderTypeId, answers);

      setRecommendation(result);
      setIsLoading(false);
    } catch (error) {
      console.error('Error processing results:', error);
      router.push('/quiz');
    }
  }, [router]);

  if (isLoading || !recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-lg text-muted-foreground">
            Analyzing your trading personality...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      {/* Background Effects */}
      <div className="fixed inset-0 gradient-primary opacity-5 pointer-events-none" />
      <div className="fixed top-40 right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-40 left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Your Results Are In!</h1>
          <p className="text-lg text-muted-foreground">
            Here's everything you need to know about your trading personality
          </p>
        </motion.div>

        {/* Trader Type Reveal */}
        <TraderTypeReveal traderType={recommendation.traderType} />

        {/* Personality Profile */}
        <PersonalityProfile
          traderType={recommendation.traderType}
          tips={recommendation.tips}
        />

        {/* Account Recommendation */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center space-y-2"
          >
            <h2 className="text-3xl font-bold">Your Perfect Match</h2>
            <p className="text-lg text-muted-foreground">
              Based on your personality, here's our recommendation
            </p>
          </motion.div>

          <AccountRecommendation
            primaryAccount={recommendation.primaryAccount}
            alternativeAccounts={recommendation.alternativeAccounts}
            reasoning={recommendation.reasoning}
          />
        </div>

        {/* Share Results */}
        <ShareButtons traderTypeName={recommendation.traderType.name} />

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center py-8"
        >
          <p className="text-sm text-muted-foreground">
            Ready to start your funded trading journey?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
