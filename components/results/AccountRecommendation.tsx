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
  TrendingUp,
  DollarSign,
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
    <div className="space-y-6">
      {/* Reasoning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Card className="border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Why We Recommend This Account
                </h3>
                <p className="text-foreground/80 leading-relaxed">{reasoning}</p>
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

          <CardHeader className="relative z-10">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit">
                Recommended For You
              </Badge>
              <CardTitle className="text-3xl font-bold">
                {primaryAccount.name}
              </CardTitle>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-primary">
                  ${primaryAccount.size.toLocaleString()}
                </span>
                <span className="text-lg text-muted-foreground">
                  Account Size
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-6">
            {/* Pricing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    Challenge Price
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${discountedPrice}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${primaryAccount.price}
                    </span>
                    <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                      {currentPromotion.discount}% OFF
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Promo Alert */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      {currentPromotion.description}
                    </p>
                    <p className="text-sm text-green-600/80 dark:text-green-400/80 mt-1">
                      Use code: <span className="font-mono font-bold">{currentPromotion.code}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Key Targets */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Phase 1 Target</p>
                <p className="text-2xl font-bold text-primary">
                  {primaryAccount.phase1Target}%
                </p>
              </div>
              {primaryAccount.phase2Target && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Phase 2 Target</p>
                  <p className="text-2xl font-bold text-primary">
                    {primaryAccount.phase2Target}%
                  </p>
                </div>
              )}
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Daily Loss Limit</p>
                <p className="text-2xl font-bold">{primaryAccount.dailyLossLimit}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Max Drawdown</p>
                <p className="text-2xl font-bold">{primaryAccount.maxDrawdown}%</p>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Account Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {primaryAccount.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full text-lg gradient-primary group"
              asChild
            >
              <a
                href="https://tradersyard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Challenge
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
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
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">Alternative Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alternativeAccounts.map((account, index) => (
              <Card key={account.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <Badge variant="outline">${account.size.toLocaleString()}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      ${Math.round(account.price * (1 - currentPromotion.discount / 100))}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${account.price}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Phase 1: {account.phase1Target}%
                      {account.phase2Target && ` | Phase 2: ${account.phase2Target}%`}
                    </p>
                    <p className="text-muted-foreground">
                      Leverage: {account.leverage}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://tradersyard.com"
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
