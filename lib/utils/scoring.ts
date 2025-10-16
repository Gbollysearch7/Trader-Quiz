import { QuizQuestion, TraderTypeId, TraderTypeScores } from '@/types';
import { quizQuestions } from '../data/questions';

export function calculateTraderType(
  answers: Record<string, string>
): TraderTypeId {
  const scores: Record<TraderTypeId, number> = {
    scalper: 0,
    swingTrader: 0,
    riskManager: 0,
    aggressiveGrowth: 0,
    technicalPurist: 0,
    newsTrader: 0,
    balancedOpportunist: 0,
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) return;

    const option = question.options.find((o) => o.id === optionId);
    if (!option) return;

    // Add scores from this option
    Object.entries(option.scores).forEach(([type, points]) => {
      const traderType = type as keyof TraderTypeScores;
      if (scores[traderType] !== undefined) {
        scores[traderType] += points;
      }
    });
  });

  // Find the trader type with the highest score
  const sortedTypes = Object.entries(scores).sort(([, a], [, b]) => b - a);

  return sortedTypes[0][0] as TraderTypeId;
}

export function getAnsweredQuestions(answers: Record<string, string>): number {
  return Object.keys(answers).length;
}

export function getProgressPercentage(answers: Record<string, string>): number {
  const answeredCount = getAnsweredQuestions(answers);
  const totalQuestions = quizQuestions.length;
  return Math.round((answeredCount / totalQuestions) * 100);
}
