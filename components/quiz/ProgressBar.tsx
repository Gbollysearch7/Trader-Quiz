'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2">
      <div className="flex items-center justify-between text-sm font-medium">
        <span className="text-muted-foreground">
          Progress: {current} / {total}
        </span>
        <span className="text-primary">{Math.round(percentage)}%</span>
      </div>
      <div className="relative">
        <Progress value={percentage} className="h-3" />
        <motion.div
          className="absolute inset-0 h-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
