'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Twitter, Linkedin, Facebook, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface ShareButtonsProps {
  traderTypeName: string;
}

export function ShareButtons({ traderTypeName }: ShareButtonsProps) {
  const shareText = `I just discovered I'm a ${traderTypeName}! Find out your trader personality type with Tradersyard's quiz.`;
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const handleShare = async () => {
    if (canShare && navigator.share) {
      try {
        await navigator.share({
          title: 'My Trader Personality Type',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    }
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="space-y-4"
    >
      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold">Share Your Results</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Let others know about your trading personality!
            </p>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {canShare && (
              <Button
                variant="outline"
                size="lg"
                onClick={handleShare}
                className="group min-h-[44px] text-sm sm:text-base px-3 sm:px-4"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:scale-110" />
                <span className="hidden xs:inline">Share</span>
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              onClick={shareOnTwitter}
              className="group hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2] hover:text-[#1DA1F2] min-h-[44px] text-sm sm:text-base px-3 sm:px-4"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:scale-110" />
              <span className="hidden xs:inline">Twitter</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={shareOnLinkedIn}
              className="group hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] hover:text-[#0A66C2] min-h-[44px] text-sm sm:text-base px-3 sm:px-4"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:scale-110" />
              <span className="hidden xs:inline">LinkedIn</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={shareOnFacebook}
              className="group hover:bg-[#1877F2]/10 hover:border-[#1877F2] hover:text-[#1877F2] min-h-[44px] text-sm sm:text-base px-3 sm:px-4"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:scale-110" />
              <span className="hidden xs:inline">Facebook</span>
            </Button>
          </div>

          {/* Retake Quiz */}
          <div className="pt-3 sm:pt-4 border-t">
            <Link href="/quiz" className="block">
              <Button variant="ghost" className="w-full group min-h-[44px] text-sm sm:text-base">
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:rotate-180" />
                Retake Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
