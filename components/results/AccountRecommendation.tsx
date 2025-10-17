'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Account } from '@/types';
import { currentPromotion } from '@/lib/data/accounts';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface AccountRecommendationProps {
  primaryAccount: Account;
  alternativeAccounts: Account[];
  reasoning: string;
}

export function AccountRecommendation({
  primaryAccount,
  alternativeAccounts,
  reasoning,
}: AccountRecommendationProps) {
  const discountedPrice = Math.round(
    primaryAccount.price * (1 - currentPromotion.discount / 100)
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Reasoning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Card className="bg-[#5865F2] border-[#5865F2]">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-white" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
                  Why We Recommend This Account
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-normal" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>{reasoning}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Primary Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="border-2 border-primary shadow-xl relative overflow-hidden">
          {/* Popular Badge */}
          {primaryAccount.isPopular && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />

          <CardHeader className="relative z-10 p-4 sm:p-6">
            <div className="space-y-2 sm:space-y-3 text-center flex flex-col items-center">
              <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                Recommended For You
              </Badge>
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                {primaryAccount.name}
              </CardTitle>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                  ${primaryAccount.size.toLocaleString()}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Account Size
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-4 sm:space-y-6 p-4 sm:p-6">
            {/* Pricing */}
            <div className="space-y-3">
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Challenge Price
                </p>
                <div className="flex flex-wrap items-baseline gap-2 justify-center">
                  <span className="text-2xl sm:text-3xl font-bold">${discountedPrice}</span>
                  <span className="text-base sm:text-lg text-muted-foreground line-through">
                    ${primaryAccount.price}
                  </span>
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 text-xs sm:text-sm">
                    {currentPromotion.discount}% OFF
                  </Badge>
                </div>
              </div>

              {/* Promo Alert */}
              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-green-700 dark:text-green-400">
                      {currentPromotion.description}
                    </p>
                    <p className="text-xs sm:text-sm text-green-600/80 dark:text-green-400/80 mt-1">
                      Use code: <span className="font-mono font-bold">{currentPromotion.code}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Key Targets */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted-foreground">Phase 1 Target</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  {primaryAccount.phase1Target}%
                </p>
              </div>
              {primaryAccount.phase2Target && (
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Phase 2 Target</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {primaryAccount.phase2Target}%
                  </p>
                </div>
              )}
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted-foreground">Daily Loss Limit</p>
                <p className="text-xl sm:text-2xl font-bold">{primaryAccount.dailyLossLimit}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted-foreground">Max Drawdown</p>
                <p className="text-xl sm:text-2xl font-bold">{primaryAccount.maxDrawdown}%</p>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                Account Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {primaryAccount.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full text-base sm:text-lg bg-[#5865F2] hover:bg-[#4752C4] text-white group min-h-[48px] px-6 py-3"
              asChild
            >
              <a
                href="https://tradersyard.com/#pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Challenge
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Alternative Accounts */}
      {alternativeAccounts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="space-y-3 sm:space-y-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white px-2" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>Alternative Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {alternativeAccounts.map((account) => (
              <Card key={account.id} className="bg-[#5865F2] border-[#5865F2] hover:border-white/50 transition-colors">
                <CardHeader className="p-4 sm:p-6 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg text-white" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>{account.name}</CardTitle>
                    <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-xs sm:text-sm shrink-0">${account.size.toLocaleString()}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
                      ${Math.round(account.price * (1 - currentPromotion.discount / 100))}
                    </span>
                    <span className="text-xs sm:text-sm text-white/70 line-through">
                      ${account.price}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-sm sm:text-base text-white font-bold" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>
                      Phase 1: {account.phase1Target}%
                      {account.phase2Target && ` | Phase 2: ${account.phase2Target}%`}
                    </p>
                    <p className="text-sm sm:text-base text-white font-bold" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>
                      Leverage: {account.leverage}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#5865F2] min-h-[44px] text-sm sm:text-base" asChild>
                    <a
                      href="https://tradersyard.com/#pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
