'use client';

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
        <span className="text-white">
          Progress: {current} / {total}
        </span>
        <span className="text-[#5865F2]">{Math.round(percentage)}%</span>
      </div>
      <div className="relative">
        <Progress value={percentage} className="h-3" />
      </div>
    </div>
  );
}
