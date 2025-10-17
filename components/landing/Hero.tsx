'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      <div className="container relative z-10 px-4 sm:px-6 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
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
              className="h-12 sm:h-14 md:h-16 w-auto"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Badge className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Join 20,000+ Active Traders
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
              Discover Your
              <span className="block text-[#5865F2] mt-2">
                Trading Personality
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
              Take our science-backed quiz to identify your unique trading style
              and get matched with the perfect Tradersyard evaluation challenge.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full sm:w-auto"
          >
            <Link href="/quiz" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group bg-[#5865F2] hover:bg-[#4752C4] text-white min-h-[48px]">
                Take The Quiz
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white min-h-[48px]" asChild>
              <a
                href="https://tradersyard.com/#pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8"
          >
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-5 sm:p-6 rounded-lg bg-white border border-gray-200 hover:border-[#5865F2] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#5865F2]" />
              </div>
              <h3 className="font-semibold text-black text-base sm:text-lg" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>Personalized Insights</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
                Discover your unique trading strengths and weaknesses
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-5 sm:p-6 rounded-lg bg-white border border-gray-200 hover:border-[#5865F2] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#5865F2]" />
              </div>
              <h3 className="font-semibold text-black text-base sm:text-lg" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>Perfect Match</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
                Get matched with your ideal evaluation challenge
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 sm:space-y-3 p-5 sm:p-6 rounded-lg bg-white border border-gray-200 hover:border-[#5865F2] transition-colors">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#5865F2]" />
              </div>
              <h3 className="font-semibold text-black text-base sm:text-lg" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>Join Elite Traders</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
                Start your journey with Tradersyard today
              </p>
            </div>
          </motion.div>

          {/* Promo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2 sm:pt-4 px-4"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400 text-center">
                Limited Time: 40% OFF + 110% REFUND with code YARD40
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
