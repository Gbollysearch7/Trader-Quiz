// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  category: QuestionCategory;
}

export interface QuizOption {
  id: string;
  text: string;
  scores: TraderTypeScores;
}

export type QuestionCategory =
  | 'experience'
  | 'style'
  | 'risk'
  | 'time'
  | 'analysis'
  | 'psychology'
  | 'preferences';

export interface TraderTypeScores {
  scalper?: number;
  swingTrader?: number;
  riskManager?: number;
  aggressiveGrowth?: number;
  technicalPurist?: number;
  newsTrader?: number;
  balancedOpportunist?: number;
}

// Trader Type
export type TraderTypeId =
  | 'scalper'
  | 'swingTrader'
  | 'riskManager'
  | 'aggressiveGrowth'
  | 'technicalPurist'
  | 'newsTrader'
  | 'balancedOpportunist';

export interface TraderType {
  id: TraderTypeId;
  name: string;
  tagline: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  icon: string;
  color: string;
}

// Account Types
export type AccountType = '2-phase-swing' | '1-phase';

export interface Account {
  id: string;
  type: AccountType;
  name: string;
  size: number;
  price: number;
  resetPrice: number;
  phase1Target: number;
  phase2Target?: number;
  leverage: string;
  dailyLossLimit: number;
  maxDrawdown: number;
  features: string[];
  bestFor: string[];
  isPopular?: boolean;
}

// Recommendation
export interface Recommendation {
  traderType: TraderType;
  primaryAccount: Account;
  alternativeAccounts: Account[];
  reasoning: string;
  tips: string[];
}

// Quiz State
export interface QuizState {
  currentQuestion: number;
  answers: Record<string, string>;
  isComplete: boolean;
  result?: Recommendation;
}

// Promotion
export interface Promotion {
  code: string;
  discount: number;
  refund: number;
  description: string;
}
