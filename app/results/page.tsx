'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TraderTypeReveal } from '@/components/results/TraderTypeReveal';
import { PersonalityProfile } from '@/components/results/PersonalityProfile';
import { AccountRecommendation } from '@/components/results/AccountRecommendation';
import { ShareButtons } from '@/components/results/ShareButtons';
import { EmailCaptureModal } from '@/components/results/EmailCaptureModal';
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
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check if email has been submitted
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      setShowEmailModal(true);
    }

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

  const handleEmailSubmit = (email: string) => {
    sessionStorage.setItem('userEmail', email);
    setUserEmail(email);
    setShowEmailModal(false);
  };

  if (isLoading || !recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
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
    <>
      {/* Email Capture Modal */}
      {showEmailModal && <EmailCaptureModal onSubmit={handleEmailSubmit} />}

      <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-black">

        <div className="relative z-10 max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/logos/tradersyard-logo-2.svg"
            alt="Tradersyard Logo"
            width={446}
            height={82}
            className="h-10 sm:h-12 md:h-14 w-auto"
            priority
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-2 sm:space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5865F2] leading-tight px-2">Your Results Are In!</h1>
          <p className="text-base sm:text-lg text-white px-4">
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
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center space-y-2 sm:space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5865F2] leading-tight px-2">Your Perfect Match</h2>
            <p className="text-base sm:text-lg md:text-xl text-white font-bold px-4" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>
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

        {/* Discord Community Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="w-full"
        >
          <a
            href="https://discord.gg/tradersyard"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src="/discord.png"
              alt="Join Tradersyard Discord Community"
              width={1200}
              height={300}
              className="w-full h-auto"
              priority={false}
            />
          </a>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center py-8"
        >
          <p className="text-sm text-muted-foreground">
            Ready to start your funded trading journey?
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
}
