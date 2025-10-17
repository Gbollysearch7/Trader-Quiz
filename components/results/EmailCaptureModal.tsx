'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailCaptureModalProps {
  onSubmit: (email: string) => void;
}

export function EmailCaptureModal({ onSubmit }: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    onSubmit(email);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-[#5865F2] shadow-2xl">
            <CardHeader className="text-center space-y-2 pb-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#5865F2]" />
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-[#5865F2]" style={{ fontFamily: '"Clash Display", "Clash Display Fallback: Arial", sans-serif', fontWeight: 600 }}>
                Almost There!
              </CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground" style={{ fontFamily: 'Inter, "Inter Fallback: Arial", sans-serif', fontWeight: 400 }}>
                Enter your email to unlock your personalized trading results
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="h-12 text-base"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg bg-[#5865F2] hover:bg-[#4752C4] text-white group min-h-[48px]"
                >
                  View My Results
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll never share your email. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
