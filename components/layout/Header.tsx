'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            ty
          </div>
          <span className="text-xl font-semibold group-hover:text-primary transition-colors">
            Tradersyard
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/quiz"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Take Quiz
          </Link>
          <a
            href="https://tradersyard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Visit Tradersyard
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
