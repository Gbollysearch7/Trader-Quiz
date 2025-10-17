'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TraderType } from '@/types';
import { CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

interface PersonalityProfileProps {
  traderType: TraderType;
  tips: string[];
}

export function PersonalityProfile({
  traderType,
  tips,
}: PersonalityProfileProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Characteristics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="h-full bg-[#5865F2] border-[#5865F2]">
          <CardHeader className="p-4 sm:p-6 pb-3">
            <CardTitle className="flex items-center gap-2 text-white font-semibold text-lg sm:text-xl" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              Key Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
            {traderType.characteristics.map((characteristic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Badge
                  variant="outline"
                  className="mt-0.5 px-2 py-1 text-xs font-semibold bg-white/10 text-white border-white/20"
                >
                  {index + 1}
                </Badge>
                <p className="text-sm sm:text-base text-white leading-relaxed font-bold" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>
                  {characteristic}
                </p>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Strengths & Weaknesses */}
      <div className="space-y-4 sm:space-y-6">
        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-[#5865F2] border-[#5865F2]">
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="flex items-center gap-2 text-white font-semibold text-lg sm:text-xl" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
              {traderType.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white font-bold" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>{strength}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-[#5865F2] border-[#5865F2]">
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="flex items-center gap-2 text-white font-semibold text-lg sm:text-xl" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                Areas to Watch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
              {traderType.weaknesses.map((weakness, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-white font-bold" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 700 }}>{weakness}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Trading Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="lg:col-span-2"
      >
        <Card className="bg-white border-gray-200">
          <CardHeader className="p-4 sm:p-6 pb-3">
            <CardTitle className="flex items-center gap-2 text-black font-semibold text-lg sm:text-xl" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#5865F2] shrink-0" />
              Personalized Trading Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5865F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed font-normal" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
