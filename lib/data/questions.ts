import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How long have you been actively trading?',
    category: 'experience',
    options: [
      {
        id: 'q1a',
        text: 'Less than 6 months',
        scores: { riskManager: 3 },
      },
      {
        id: 'q1b',
        text: '6 months - 2 years',
        scores: { balancedOpportunist: 2 },
      },
      {
        id: 'q1c',
        text: '2-5 years',
        scores: { technicalPurist: 2, swingTrader: 2 },
      },
      {
        id: 'q1d',
        text: '5+ years',
        scores: { aggressiveGrowth: 2, newsTrader: 2 },
      },
    ],
  },
  {
    id: 'q2',
    question: 'What is your preferred trading timeframe?',
    category: 'style',
    options: [
      {
        id: 'q2a',
        text: '1-minute to 15-minute charts',
        scores: { scalper: 5 },
      },
      {
        id: 'q2b',
        text: '15-minute to 1-hour charts',
        scores: { scalper: 2, balancedOpportunist: 2 },
      },
      {
        id: 'q2c',
        text: '4-hour to Daily charts',
        scores: { swingTrader: 5, newsTrader: 2 },
      },
      {
        id: 'q2d',
        text: 'I adapt based on market conditions',
        scores: { balancedOpportunist: 5 },
      },
    ],
  },
  {
    id: 'q3',
    question: 'How long do you typically hold a trade?',
    category: 'style',
    options: [
      {
        id: 'q3a',
        text: 'Minutes to hours',
        scores: { scalper: 5 },
      },
      {
        id: 'q3b',
        text: 'Hours to 1 day',
        scores: { balancedOpportunist: 3, scalper: 2 },
      },
      {
        id: 'q3c',
        text: '1-7 days',
        scores: { swingTrader: 5, newsTrader: 2 },
      },
      {
        id: 'q3d',
        text: 'Multiple weeks',
        scores: { swingTrader: 3, riskManager: 2 },
      },
    ],
  },
  {
    id: 'q4',
    question: 'What percentage of your account do you risk per trade?',
    category: 'risk',
    options: [
      {
        id: 'q4a',
        text: '0.5% or less',
        scores: { riskManager: 5 },
      },
      {
        id: 'q4b',
        text: '0.5% - 1%',
        scores: { riskManager: 3, technicalPurist: 2 },
      },
      {
        id: 'q4c',
        text: '1% - 2%',
        scores: { balancedOpportunist: 3, swingTrader: 2 },
      },
      {
        id: 'q4d',
        text: '2% - 5%',
        scores: { aggressiveGrowth: 5 },
      },
    ],
  },
  {
    id: 'q5',
    question: 'How many trades do you typically take per week?',
    category: 'style',
    options: [
      {
        id: 'q5a',
        text: '50+ trades',
        scores: { scalper: 5 },
      },
      {
        id: 'q5b',
        text: '20-50 trades',
        scores: { scalper: 3, aggressiveGrowth: 2 },
      },
      {
        id: 'q5c',
        text: '5-20 trades',
        scores: { balancedOpportunist: 3, technicalPurist: 2 },
      },
      {
        id: 'q5d',
        text: '1-5 trades',
        scores: { swingTrader: 5, riskManager: 3 },
      },
    ],
  },
  {
    id: 'q6',
    question: 'What is your primary method of market analysis?',
    category: 'analysis',
    options: [
      {
        id: 'q6a',
        text: 'Pure technical analysis',
        scores: { technicalPurist: 5 },
      },
      {
        id: 'q6b',
        text: 'Fundamental analysis and news',
        scores: { newsTrader: 5 },
      },
      {
        id: 'q6c',
        text: 'Combination of both',
        scores: { balancedOpportunist: 5 },
      },
      {
        id: 'q6d',
        text: 'Price action and patterns',
        scores: { technicalPurist: 3, scalper: 2 },
      },
    ],
  },
  {
    id: 'q7',
    question: 'How much time can you dedicate to trading daily?',
    category: 'time',
    options: [
      {
        id: 'q7a',
        text: '8+ hours - I\'m a full-time trader',
        scores: { scalper: 3, aggressiveGrowth: 3 },
      },
      {
        id: 'q7b',
        text: '4-8 hours - Serious part-time',
        scores: { balancedOpportunist: 3, technicalPurist: 2 },
      },
      {
        id: 'q7c',
        text: '1-4 hours - After work/school',
        scores: { swingTrader: 3, riskManager: 2 },
      },
      {
        id: 'q7d',
        text: 'Less than 1 hour - Very limited time',
        scores: { swingTrader: 2, riskManager: 3 },
      },
    ],
  },
  {
    id: 'q8',
    question: 'What is your main goal with funded trading?',
    category: 'psychology',
    options: [
      {
        id: 'q8a',
        text: 'Replace my full-time income',
        scores: { aggressiveGrowth: 3, scalper: 2 },
      },
      {
        id: 'q8b',
        text: 'Significant side income',
        scores: { balancedOpportunist: 3, swingTrader: 2 },
      },
      {
        id: 'q8c',
        text: 'Supplemental income',
        scores: { riskManager: 3, swingTrader: 2 },
      },
      {
        id: 'q8d',
        text: 'Learn and grow as a trader',
        scores: { riskManager: 2, technicalPurist: 2 },
      },
    ],
  },
  {
    id: 'q9',
    question: 'How do you react to a losing streak?',
    category: 'psychology',
    options: [
      {
        id: 'q9a',
        text: 'Reduce risk and analyze mistakes',
        scores: { riskManager: 5, technicalPurist: 2 },
      },
      {
        id: 'q9b',
        text: 'Take a break and reset',
        scores: { riskManager: 3, swingTrader: 2 },
      },
      {
        id: 'q9c',
        text: 'Push harder to recover losses',
        scores: { aggressiveGrowth: 5 },
      },
      {
        id: 'q9d',
        text: 'Stick to my plan regardless',
        scores: { technicalPurist: 5, balancedOpportunist: 2 },
      },
    ],
  },
  {
    id: 'q10',
    question: 'Which account feature is most important to you?',
    category: 'preferences',
    options: [
      {
        id: 'q10a',
        text: 'Lowest evaluation cost',
        scores: { riskManager: 3 },
      },
      {
        id: 'q10b',
        text: 'Fastest path to funding',
        scores: { aggressiveGrowth: 5, scalper: 3 },
      },
      {
        id: 'q10c',
        text: 'Highest profit split',
        scores: { balancedOpportunist: 3 },
      },
      {
        id: 'q10d',
        text: 'Most flexible trading rules',
        scores: { newsTrader: 3, swingTrader: 3 },
      },
    ],
  },
  {
    id: 'q11',
    question: 'Do you trade during major news events?',
    category: 'analysis',
    options: [
      {
        id: 'q11a',
        text: 'Yes, that\'s when I make most profits',
        scores: { newsTrader: 5 },
      },
      {
        id: 'q11b',
        text: 'Sometimes, if the setup is good',
        scores: { balancedOpportunist: 3, newsTrader: 2 },
      },
      {
        id: 'q11c',
        text: 'I avoid major news completely',
        scores: { riskManager: 5, technicalPurist: 2 },
      },
      {
        id: 'q11d',
        text: 'I only trade the technicals around news',
        scores: { technicalPurist: 5 },
      },
    ],
  },
  {
    id: 'q12',
    question: 'What\'s your preferred account starting size?',
    category: 'preferences',
    options: [
      {
        id: 'q12a',
        text: '$5,000 - $10,000 (Start small, build confidence)',
        scores: { riskManager: 5 },
      },
      {
        id: 'q12b',
        text: '$25,000 - $50,000 (Moderate, balanced approach)',
        scores: { balancedOpportunist: 3, swingTrader: 2 },
      },
      {
        id: 'q12c',
        text: '$100,000+ (Go big, I\'m experienced)',
        scores: { aggressiveGrowth: 5, newsTrader: 2 },
      },
      {
        id: 'q12d',
        text: 'Whatever matches my trading style',
        scores: { technicalPurist: 3, balancedOpportunist: 2 },
      },
    ],
  },
  {
    id: 'q13',
    question: 'How important is weekend trade holding to you?',
    category: 'preferences',
    options: [
      {
        id: 'q13a',
        text: 'Essential - I swing trade',
        scores: { swingTrader: 5, newsTrader: 2 },
      },
      {
        id: 'q13b',
        text: 'Somewhat important',
        scores: { balancedOpportunist: 3 },
      },
      {
        id: 'q13c',
        text: 'Not important - I close daily',
        scores: { scalper: 3, technicalPurist: 2 },
      },
      {
        id: 'q13d',
        text: 'I never hold overnight',
        scores: { scalper: 5, riskManager: 2 },
      },
    ],
  },
  {
    id: 'q14',
    question: 'What describes your ideal trading scenario?',
    category: 'style',
    options: [
      {
        id: 'q14a',
        text: 'Many small wins throughout the day',
        scores: { scalper: 5 },
      },
      {
        id: 'q14b',
        text: 'A few high-quality setups per week',
        scores: { swingTrader: 5, technicalPurist: 2 },
      },
      {
        id: 'q14c',
        text: 'Consistent daily profits',
        scores: { balancedOpportunist: 5 },
      },
      {
        id: 'q14d',
        text: 'Large occasional winners',
        scores: { aggressiveGrowth: 5, newsTrader: 3 },
      },
    ],
  },
  {
    id: 'q15',
    question: 'How do you handle drawdowns?',
    category: 'psychology',
    options: [
      {
        id: 'q15a',
        text: 'Reduce position size immediately',
        scores: { riskManager: 5 },
      },
      {
        id: 'q15b',
        text: 'Maintain consistency and trust my edge',
        scores: { technicalPurist: 5, aggressiveGrowth: 2 },
      },
      {
        id: 'q15c',
        text: 'Analyze and adjust strategy',
        scores: { balancedOpportunist: 5, technicalPurist: 2 },
      },
      {
        id: 'q15d',
        text: 'Take a break until confidence returns',
        scores: { riskManager: 3, swingTrader: 2 },
      },
    ],
  },
];
