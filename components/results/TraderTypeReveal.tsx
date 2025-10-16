'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TraderType } from '@/types';
import confetti from 'canvas-confetti';
import {
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  LineChart,
  Newspaper,
  Target,
} from 'lucide-react';

interface TraderTypeRevealProps {
  traderType: TraderType;
}

const iconMap = {
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  LineChart,
  Newspaper,
  Target,
};

export function TraderTypeReveal({ traderType }: TraderTypeRevealProps) {
  const IconComponent = iconMap[traderType.icon as keyof typeof iconMap] || Target;

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.1, 0.9), y: 0.6 },
        colors: ['#4F46E5', '#7C3AED', '#EC4899', '#06B6D4'],
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="w-full"
    >
      <Card className="relative overflow-hidden border-2 shadow-2xl">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${traderType.color}22 0%, ${traderType.color}44 100%)`,
          }}
        />

        <CardContent className="relative z-10 p-8 md:p-12 text-center space-y-6">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: `${traderType.color}22` }}
            >
              <IconComponent
                className="w-12 h-12"
                style={{ color: traderType.color }}
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge
              className="px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: `${traderType.color}22`,
                color: traderType.color,
                borderColor: `${traderType.color}44`,
              }}
            >
              Your Trader Type
            </Badge>
          </motion.div>

          {/* Trader Type Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold">{traderType.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {traderType.tagline}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            {traderType.description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
