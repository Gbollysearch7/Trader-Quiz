import { TraderTypeId, Account, Recommendation } from '@/types';
import { accounts } from '../data/accounts';
import { traderTypes } from '../data/traderTypes';

export function getRecommendation(
  traderTypeId: TraderTypeId,
  answers: Record<string, string>
): Recommendation {
  const traderType = traderTypes[traderTypeId];

  // Get primary account recommendation based on trader type
  const primaryAccount = getPrimaryAccount(traderTypeId, answers);

  // Get alternative accounts
  const alternativeAccounts = getAlternativeAccounts(
    primaryAccount,
    traderTypeId
  );

  // Get reasoning for recommendation
  const reasoning = getReasoning(traderTypeId, primaryAccount);

  // Get personalized tips
  const tips = getTips(traderTypeId);

  return {
    traderType,
    primaryAccount,
    alternativeAccounts,
    reasoning,
    tips,
  };
}

function getPrimaryAccount(
  traderTypeId: TraderTypeId,
  answers: Record<string, string>
): Account {
  // Extract relevant info from answers
  const experienceAnswer = answers['q1'];
  const accountSizeAnswer = answers['q12'];

  // Determine account size preference
  let preferredSize: number;

  if (accountSizeAnswer?.includes('q12a')) {
    preferredSize = 10000; // Small account
  } else if (accountSizeAnswer?.includes('q12c')) {
    preferredSize = 100000; // Large account
  } else {
    preferredSize = 50000; // Medium account
  }

  // Adjust for experience level
  if (experienceAnswer?.includes('q1a')) {
    // Beginner - recommend smaller
    preferredSize = Math.min(preferredSize, 10000);
  } else if (experienceAnswer?.includes('q1d')) {
    // Expert - can handle larger
    preferredSize = Math.max(preferredSize, 50000);
  }

  // Determine account type based on trader type
  let accountType: '1-phase' | '2-phase-swing';
  let recommendedSize = preferredSize;

  switch (traderTypeId) {
    case 'scalper':
      accountType = '1-phase';
      recommendedSize = Math.min(preferredSize, 50000);
      break;

    case 'aggressiveGrowth':
      accountType = '1-phase';
      recommendedSize = Math.max(preferredSize, 50000);
      break;

    case 'riskManager':
      accountType = '2-phase-swing';
      recommendedSize = Math.min(preferredSize, 25000);
      break;

    case 'swingTrader':
      accountType = '2-phase-swing';
      recommendedSize = Math.max(preferredSize, 50000);
      break;

    case 'newsTrader':
      accountType = '2-phase-swing';
      recommendedSize = Math.max(preferredSize, 50000);
      break;

    case 'technicalPurist':
      accountType = '2-phase-swing';
      recommendedSize = preferredSize;
      break;

    case 'balancedOpportunist':
      accountType = '2-phase-swing';
      recommendedSize = Math.max(25000, Math.min(preferredSize, 50000));
      break;

    default:
      accountType = '2-phase-swing';
      recommendedSize = preferredSize;
  }

  // Find matching account
  const matchingAccount = accounts.find(
    (acc) => acc.type === accountType && acc.size === recommendedSize
  );

  // Fallback to closest match if exact match not found
  return (
    matchingAccount ||
    accounts.find((acc) => acc.type === accountType && acc.size === 50000)!
  );
}

function getAlternativeAccounts(
  primaryAccount: Account,
  traderTypeId: TraderTypeId
): Account[] {
  const alternatives: Account[] = [];

  // Get accounts of same type with different sizes
  const sameTypeAccounts = accounts.filter(
    (acc) =>
      acc.type === primaryAccount.type &&
      acc.id !== primaryAccount.id &&
      (acc.size === primaryAccount.size / 2 || acc.size === primaryAccount.size * 2)
  );

  alternatives.push(...sameTypeAccounts.slice(0, 2));

  // If scalper or aggressive, show 1-phase alternatives
  if (
    (traderTypeId === 'scalper' || traderTypeId === 'aggressiveGrowth') &&
    primaryAccount.type === '1-phase'
  ) {
    const alternativeSize = accounts.find(
      (acc) =>
        acc.type === '1-phase' &&
        acc.size !== primaryAccount.size &&
        acc.id !== primaryAccount.id
    );
    if (alternativeSize && !alternatives.find((a) => a.id === alternativeSize.id)) {
      alternatives.push(alternativeSize);
    }
  }

  // For others, show 2-phase alternatives
  if (primaryAccount.type === '2-phase-swing' && alternatives.length < 2) {
    const moreAlternatives = accounts.filter(
      (acc) =>
        acc.type === '2-phase-swing' &&
        acc.id !== primaryAccount.id &&
        !alternatives.find((a) => a.id === acc.id)
    );
    alternatives.push(...moreAlternatives.slice(0, 2 - alternatives.length));
  }

  return alternatives.slice(0, 2);
}

function getReasoning(traderTypeId: TraderTypeId, account: Account): string {
  const reasoningMap: Record<TraderTypeId, string> = {
    scalper: `As a Precision Scalper, you need fast execution and a quick path to funding. The ${account.name} ($${account.size.toLocaleString()}) is perfect for your high-frequency trading style, offering ${account.phase2Target ? 'a streamlined 2-phase' : 'a fast 1-phase'} process to get you trading with real capital quickly.`,
    swingTrader: `As a Strategic Swing Trader, you need weekend holding capability and room for larger position sizes. The ${account.name} ($${account.size.toLocaleString()}) provides the flexibility you need with no restrictions on holding trades over weekends, perfect for capturing multi-day moves.`,
    riskManager: `As a Disciplined Risk Manager, starting with a ${account.name} ($${account.size.toLocaleString()}) allows you to build confidence while maintaining your conservative approach. The static drawdown and clear rules align perfectly with your risk management principles.`,
    aggressiveGrowth: `As an Aggressive Growth Trader, you need capital that can handle your bold style. The ${account.name} ($${account.size.toLocaleString()}) gives you room for larger position sizes and volatility, with ${account.phase2Target ? '2 phases' : '1 phase'} to prove your edge before scaling up.`,
    technicalPurist: `As a Technical Purist, you need a flexible account that supports your systematic approach. The ${account.name} ($${account.size.toLocaleString()}) has no restrictions on your technical strategy, allowing you to trade your system without interference.`,
    newsTrader: `As a News & Fundamental Trader, you need an account that explicitly allows news trading and weekend holding for major events. The ${account.name} ($${account.size.toLocaleString()}) is designed for your event-driven style, with the flexibility to capitalize on economic releases.`,
    balancedOpportunist: `As a Balanced Opportunist, you need maximum flexibility to adapt your strategy. The ${account.name} ($${account.size.toLocaleString()}) provides the perfect balance of size and rules, allowing you to scalp, swing, or day trade as opportunities arise.`,
  };

  return reasoningMap[traderTypeId];
}

function getTips(traderTypeId: TraderTypeId): string[] {
  const tipsMap: Record<TraderTypeId, string[]> = {
    scalper: [
      'Focus on liquid markets during high-volume sessions',
      'Keep your stop losses tight - 5-10 pips maximum',
      'Track your win rate - aim for 60%+ with scalping',
      'Avoid trading during major news unless experienced',
      'Take regular breaks to maintain focus and decision quality',
    ],
    swingTrader: [
      'Identify the major trend before entering swing positions',
      'Use wider stops to avoid getting shaken out of good trades',
      'Plan your entries and exits over the weekend',
      'Focus on high-timeframe support and resistance',
      'Be patient - let your winners run to their full potential',
    ],
    riskManager: [
      'Never risk more than 1% of your account per trade',
      'Always use stop losses - no exceptions',
      'Journal every trade to identify patterns in your performance',
      'Focus on consistent base hits, not home runs',
      'Build your confidence with smaller positions first',
    ],
    aggressiveGrowth: [
      'Ensure your reward/risk ratio is at least 2:1 on every trade',
      'Be extra disciplined with your daily loss limit',
      'Don\'t confuse confidence with recklessness',
      'Scale position size based on conviction and setup quality',
      'Have a plan to lock in profits as trades move in your favor',
    ],
    technicalPurist: [
      'Stick to your trading system and avoid second-guessing',
      'Backtest your strategy before going live',
      'Don\'t overload your charts with too many indicators',
      'Wait for multiple timeframe confirmation on entries',
      'Ignore the news - trust your technical edge',
    ],
    newsTrader: [
      'Always know the economic calendar for the week ahead',
      'Use tight stops during news - volatility can spike',
      'Wait for the initial spike to settle before entering',
      'Have a plan for both scenarios (bullish and bearish outcomes)',
      'Consider the bigger picture - one data point doesn\'t make a trend',
    ],
    balancedOpportunist: [
      'Define which strategy you\'re using before each trade',
      'Don\'t switch strategies mid-trade - commit to your plan',
      'Keep separate statistics for each trading style you use',
      'Adapt to market conditions but maintain discipline',
      'Develop mastery in 2-3 styles rather than trying everything',
    ],
  };

  return tipsMap[traderTypeId];
}
