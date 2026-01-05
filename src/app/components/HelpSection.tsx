import { Search, Book, Shield, CreditCard, Users, Settings, AlertCircle, HelpCircle, ChevronRight, ExternalLink, MessageCircle, Mail, Phone, TrendingUp, ChevronDown, X, Banknote, Smartphone, Receipt } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function HelpSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // Detailed article content
  const articleContent: Record<string, any> = {
    // GETTING STARTED
    'what-is-predict-by-suppple': {
      title: 'What is Predict by Suppple?',
      category: 'Getting Started',
      content: [
        {
          heading: 'Overview',
          text: 'Predict by Suppple is a regulated prediction market platform that allows users to trade on the outcomes of real-world events. Our platform combines cutting-edge technology with financial market principles to create a transparent, fair, and engaging way to express your predictions about the future.'
        },
        {
          heading: 'How It Works',
          text: 'Prediction markets function like financial markets. Each event has a market where participants can buy and sell contracts that pay out based on whether a specific outcome occurs. Prices in the market represent the collective probability that the crowd assigns to each outcome.'
        },
        {
          heading: 'Event Categories',
          list: [
            'Sports - Football, Basketball, Tennis, Cricket, and more',
            'Politics - Elections, Policy Decisions, Governance',
            'Economics - Market Indices, Currency Movements, GDP Predictions',
            'Entertainment - Awards Shows, Box Office Performance, TV Ratings',
            'Technology - Product Launches, Company Performance, Innovation Milestones',
            'Climate & Science - Weather Events, Scientific Discoveries, Environmental Metrics'
          ]
        },
        {
          heading: 'Regulatory Compliance',
          text: 'Predict by Suppple operates through licensed partners in regulated jurisdictions. We maintain strict compliance with financial regulations, anti-money laundering (AML) standards, and know-your-customer (KYC) requirements to ensure a safe and legal trading environment.'
        },
        {
          heading: 'Why Prediction Markets?',
          list: [
            'Aggregate wisdom from diverse participants',
            'Real-time probability updates based on new information',
            'Transparent pricing and settlement',
            'Incentive-aligned forecasting',
            'Historical accuracy often exceeding traditional polls and expert predictions'
          ]
        }
      ]
    },
    'how-do-prediction-markets-work': {
      title: 'How do prediction markets work?',
      category: 'Getting Started',
      content: [
        {
          heading: 'The Basics',
          text: 'Prediction markets are exchange-traded markets created for the purpose of trading the outcome of events. The market prices can be interpreted as the probability of the event occurring.'
        },
        {
          heading: 'Contract Types',
          text: 'Binary Outcome Contracts: Most markets offer "Yes" and "No" contracts. If you believe an event will happen, you buy "Yes" contracts. If you believe it won\'t happen, you buy "No" contracts. At settlement, winning contracts pay $1.00, and losing contracts pay $0.00.'
        },
        {
          heading: 'Pricing Mechanism',
          list: [
            'Prices range from $0.01 to $0.99 per contract',
            'A price of $0.65 for "Yes" means the market estimates a 65% probability',
            'Yes + No prices always equal $1.00',
            'Prices update in real-time based on supply and demand'
          ]
        },
        {
          heading: 'Example Trade',
          text: 'Example: "Will Team A win the championship?" trades at $0.40 for Yes.\n\n- You buy 100 Yes contracts at $0.40 = $40 investment\n- If Team A wins: You receive 100 × $1.00 = $100 (profit: $60)\n- If Team A loses: Your contracts expire worthless (loss: $40)\n\nAlternatively, you can sell your position before the event concludes if the price moves in your favor.'
        },
        {
          heading: 'Market Settlement',
          text: 'When an event concludes, our team verifies the outcome using official sources. Winning positions are credited at $1.00 per contract, and funds are immediately available for withdrawal or trading in other markets.'
        }
      ]
    },
    'creating-your-first-account': {
      title: 'Creating your first account',
      category: 'Getting Started',
      content: [
        {
          heading: 'Step 1: Registration',
          list: [
            'Visit predict.suppple.co.uk and click "Sign Up"',
            'Provide your email address and create a strong password',
            'Accept the Terms of Service and Privacy Policy',
            'Verify your email address via the confirmation link sent to your inbox'
          ]
        },
        {
          heading: 'Step 2: Profile Setup',
          list: [
            'Complete your personal information (full name, date of birth, address)',
            'Select your preferred currency (USD, EUR, GBP, ZAR)',
            'Set up security preferences (two-factor authentication recommended)',
            'Choose notification preferences'
          ]
        },
        {
          heading: 'Step 3: Identity Verification (KYC)',
          text: 'To comply with regulatory requirements and protect against fraud, all users must complete identity verification before depositing or trading.'
        },
        {
          heading: 'Required Documents',
          list: [
            'Government-issued photo ID (passport, driver\'s license, or national ID card)',
            'Proof of address (utility bill, bank statement, or government letter dated within 3 months)',
            'Selfie verification (some users may be required to submit a photo holding their ID)'
          ]
        },
        {
          heading: 'Verification Timeline',
          text: 'Most verifications are completed within 1-24 hours. Complex cases may take up to 5 business days. You\'ll receive email updates throughout the process.'
        }
      ]
    },
    'understanding-market-types': {
      title: 'Understanding market types',
      category: 'Getting Started',
      content: [
        {
          heading: 'Market Categories',
          text: 'Predict by Suppple offers various market types to suit different prediction preferences and risk appetites.'
        },
        {
          heading: '1. Binary Markets',
          text: 'The most common market type where outcomes are Yes or No. Example: "Will Team A win the championship?" - You buy Yes if you think they will win, or No if you think they won\'t.'
        },
        {
          heading: 'Binary Market Characteristics',
          list: [
            'Two possible outcomes: Yes or No',
            'Contracts settle at $1.00 (winners) or $0.00 (losers)',
            'Prices represent probability (e.g., $0.65 = 65% chance)',
            'Simple, straightforward, ideal for beginners',
            'Most liquid markets on the platform'
          ]
        },
        {
          heading: '2. Multi-Outcome Markets',
          text: 'Markets with more than two possible outcomes. Example: "Who will win the Premier League?" with options for Manchester City, Arsenal, Liverpool, etc.'
        },
        {
          heading: 'Multi-Outcome Characteristics',
          list: [
            'Multiple distinct outcomes (3 to 20+ options)',
            'Only one outcome can win',
            'Prices across all outcomes sum to approximately $1.00',
            'More complex analysis required',
            'Higher potential returns on long-shot predictions'
          ]
        },
        {
          heading: '3. Scalar Markets',
          text: 'Markets where the outcome is a numerical range rather than a specific result. Example: "How many points will Player X score?" with ranges like 0-10, 11-20, 21-30, 31+'
        },
        {
          heading: 'Scalar Market Characteristics',
          list: [
            'Outcome is a number or range',
            'Useful for predicting quantities, scores, or measurements',
            'Multiple contracts can be purchased across different ranges',
            'Allows hedging across adjacent ranges',
            'Settlements based on official statistics'
          ]
        },
        {
          heading: '4. Time-Based Markets',
          text: 'Markets that settle at a specific date/time regardless of external events. Example: "What will Bitcoin\'s price be on December 31, 2025?"'
        },
        {
          heading: 'Time-Based Characteristics',
          list: [
            'Settlement occurs at a predetermined time',
            'Outcome determined by price/value at exact moment',
            'Used for financial predictions, indices, commodities',
            'Allows long-term speculation',
            'Often settled using official exchange data'
          ]
        },
        {
          heading: '5. Conditional Markets',
          text: 'Markets that only activate if a certain condition is met. Example: "If Team A reaches the final, will they win it?" (only settles if Team A reaches the final)'
        },
        {
          heading: 'Conditional Characteristics',
          list: [
            'Depends on a prerequisite event occurring',
            'Void and refunded if condition not met',
            'Higher complexity, lower liquidity',
            'Allows sophisticated betting strategies',
            'Clearly stated conditions in market description'
          ]
        },
        {
          heading: 'Choosing the Right Market Type',
          text: 'Binary markets are best for beginners due to their simplicity. Multi-outcome markets offer more options but require deeper analysis. Scalar markets are ideal for statistical predictions. Always read the market description carefully to understand settlement criteria.'
        }
      ]
    },
    'how-to-place-your-first-prediction': {
      title: 'How to place your first prediction',
      category: 'Getting Started',
      content: [
        {
          heading: 'Getting Ready',
          text: 'Before placing your first prediction, ensure you have: (1) Created and verified your account, (2) Completed identity verification (KYC), (3) Deposited funds into your wallet.'
        },
        {
          heading: 'Step 1: Browse Markets',
          list: [
            'Log into your Predict account',
            'Navigate to "Markets" from the main menu',
            'Use filters to find markets by category: Sports, Politics, Entertainment, etc.',
            'Browse trending markets or search for specific events',
            'Click on a market that interests you to see details'
          ]
        },
        {
          heading: 'Step 2: Analyze the Market',
          list: [
            'Read the market description carefully',
            'Check the settlement date and criteria',
            'Review current prices (represent market probability)',
            'Look at trading volume and liquidity',
            'Read official rules and conditions',
            'Check similar past markets for reference'
          ]
        },
        {
          heading: 'Step 3: Decide Your Position',
          text: 'Choose whether to buy Yes (you believe the event will happen) or No (you believe it won\'t happen). Consider the current price - lower prices mean higher potential returns but lower market confidence.'
        },
        {
          heading: 'Step 4: Place Your Order',
          list: [
            'Click "Buy Yes" or "Buy No" button',
            'Enter the number of contracts you want to purchase',
            'Review the total cost (contracts × current price)',
            'Choose order type: Market Order (instant) or Limit Order (set your price)',
            'Review your order summary',
            'Click "Confirm Purchase"'
          ]
        },
        {
          heading: 'Order Example',
          text: 'Market: "Will it rain tomorrow in London?"\\nCurrent Price: Yes = $0.60, No = $0.40\\n\\nYou believe it will rain.\\nYou buy 50 Yes contracts at $0.60.\\nTotal cost: 50 × $0.60 = $30.00\\n\\nIf it rains: You receive 50 × $1.00 = $50 (profit: $20)\\nIf it doesn\'t rain: Contracts expire worthless (loss: $30)'
        },
        {
          heading: 'Step 5: Manage Your Position',
          list: [
            'View your position in "My Portfolio"',
            'Monitor price movements in real-time',
            'Set price alerts for significant changes',
            'Option to sell before settlement if price moves favorably',
            'Wait for market settlement to receive payout'
          ]
        },
        {
          heading: 'Tips for First-Time Traders',
          list: [
            'Start with small amounts ($10-50) to learn the platform',
            'Choose binary markets with clear outcomes',
            'Pick topics you know well (your favorite sport, industry, etc.)',
            'Don\'t invest more than you can afford to lose',
            'Use market research and analysis, not just gut feeling',
            'Diversify across multiple markets rather than one big bet'
          ]
        },
        {
          heading: 'What Happens Next?',
          text: 'Your position is now active. You can hold until settlement, sell early if the price moves in your favor, or buy more contracts if you want to increase your position. When the event concludes, the market settles and winning positions receive $1.00 per contract automatically.'
        }
      ]
    },
    'reading-market-probabilities': {
      title: 'Reading market probabilities',
      category: 'Getting Started',
      content: [
        {
          heading: 'Understanding Market Prices',
          text: 'In prediction markets, prices directly represent the collective probability that the market assigns to an outcome occurring. This is one of the most powerful features of prediction markets.'
        },
        {
          heading: 'Price as Probability',
          text: 'The price of a Yes contract can be interpreted as the percentage probability. For example:\\n\\n- $0.75 = 75% probability\\n- $0.50 = 50% probability (coin flip)\\n- $0.25 = 25% probability\\n- $0.10 = 10% probability'
        },
        {
          heading: 'Why Prices Equal Probability',
          list: [
            'Winning contracts pay exactly $1.00',
            'If you buy at $0.60, you need a >60% chance to profit',
            'Traders continuously adjust prices based on new information',
            'Arbitrage opportunities keep Yes + No prices balanced',
            'Market wisdom aggregates all participants\' knowledge'
          ]
        },
        {
          heading: 'Reading Binary Market Probabilities',
          text: 'In binary (Yes/No) markets, the Yes and No prices always sum to approximately $1.00 (small spreads may cause minor variations).'
        },
        {
          heading: 'Binary Example',
          text: 'Market: "Will Team A win the match?"\\n\\nYes Price: $0.70 → Market estimates 70% probability Team A wins\\nNo Price: $0.30 → Market estimates 30% probability Team A loses\\n\\nInterpretation: The crowd collectively believes Team A is the favorite but not a certainty.'
        },
        {
          heading: 'Reading Multi-Outcome Probabilities',
          text: 'In multi-outcome markets, each outcome has its own price. All prices sum to approximately $1.00.'
        },
        {
          heading: 'Multi-Outcome Example',
          text: 'Market: "Who will win the championship?"\\n\\nTeam A: $0.45 (45% probability)\\nTeam B: $0.30 (30% probability)\\nTeam C: $0.15 (15% probability)\\nOther: $0.10 (10% probability)\\n\\nInterpretation: Team A is the favorite, but there\'s a 55% chance someone else wins.'
        },
        {
          heading: 'How Probabilities Change',
          list: [
            'News and Events: Major announcements shift prices rapidly',
            'New Information: Injuries, policy changes, economic data',
            'Time Decay: Probabilities converge toward reality as event approaches',
            'Volume: High-volume markets tend to be more accurate',
            'Expert Activity: Informed traders can move markets significantly'
          ]
        },
        {
          heading: 'Comparing Market vs Personal Probability',
          text: 'Trading opportunities exist when your probability assessment differs from the market\'s.'
        },
        {
          heading: 'Trading Decision Framework',
          list: [
            'Market shows 40% probability ($0.40 Yes price)',
            'Your analysis suggests 60% probability',
            'Opportunity: Buy Yes contracts at $0.40',
            'Expected value: Positive if your analysis is correct',
            'Risk: You could be wrong; market could be right'
          ]
        },
        {
          heading: 'Accuracy of Market Probabilities',
          text: 'Studies show prediction markets are remarkably accurate, often outperforming polls, expert predictions, and other forecasting methods. Markets with high volume and diverse participants tend to be most accurate.'
        },
        {
          heading: 'Common Probability Patterns',
          list: [
            'Favorite-Longshot Bias: Favorites slightly underpriced, longshots overpriced',
            'Recency Bias: Markets overreact to recent news',
            'Overconfidence: Prices sometimes too extreme (too close to 0 or 1)',
            'Herd Behavior: Prices can temporarily deviate from fundamentals'
          ]
        },
        {
          heading: 'Using Probabilities for Better Decisions',
          list: [
            'Don\'t just bet on favorites - look for value (mispriced markets)',
            'Compare market probability to your own research',
            'Consider multiple sources before trading',
            'Track market accuracy over time to calibrate your strategy',
            'Use probability thinking in position sizing'
          ]
        }
      ]
    },

    // DEPOSITS & WITHDRAWALS
    'how-to-deposit-funds': {
      title: 'How to deposit funds',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Overview',
          text: 'Predict by Suppple offers multiple secure deposit methods to fund your trading account. All deposits are processed through licensed payment providers and encrypted for your security.'
        },
        {
          heading: 'Available Deposit Methods',
          text: 'We support the following deposit options depending on your region:'
        },
        {
          heading: '1. Card Payment (Debit/Credit Cards)',
          list: [
            'Accepted Cards: Visa, Mastercard, Maestro',
            'Processing Time: Instant (funds available immediately)',
            'Minimum Deposit: $10 / £10 / €10 / R100',
            'Maximum Deposit: $5,000 per transaction (higher limits available with verification)',
            'Fees: No fees from Predict (your card provider may charge currency conversion fees)'
          ]
        },
        {
          heading: 'How to Deposit via Card',
          list: [
            'Navigate to "Wallet" > "Deposit"',
            'Select "Card Payment"',
            'Enter deposit amount',
            'Provide card details (securely processed via PCI-compliant payment gateway)',
            'Confirm transaction with 3D Secure authentication',
            'Funds appear instantly in your account'
          ]
        },
        {
          heading: '2. Stripe (Online Banking & Digital Wallets)',
          list: [
            'Supported Methods: Bank transfers, Apple Pay, Google Pay, iDEAL, Bancontact, SEPA',
            'Processing Time: Instant to 2 business days (depends on method)',
            'Minimum Deposit: $20 / £15 / €20',
            'Maximum Deposit: $10,000 per transaction',
            'Fees: Varies by payment method (displayed before confirmation)'
          ]
        },
        {
          heading: 'How to Deposit via Stripe',
          list: [
            'Go to "Wallet" > "Deposit"',
            'Select "Stripe Payment"',
            'Choose your preferred payment method (bank transfer, digital wallet, etc.)',
            'Enter amount and follow prompts',
            'Complete authentication through your bank or payment provider',
            'Receive confirmation email when funds are credited'
          ]
        },
        {
          heading: '3. Voucher Purchase (Prepaid Vouchers)',
          list: [
            'Where to Buy: Partner retail locations, online voucher portals',
            'Denominations: $10, $25, $50, $100, $250, $500',
            'Processing Time: Instant (upon voucher redemption)',
            'Expiry: Vouchers valid for 12 months from purchase date',
            'Fees: No additional fees (value matches deposit amount)'
          ]
        },
        {
          heading: 'How to Use a Voucher',
          list: [
            'Purchase a Predict voucher from an authorized retailer',
            'Log into your Predict account',
            'Navigate to "Wallet" > "Deposit" > "Redeem Voucher"',
            'Enter the 16-digit voucher code',
            'Click "Redeem" - funds credited instantly',
            'Voucher is single-use and cannot be reversed once redeemed'
          ]
        },
        {
          heading: '4. Carrier Billing (Mobile Phone Payment)',
          list: [
            'Supported Carriers: MTN, Vodacom, Telkom, Cell C (South Africa), plus select carriers in Kenya, Nigeria, Ghana',
            'Processing Time: Instant',
            'Minimum Deposit: $5 / R50',
            'Maximum Deposit: $100 / R1,000 per transaction (carrier-dependent)',
            'Fees: Carrier fee (typically 5-10% - displayed before confirmation)'
          ]
        },
        {
          heading: 'How to Deposit via Carrier Billing',
          list: [
            'Go to "Wallet" > "Deposit"',
            'Select "Mobile Payment" or "Carrier Billing"',
            'Choose your mobile carrier from the list',
            'Enter your mobile phone number',
            'Select deposit amount',
            'Confirm via SMS code sent to your phone',
            'Amount charged to your mobile phone bill or deducted from prepaid balance'
          ]
        },
        {
          heading: '5. Bank Transfer / Electronic Funds Transfer (EFT)',
          list: [
            'Supported Countries: South Africa, UK, EU, USA (via ACH)',
            'Processing Time: 1-3 business days',
            'Minimum Deposit: $50 / £50 / €50 / R500',
            'Maximum Deposit: No maximum (subject to verification limits)',
            'Fees: Free for most banks'
          ]
        },
        {
          heading: 'How to Deposit via Bank Transfer',
          list: [
            'Navigate to "Wallet" > "Deposit" > "Bank Transfer"',
            'View unique banking details assigned to your account',
            'Initiate transfer from your bank (use provided reference number)',
            'Funds typically appear within 1-3 business days',
            'Email notification sent when deposit is credited'
          ]
        },
        {
          heading: 'Important Notes',
          list: [
            'Deposit limits increase with account verification level',
            'All deposits must come from accounts in your name (third-party deposits not accepted)',
            'Currency conversion rates applied at time of deposit',
            'Deposits are non-reversible once credited to your account',
            'Failed deposits are automatically refunded within 5-7 business days'
          ]
        }
      ]
    },
    'accepted-payment-methods': {
      title: 'Accepted payment methods',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Payment Methods by Region',
          text: 'Predict by Suppple supports region-specific payment methods to provide convenient access for all users.'
        },
        {
          heading: 'South Africa',
          list: [
            'Debit/Credit Cards (Visa, Mastercard)',
            'EFT (Electronic Funds Transfer)',
            'Instant EFT',
            'Vouchers (available at Pick n Pay, Shoprite, Checkers)',
            'Mobile Payments (MTN, Vodacom, Telkom, Cell C)',
            'PayShap / PayFast',
            'SnapScan',
            'Zapper'
          ]
        },
        {
          heading: 'United Kingdom',
          list: [
            'Debit Cards (Visa, Mastercard, Maestro)',
            'Bank Transfer (Faster Payments)',
            'Apple Pay',
            'Google Pay',
            'PayPal',
            'Stripe Checkout'
          ]
        },
        {
          heading: 'European Union',
          list: [
            'Debit/Credit Cards (Visa, Mastercard)',
            'SEPA Bank Transfer',
            'iDEAL (Netherlands)',
            'Bancontact (Belgium)',
            'Giropay (Germany)',
            'Sofort',
            'Apple Pay / Google Pay'
          ]
        },
        {
          heading: 'United States',
          list: [
            'Debit Cards (Visa, Mastercard)',
            'ACH Bank Transfer',
            'Wire Transfer',
            'Apple Pay',
            'Google Pay',
            'Venmo (coming soon)'
          ]
        },
        {
          heading: 'Payment Method Comparison',
          text: 'Each payment method has different characteristics:'
        },
        {
          heading: 'Instant Methods (0-5 minutes)',
          list: [
            'Card Payments',
            'Mobile Payments',
            'Digital Wallets (Apple Pay, Google Pay)',
            'Instant EFT',
            'Vouchers'
          ]
        },
        {
          heading: 'Standard Methods (1-3 business days)',
          list: [
            'Bank Transfers',
            'SEPA Transfers',
            'ACH Transfers'
          ]
        }
      ]
    },
    'withdrawal-process-and-timing': {
      title: 'Withdrawal process and timing',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Withdrawal Overview',
          text: 'Withdrawing funds from your Predict account is a secure and straightforward process. We support multiple withdrawal methods to ensure you can access your winnings conveniently.'
        },
        {
          heading: 'Available Withdrawal Methods',
          text: 'Withdrawal methods depend on your account verification level and region.'
        },
        {
          heading: '1. Electronic Funds Transfer (EFT) / Bank Transfer',
          list: [
            'Processing Time: 2-5 business days',
            'Minimum Withdrawal: $20 / £20 / €20 / R200',
            'Maximum Withdrawal: $50,000 per transaction',
            'Fees: Free for withdrawals over $100. Under $100: $2 processing fee',
            'Requirements: Verified bank account in your name'
          ]
        },
        {
          heading: 'How to Withdraw via Bank Transfer',
          list: [
            'Go to "Wallet" > "Withdraw"',
            'Select "Bank Transfer" as withdrawal method',
            'Enter withdrawal amount',
            'Verify bank account details (must match account holder name)',
            'Confirm withdrawal request',
            'Receive confirmation email',
            'Funds arrive in 2-5 business days',
            'Email notification sent when transfer is complete'
          ]
        },
        {
          heading: '2. Card Withdrawal (Return to Card)',
          list: [
            'Processing Time: 3-7 business days',
            'Minimum Withdrawal: $10 / £10 / €10',
            'Maximum Withdrawal: Up to original deposit amount per card',
            'Fees: Free',
            'Note: Can only withdraw up to the amount deposited via each card'
          ]
        },
        {
          heading: 'How to Withdraw to Card',
          list: [
            'Navigate to "Wallet" > "Withdraw"',
            'Select "Card Withdrawal"',
            'Choose the card (if multiple cards used for deposits)',
            'Enter amount (up to deposited amount on that card)',
            'Confirm withdrawal',
            'Funds returned to original card in 3-7 business days'
          ]
        },
        {
          heading: '3. Digital Wallet Withdrawal',
          list: [
            'Supported: PayPal, Skrill, Neteller (region-dependent)',
            'Processing Time: 24-48 hours',
            'Minimum Withdrawal: $10',
            'Maximum Withdrawal: $10,000 per transaction',
            'Fees: 2% fee (capped at $10)'
          ]
        },
        {
          heading: '4. Cryptocurrency Withdrawal (Coming Soon)',
          list: [
            'Supported: Bitcoin, Ethereum, USDT',
            'Processing Time: 1-24 hours',
            'Minimum: $50',
            'Fees: Network fees apply'
          ]
        },
        {
          heading: 'Withdrawal Process Timeline',
          text: 'Step-by-step breakdown:'
        },
        {
          heading: 'Stage 1: Request Submission (Instant)',
          text: 'You submit withdrawal request through your account dashboard.'
        },
        {
          heading: 'Stage 2: Security Review (1-24 hours)',
          text: 'Our system performs automated security checks including AML screening, account verification status, and transaction pattern analysis.'
        },
        {
          heading: 'Stage 3: Processing (1-2 business days)',
          text: 'Approved withdrawals are queued for payment processing. Funds are sent to your chosen withdrawal method.'
        },
        {
          heading: 'Stage 4: Payment Arrival (1-5 business days)',
          text: 'Depending on the withdrawal method, funds arrive in your account. Bank transfers typically take 2-5 business days, while digital wallets are faster (24-48 hours).'
        },
        {
          heading: 'Important Withdrawal Rules',
          list: [
            'First withdrawal requires identity verification completion',
            'Withdrawals must be made to accounts/cards in your name only',
            'Anti-money laundering rules require withdrawals to match deposit method where possible',
            'Bonus funds may have wagering requirements before withdrawal',
            'Pending bets must settle before associated funds can be withdrawn',
            'Withdrawals are processed Monday-Friday (excluding public holidays)',
            'Weekend requests processed on next business day'
          ]
        },
        {
          heading: 'Withdrawal Limits by Verification Level',
          text: 'Your withdrawal limits depend on account verification:'
        },
        {
          heading: 'Basic Verification',
          list: [
            'Daily Limit: $500',
            'Monthly Limit: $2,000'
          ]
        },
        {
          heading: 'Enhanced Verification',
          list: [
            'Daily Limit: $5,000',
            'Monthly Limit: $20,000'
          ]
        },
        {
          heading: 'Premium Verification (High-Volume Traders)',
          list: [
            'Daily Limit: $50,000',
            'Monthly Limit: $200,000',
            'Requires additional documentation and review'
          ]
        },
        {
          heading: 'Troubleshooting Withdrawals',
          text: 'If your withdrawal is delayed or rejected:'
        },
        {
          heading: 'Common Issues',
          list: [
            'Incomplete verification - Complete KYC process',
            'Bank details incorrect - Update and verify your bank account information',
            'Pending bets - Wait for all active positions to settle',
            'Bonus wagering incomplete - Check bonus terms for completion requirements',
            'Security review required - May take up to 72 hours for large withdrawals',
            'Weekend processing - Withdrawals requested on weekends process Monday'
          ]
        },
        {
          heading: 'Contact Support',
          text: 'If you experience withdrawal issues beyond these common causes, contact our support team at support@suppple.co.uk or via live chat for assistance.'
        }
      ]
    },
    'payment-processing-fees': {
      title: 'Payment processing fees',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Fee Structure',
          text: 'Predict by Suppple aims to keep fees as low as possible. Here\'s a comprehensive breakdown:'
        },
        {
          heading: 'Deposit Fees',
          list: [
            'Card Payments: FREE (0% fee)',
            'Bank Transfer / EFT: FREE',
            'Stripe (varies by method): 0-2% (displayed before confirmation)',
            'Mobile / Carrier Billing: 5-10% (charged by mobile carrier)',
            'Vouchers: FREE (voucher value = deposit amount)',
            'Digital Wallets: 0-1.5% (method dependent)'
          ]
        },
        {
          heading: 'Withdrawal Fees',
          list: [
            'Bank Transfer (EFT) >$100: FREE',
            'Bank Transfer (EFT) <$100: $2 fee',
            'Card Withdrawal: FREE',
            'Digital Wallet: 2% (max $10)',
            'Cryptocurrency (coming soon): Network fee only'
          ]
        },
        {
          heading: 'Trading Fees',
          text: 'Predict by Suppple does NOT charge trading fees, commissions, or spread markups. You keep 100% of your profits.'
        },
        {
          heading: 'Currency Conversion Fees',
          text: 'If you deposit or withdraw in a currency different from your account base currency, a conversion fee of 1-2% may apply based on market rates.'
        },
        {
          heading: 'Third-Party Fees',
          text: 'Some fees may be charged by third parties (your bank, card issuer, or payment provider) that are outside our control. Always check with your financial institution.'
        }
      ]
    },
    'minimum-and-maximum-deposit-limits': {
      title: 'Minimum and maximum deposit limits',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Standard Deposit Limits',
          text: 'Predict by Suppple implements deposit limits for user protection and regulatory compliance.'
        },
        {
          heading: 'Minimum Deposits by Method',
          list: [
            'Card (Debit/Credit): $10 / £10 / €10 / R100',
            'Bank Transfer: $50 / £50 / €50 / R500',
            'Stripe Payment: $20 / £15 / €20',
            'Voucher: Minimum voucher denomination ($10)',
            'Mobile Payment: $5 / R50'
          ]
        },
        {
          heading: 'Maximum Deposits by Verification Level',
          text: 'Your maximum deposit limits depend on your account verification status.'
        },
        {
          heading: 'Tier 1: Basic Verification (Email Only)',
          list: [
            'Per Transaction: $500',
            'Daily Limit: $1,000',
            'Monthly Limit: $5,000',
            'Status: Temporary limits for new accounts'
          ]
        },
        {
          heading: 'Tier 2: Standard Verification (ID + Address)',
          list: [
            'Per Transaction: $5,000',
            'Daily Limit: $10,000',
            'Monthly Limit: $50,000',
            'Status: Most users operate at this level'
          ]
        },
        {
          heading: 'Tier 3: Enhanced Verification (Source of Funds)',
          list: [
            'Per Transaction: $25,000',
            'Daily Limit: $50,000',
            'Monthly Limit: $250,000',
            'Status: Available upon request with documentation'
          ]
        },
        {
          heading: 'Tier 4: VIP (High-Volume Traders)',
          list: [
            'Per Transaction: $100,000+',
            'Daily Limit: Custom',
            'Monthly Limit: Custom',
            'Status: Contact vip@suppple.co.uk for custom arrangements'
          ]
        },
        {
          heading: 'Increasing Your Limits',
          list: [
            'Complete full identity verification (Tier 2)',
            'Provide proof of address less than 3 months old',
            'Submit source of funds documentation (Tier 3)',
            'Maintain account in good standing for 90+ days',
            'Contact support with limit increase request'
          ]
        },
        {
          heading: 'Why Limits Exist',
          list: [
            'Regulatory compliance (AML/KYC requirements)',
            'Fraud prevention and user protection',
            'Responsible gaming safeguards',
            'Payment processor restrictions',
            'Risk management for large deposits'
          ]
        },
        {
          heading: 'Withdrawal Limits',
          text: 'Withdrawal limits typically match deposit limits, but may be subject to additional security reviews for large amounts.'
        },
        {
          heading: 'Temporary Limit Reductions',
          text: 'Predict may temporarily reduce limits if:'
        },
        {
          heading: 'Reduction Triggers',
          list: [
            'Suspicious activity detected',
            'Failed verification attempts',
            'Payment disputes or chargebacks',
            'Violation of terms and conditions',
            'Regulatory changes in your jurisdiction'
          ]
        }
      ]
    },
    'failed-transactions-troubleshooting': {
      title: 'Failed transactions troubleshooting',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Common Reasons for Failed Deposits',
          text: 'Deposits can fail for various reasons. Here are the most common issues and solutions.'
        },
        {
          heading: '1. Insufficient Funds',
          list: [
            'Check your bank/card balance',
            'Ensure enough funds to cover transaction + any fees',
            'Try smaller deposit amount',
            'Contact your bank if balance seems incorrect'
          ]
        },
        {
          heading: '2. Card Declined',
          list: [
            'Card issuer blocked transaction (call your bank)',
            'Card expired (update card details)',
            'Incorrect CVV or billing address',
            'Card not enabled for online/international transactions',
            'Daily spending limit reached'
          ]
        },
        {
          heading: '3. 3D Secure Authentication Failed',
          list: [
            'Ensure you\'re entering correct OTP/verification code',
            'Check SMS/email for authentication code',
            'Contact card issuer to enable 3D Secure',
            'Try different browser (clear cache and cookies)',
            'Disable browser extensions that may interfere'
          ]
        },
        {
          heading: '4. Geographic Restrictions',
          list: [
            'Payment method not available in your country',
            'Using VPN (try disabling)',
            'Card issued in different country than account location',
            'Traveling abroad (card may be blocked)',
            'Contact support for alternative payment methods'
          ]
        },
        {
          heading: '5. Account Verification Required',
          list: [
            'Complete identity verification (KYC)',
            'Upload required documents',
            'Wait for verification approval (usually 1-24 hours)',
            'Check email for verification instructions'
          ]
        },
        {
          heading: '6. Deposit Limits Exceeded',
          list: [
            'Daily, weekly, or monthly limit reached',
            'Wait until limit resets',
            'Request limit increase (requires enhanced verification)',
            'Use alternative payment method with separate limits'
          ]
        },
        {
          heading: '7. Technical Issues',
          list: [
            'Clear browser cache and cookies',
            'Try different browser or device',
            'Disable ad blockers and VPNs',
            'Check internet connection stability',
            'Update browser to latest version',
            'Try incognito/private browsing mode'
          ]
        },
        {
          heading: 'Common Reasons for Failed Withdrawals',
          text: 'Withdrawals have additional security checks that may cause delays or failures.'
        },
        {
          heading: '1. Unverified Account',
          list: [
            'Complete full KYC verification',
            'Provide proof of address',
            'Verify withdrawal method ownership'
          ]
        },
        {
          heading: '2. Mismatched Withdrawal Details',
          list: [
            'Bank account not in your name',
            'Incorrect bank account number',
            'Wrong IBAN/SWIFT code',
            'Card expired or canceled',
            'Update withdrawal details and retry'
          ]
        },
        {
          heading: '3. Wagering Requirements Not Met',
          list: [
            'Bonus wagering conditions not fulfilled',
            'Minimum trading volume not reached',
            'Check "My Account" for outstanding requirements'
          ]
        },
        {
          heading: '4. Security Hold',
          list: [
            'Unusual account activity detected',
            'Large withdrawal triggers manual review',
            'Recent account changes (email, password, payment method)',
            'Contact support for status update'
          ]
        },
        {
          heading: '5. Payment Method Issues',
          list: [
            'Card no longer valid',
            'Bank account closed',
            'Bank rejected incoming transfer',
            'Payment processor maintenance',
            'Try alternative withdrawal method'
          ]
        },
        {
          heading: 'What to Do When Transaction Fails',
          list: [
            'Note exact error message',
            'Check transaction history for details',
            'Wait 10 minutes and retry',
            'Try alternative payment method',
            'Contact support with transaction reference number',
            'Provide screenshot of error if possible'
          ]
        },
        {
          heading: 'Refunds for Failed Transactions',
          text: 'If funds were debited but deposit failed, automatic refund issued within 5-7 business days. Check with your bank if not received.'
        },
        {
          heading: 'Getting Help',
          list: [
            'Email: support@suppple.co.uk',
            'Live Chat: Available 24/7',
            'Phone: +44 (0) 20 xxxx xxxx',
            'Include: Transaction ID, timestamp, error message, payment method'
          ]
        }
      ]
    },
    'bank-account-verification': {
      title: 'Bank account verification',
      category: 'Deposits & Withdrawals',
      content: [
        {
          heading: 'Why Verify Your Bank Account?',
          text: 'Bank account verification ensures withdrawals go to accounts you own, preventing fraud and complying with regulations.'
        },
        {
          heading: 'Verification Process',
          list: [
            'Navigate to Account Settings > Payment Methods',
            'Click "Add Bank Account"',
            'Enter bank account details (account number, routing/sort code)',
            'Upload bank statement or void check',
            'Wait for verification (1-3 business days)',
            'Confirm micro-deposit (if applicable)'
          ]
        },
        {
          heading: 'Required Information',
          list: [
            'Full legal name (must match Predict account)',
            'Bank account number',
            'Bank routing/sort code/IBAN',
            'Bank name and branch',
            'Account type (checking/savings)',
            'Bank statement (dated within 3 months)'
          ]
        },
        {
          heading: 'Bank Statement Requirements',
          list: [
            'Shows your name and address',
            'Shows full account number',
            'Issued within last 3 months',
            'Clearly legible (no blurry or cut-off text)',
            'Original document (not edited or altered)',
            'Accepted formats: PDF, JPG, PNG'
          ]
        },
        {
          heading: 'Micro-Deposit Verification',
          text: 'In some regions, we send small deposits (e.g., $0.01 and $0.02) to your bank account. You must confirm the exact amounts to verify ownership.'
        },
        {
          heading: 'Micro-Deposit Steps',
          list: [
            'We send 2 small deposits to your bank account',
            'Check your bank statement after 1-3 business days',
            'Log into Predict and enter the two amounts',
            'Once confirmed, account is verified',
            'Micro-deposits may be refunded or kept in your Predict wallet'
          ]
        },
        {
          heading: 'Instant Verification (Select Banks)',
          text: 'Some banks support instant verification via secure API connection. You log into your bank through a secure portal, and verification is immediate.'
        },
        {
          heading: 'Instant Verification Benefits',
          list: [
            'No waiting period',
            'No document upload',
            'More secure (direct bank connection)',
            'Supported by major banks in UK, EU, US'
          ]
        },
        {
          heading: 'Common Verification Issues',
          list: [
            'Name mismatch: Ensure bank account matches Predict account name exactly',
            'Old statement: Must be dated within 3 months',
            'Business account: Personal accounts required (unless approved)',
            'Joint account: May require additional verification',
            'Foreign bank: Some international banks require manual review'
          ]
        },
        {
          heading: 'Multiple Bank Accounts',
          text: 'You can add multiple bank accounts. Each must be verified separately. Only accounts in your name are accepted.'
        },
        {
          heading: 'Verification Timeline',
          list: [
            'Instant Verification: Immediate',
            'Micro-Deposit: 1-3 business days for deposits + confirmation',
            'Manual Review: 1-5 business days',
            'Enhanced Verification (large amounts): Up to 7 business days'
          ]
        },
        {
          heading: 'Security & Privacy',
          text: 'Your banking information is encrypted and stored securely. Predict never has access to your online banking credentials when using instant verification.'
        }
      ]
    },

    // ACCOUNT & VERIFICATION
    'identity-verification-process': {
      title: 'Identity verification process',
      category: 'Account & Verification',
      content: [
        {
          heading: 'Why Verification is Required',
          text: 'Identity verification (KYC - Know Your Customer) is a legal requirement for all regulated financial platforms. It helps prevent fraud, money laundering, underage trading, and ensures compliance with international regulations.'
        },
        {
          heading: 'Verification Levels',
          text: 'Predict by Suppple offers tiered verification levels with increasing limits and features.'
        },
        {
          heading: 'Level 1: Basic Verification',
          list: [
            'Requirements: Email verification + Phone verification',
            'Deposit Limit: $100 per transaction',
            'Withdrawal Limit: $100 per day',
            'Processing Time: Instant'
          ]
        },
        {
          heading: 'Level 2: Enhanced Verification',
          list: [
            'Requirements: Government-issued ID + Proof of Address',
            'Deposit Limit: $5,000 per transaction',
            'Withdrawal Limit: $5,000 per day',
            'Processing Time: 1-24 hours',
            'Additional Benefits: Access to all markets, priority support'
          ]
        },
        {
          heading: 'Level 3: Premium Verification',
          list: [
            'Requirements: Enhanced verification + Source of funds documentation',
            'Deposit Limit: $50,000 per transaction',
            'Withdrawal Limit: $50,000 per day',
            'Processing Time: 1-5 business days',
            'Additional Benefits: Dedicated account manager, institutional trading access'
          ]
        },
        {
          heading: 'Required Documents',
          text: 'Depending on your verification level, you\'ll need to provide:'
        },
        {
          heading: 'Government-Issued Photo ID',
          list: [
            'Passport (recommended - fastest processing)',
            'National ID Card',
            'Driver\'s License',
            'Document must be current (not expired)',
            'All four corners must be visible in photo',
            'Text and photo must be clear and readable'
          ]
        },
        {
          heading: 'Proof of Address (Dated within last 3 months)',
          list: [
            'Utility bill (electricity, water, gas)',
            'Bank statement',
            'Government-issued letter or tax document',
            'Rental or lease agreement',
            'Must clearly show your full name and residential address',
            'PO Box addresses not accepted'
          ]
        },
        {
          heading: 'Selfie / Liveness Check',
          text: 'Some users may be asked to submit a selfie holding their ID or complete a liveness check via our mobile app. This is an additional security measure to prevent identity fraud.'
        },
        {
          heading: 'How to Submit Documents',
          list: [
            'Log into your Predict account',
            'Navigate to "Account" > "Verification"',
            'Select verification level you wish to complete',
            'Upload clear photos or scans of required documents',
            'Submit for review',
            'Receive email confirmation when verification is complete'
          ]
        },
        {
          heading: 'Tips for Faster Verification',
          list: [
            'Use high-quality, well-lit photos',
            'Ensure all document edges are visible',
            'Avoid glare or shadows on documents',
            'Make sure text is readable',
            'Use recent documents (dated within last 90 days for proof of address)',
            'Submit during business hours for same-day review'
          ]
        },
        {
          heading: 'Verification Status',
          text: 'You can check your verification status at any time in your account dashboard. Common statuses include:'
        },
        {
          heading: 'Status Types',
          list: [
            'Pending: Under review by our team',
            'Approved: Verification complete',
            'Rejected: Issue with documents (email sent with details)',
            'Action Required: Additional information or documents needed'
          ]
        },
        {
          heading: 'Privacy & Security',
          text: 'All documents are encrypted, stored securely, and only accessible to authorized verification personnel. We comply with GDPR, POPIA, and other international data protection regulations.'
        }
      ]
    },
    'two-factor-authentication-setup': {
      title: 'Two-factor authentication setup',
      category: 'Account & Verification',
      content: [
        {
          heading: 'What is 2FA?',
          text: 'Two-factor authentication (2FA) adds an extra layer of security to your account by requiring both your password and a second verification code to log in.'
        },
        {
          heading: 'Why Enable 2FA?',
          list: [
            'Protects against unauthorized access even if your password is compromised',
            'Required for high-value withdrawals',
            'Prevents account takeover attempts',
            'Recommended by financial regulators'
          ]
        },
        {
          heading: '2FA Methods',
          text: 'Predict by Suppple supports multiple 2FA options:'
        },
        {
          heading: '1. Authenticator App (Recommended)',
          list: [
            'Supported Apps: Google Authenticator, Authy, Microsoft Authenticator',
            'Security Level: Highest',
            'Works offline',
            'Generate new code every 30 seconds'
          ]
        },
        {
          heading: 'How to Set Up Authenticator App',
          list: [
            'Download an authenticator app on your phone',
            'Log into Predict > Settings > Security',
            'Click "Enable 2FA" > "Authenticator App"',
            'Scan QR code with your authenticator app',
            'Enter 6-digit code from app to confirm',
            'Save backup codes in a secure location',
            '2FA is now active on your account'
          ]
        },
        {
          heading: '2. SMS Authentication',
          list: [
            'Receive codes via text message',
            'Security Level: Medium',
            'Requires mobile signal',
            'May have carrier delays'
          ]
        },
        {
          heading: 'How to Set Up SMS 2FA',
          list: [
            'Go to Settings > Security > Enable 2FA',
            'Select "SMS Authentication"',
            'Enter and verify your mobile number',
            'Receive test code via SMS',
            'Enter code to confirm',
            'SMS 2FA is now active'
          ]
        },
        {
          heading: 'Backup Codes',
          text: 'When you enable 2FA, you\'ll receive 10 single-use backup codes. Store these securely - they can be used to access your account if you lose your 2FA device.'
        },
        {
          heading: 'Where to Store Backup Codes',
          list: [
            'Password manager (recommended)',
            'Encrypted digital storage',
            'Physical secure location (safe)',
            'Do NOT store in plain text on your computer'
          ]
        },
        {
          heading: 'Lost 2FA Device?',
          text: 'If you lose access to your 2FA device, you can use a backup code to log in, then disable and re-enable 2FA with a new device. If you\'ve lost both your device and backup codes, contact support@suppple.co.uk with proof of identity.'
        }
      ]
    },
    'updating-your-profile-information': {
      title: 'Updating your profile information',
      category: 'Account & Verification',
      content: [
        {
          heading: 'Accessing Your Profile',
          list: [
            'Log into your Predict account',
            'Click your profile icon (top right)',
            'Select "Account Settings"',
            'Navigate to "Profile Information"'
          ]
        },
        {
          heading: 'Editable Profile Fields',
          text: 'You can update the following information:'
        },
        {
          heading: 'Contact Information',
          list: [
            'Email address (requires verification)',
            'Phone number (requires SMS confirmation)',
            'Preferred contact method',
            'Communication preferences'
          ]
        },
        {
          heading: 'Personal Details',
          list: [
            'Display name (visible to other users)',
            'Profile picture',
            'Bio (optional)',
            'Timezone',
            'Preferred language'
          ]
        },
        {
          heading: 'Financial Preferences',
          list: [
            'Preferred currency (limited changes allowed)',
            'Default payment method',
            'Withdrawal preferences',
            'Notification settings for deposits/withdrawals'
          ]
        },
        {
          heading: 'Information You Cannot Change',
          list: [
            'Full legal name (contact support if legal name change)',
            'Date of birth',
            'National ID number',
            'Country of residence (requires re-verification)'
          ]
        },
        {
          heading: 'Changing Your Email Address',
          list: [
            'Enter new email address in Profile Settings',
            'Click "Update Email"',
            'Verify current email via link sent',
            'Verify new email via confirmation link',
            'Email change confirmed within 24 hours'
          ]
        },
        {
          heading: 'Changing Your Phone Number',
          list: [
            'Enter new phone number',
            'Receive verification code via SMS',
            'Enter code to confirm',
            'Phone number updated immediately',
            'If 2FA enabled, you may need to reconfigure'
          ]
        },
        {
          heading: 'Important Notes',
          list: [
            'All changes are logged for security purposes',
            'Significant changes may trigger additional verification',
            'Cannot change verified identity information without support',
            'Some changes affect deposit/withdrawal limits temporarily'
          ]
        }
      ]
    },
    'password-reset-and-recovery': {
      title: 'Password reset and recovery',
      category: 'Account & Verification',
      content: [
        {
          heading: 'Forgot Password?',
          text: 'If you\'ve forgotten your password, you can reset it securely using your registered email address.'
        },
        {
          heading: 'Password Reset Steps',
          list: [
            'Go to predict.suppple.co.uk/login',
            'Click "Forgot Password?" link',
            'Enter your registered email address',
            'Click "Send Reset Link"',
            'Check your email for password reset instructions',
            'Click the reset link (valid for 1 hour)',
            'Enter new password (must meet security requirements)',
            'Confirm new password',
            'Log in with your new password'
          ]
        },
        {
          heading: 'Password Requirements',
          list: [
            'Minimum 8 characters (12+ recommended)',
            'At least one uppercase letter',
            'At least one lowercase letter',
            'At least one number',
            'At least one special character (!@#$%^&*)',
            'Cannot be a previously used password',
            'Cannot contain your email or name'
          ]
        },
        {
          heading: 'Didn\'t Receive Reset Email?',
          list: [
            'Check spam/junk folder',
            'Verify you entered the correct email address',
            'Wait 5 minutes (emails can be delayed)',
            'Try resending the reset link',
            'Contact support if still not received after 30 minutes'
          ]
        },
        {
          heading: 'Account Recovery (Locked Account)',
          text: 'If your account is locked due to multiple failed login attempts, you\'ll need to wait 30 minutes before trying again, or use the password reset process to unlock immediately.'
        },
        {
          heading: 'Reset Link Expired?',
          text: 'Password reset links expire after 1 hour for security. If your link expired, simply request a new reset link using the same process.'
        },
        {
          heading: 'If You Have Access to Your Account',
          text: 'To change your password while logged in:'
        },
        {
          heading: 'Change Password (While Logged In)',
          list: [
            'Navigate to Account Settings > Security',
            'Click "Change Password"',
            'Enter your current password',
            'Enter new password twice',
            'Click "Update Password"',
            'You\'ll be logged out and need to log in again'
          ]
        },
        {
          heading: 'Security Best Practices',
          list: [
            'Use a unique password not used on other sites',
            'Consider using a password manager',
            'Change password every 6-12 months',
            'Enable two-factor authentication',
            'Never share your password with anyone',
            'Don\'t use easily guessed passwords (birthdays, names)'
          ]
        }
      ]
    },
    'account-security-best-practices': {
      title: 'Account security best practices',
      category: 'Account & Verification',
      content: [
        {
          heading: 'Protecting Your Account',
          text: 'Your Predict account contains financial information and funds. Following security best practices is essential to keep your account safe.'
        },
        {
          heading: '1. Strong Password Management',
          list: [
            'Use a unique, complex password (12+ characters)',
            'Never reuse passwords from other sites',
            'Use a password manager (LastPass, 1Password, Bitwarden)',
            'Change password if you suspect compromise',
            'Never share your password with anyone'
          ]
        },
        {
          heading: '2. Enable Two-Factor Authentication',
          list: [
            'Adds critical extra layer of security',
            'Use authenticator app (not just SMS)',
            'Store backup codes securely',
            'Required for large withdrawals',
            'Makes account takeover extremely difficult'
          ]
        },
        {
          heading: '3. Recognize Phishing Attempts',
          text: 'Phishing is when scammers impersonate Predict to steal your credentials.'
        },
        {
          heading: 'Phishing Red Flags',
          list: [
            'Emails from non-suppple.co.uk domains',
            'Urgent requests to "verify your account"',
            'Links to websites that look like Predict but aren\'t',
            'Requests for your password or 2FA codes',
            'Offers that seem too good to be true',
            'Poor grammar or spelling errors'
          ]
        },
        {
          heading: 'Legitimate Predict Communications',
          list: [
            'Always from @suppple.co.uk email addresses',
            'Never ask for your password',
            'Never request 2FA codes',
            'Links go to predict.suppple.co.uk',
            'Professional formatting and branding'
          ]
        },
        {
          heading: '4. Secure Your Email Account',
          text: 'Your email is the key to your Predict account. If someone accesses your email, they can reset your password.'
        },
        {
          heading: 'Email Security',
          list: [
            'Use strong password on email account',
            'Enable 2FA on email account',
            'Don\'t access email on public/shared computers',
            'Regularly review authorized email devices',
            'Keep email recovery options up to date'
          ]
        },
        {
          heading: '5. Device Security',
          list: [
            'Keep operating system and apps updated',
            'Use antivirus/anti-malware software',
            'Don\'t jailbreak or root your devices',
            'Lock your devices with PIN/password/biometric',
            'Don\'t install apps from untrusted sources',
            'Log out after using shared/public computers'
          ]
        },
        {
          heading: '6. Network Security',
          list: [
            'Avoid public WiFi for financial transactions',
            'Use VPN on untrusted networks (but note: some VPNs blocked for compliance)',
            'Ensure HTTPS connection (lock icon in browser)',
            'Don\'t access account on compromised networks',
            'Be cautious on hotel/airport WiFi'
          ]
        },
        {
          heading: '7. Monitor Account Activity',
          list: [
            'Regularly review transaction history',
            'Check login history for unknown devices',
            'Set up email notifications for all transactions',
            'Enable alerts for large trades/withdrawals',
            'Report suspicious activity immediately'
          ]
        },
        {
          heading: '8. What Predict Will Never Do',
          list: [
            'Call you asking for your password',
            'Request remote access to your computer',
            'Ask you to send money to "verify" your account',
            'Request your 2FA backup codes',
            'Pressure you to make urgent trades or deposits'
          ]
        },
        {
          heading: 'If You Suspect Compromise',
          list: [
            'Immediately change your password',
            'Review recent account activity',
            'Contact support@suppple.co.uk immediately',
            'Freeze your account if unauthorized access',
            'File a report with local authorities if fraud occurred'
          ]
        }
      ]
    },
    'closing-your-account': {
      title: 'Closing your account',
      category: 'Account & Verification',
      content: [
        {
          heading: 'Account Closure Process',
          text: 'You can close your Predict account at any time. However, please consider the following before proceeding.'
        },
        {
          heading: 'Before You Close',
          list: [
            'Withdraw all funds from your account',
            'Close all open positions',
            'Cancel pending orders',
            'Download transaction history for records',
            'Download tax documents if needed',
            'Consider temporarily disabling account instead'
          ]
        },
        {
          heading: 'How to Close Your Account',
          list: [
            'Ensure zero balance and no open positions',
            'Navigate to Account Settings > Security',
            'Scroll to "Account Closure"',
            'Click "Request Account Closure"',
            'Provide reason for closure (optional)',
            'Confirm closure via email link',
            'Account closed within 7 business days'
          ]
        },
        {
          heading: 'What Happens When You Close',
          list: [
            'Immediate loss of access to account',
            'All open positions closed at market price',
            'Pending orders canceled',
            'Remaining funds paid to registered withdrawal method',
            'Account data retained for regulatory compliance (7 years)',
            'Marketing communications stopped',
            'Cannot reopen account with same email'
          ]
        },
        {
          heading: 'Temporary Alternatives',
          text: 'If you need a break but might return, consider these options instead:'
        },
        {
          heading: 'Account Suspension Options',
          list: [
            'Self-Exclusion: Block access for 7, 30, 90 days, or 1 year',
            'Deposit Limits: Restrict how much you can deposit',
            'Loss Limits: Cap daily/weekly/monthly losses',
            'Cooling-Off Period: Temporary 24-72 hour break',
            'Email/Notification Pause: Stop marketing emails temporarily'
          ]
        },
        {
          heading: 'Forced Account Closure',
          text: 'Predict may close your account if:'
        },
        {
          heading: 'Closure Reasons',
          list: [
            'Violation of Terms of Service',
            'Fraudulent activity detected',
            'Multiple accounts identified',
            'Failed identity verification',
            'Regulatory restrictions in your jurisdiction',
            'Prohibited activity (market manipulation, etc.)',
            'Extended period of inactivity (2+ years)'
          ]
        },
        {
          heading: 'After Closure',
          list: [
            'You\'ll receive confirmation email',
            'Tax documents still accessible for 2 years',
            'Withdrawal processed to registered method',
            'Cannot create new account with same identity',
            'Must contact support to discuss account status',
            'Regulatory hold period may apply (up to 7 years)'
          ]
        },
        {
          heading: 'Responsible Gaming Resources',
          text: 'If you\'re closing due to problem gambling, we encourage you to seek help. Visit begambleaware.org or contact national helplines for support.'
        }
      ]
    },

    // TRADING & MARKETS
    'how-to-buy-positions-in-a-market': {
      title: 'How to buy positions in a market',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Step-by-Step Trading Guide',
          text: 'Trading on Predict by Suppple is simple and intuitive. Follow these steps to place your first trade.'
        },
        {
          heading: 'Step 1: Browse Markets',
          list: [
            'Navigate to "Markets" from the main menu',
            'Filter by category (Sports, Politics, Economics, etc.)',
            'Use search to find specific events',
            'Review trending markets on the homepage'
          ]
        },
        {
          heading: 'Step 2: Select a Market',
          list: [
            'Click on any market to view details',
            'Read market description and resolution criteria',
            'Check current probabilities (Yes/No prices)',
            'Review trading volume and liquidity',
            'Check market close date and settlement timeline'
          ]
        },
        {
          heading: 'Step 3: Choose Your Position',
          text: 'Decide whether you believe the outcome will be "Yes" (event happens) or "No" (event doesn\'t happen).'
        },
        {
          heading: 'Understanding Prices',
          list: [
            'Yes at $0.65 = Market believes 65% probability',
            'No at $0.35 = Market believes 35% probability it won\'t happen',
            'Yes price + No price always = $1.00',
            'Lower price = higher potential profit (if correct)',
            'Higher price = lower risk, lower potential profit'
          ]
        },
        {
          heading: 'Step 4: Enter Trade Details',
          list: [
            'Select "Yes" or "No"',
            'Enter number of contracts to buy',
            'Review total cost (contracts × price)',
            'Check potential payout (contracts × $1.00 if correct)',
            'Review profit/loss scenarios'
          ]
        },
        {
          heading: 'Step 5: Place Order',
          text: 'You can place two types of orders:'
        },
        {
          heading: 'Market Order (Instant)',
          list: [
            'Executes immediately at current market price',
            'Guaranteed to fill (if sufficient liquidity)',
            'Best for quick entries',
            'May have slight price slippage on large orders'
          ]
        },
        {
          heading: 'Limit Order',
          list: [
            'Set your desired price',
            'Order fills only if market reaches your price',
            'May not fill if price doesn\'t reach your limit',
            'Better for precise entries and large positions',
            'No price slippage'
          ]
        },
        {
          heading: 'Step 6: Confirm Purchase',
          list: [
            'Review order summary',
            'Confirm you have sufficient funds',
            'Click "Buy"',
            'Receive confirmation',
            'Position appears in your portfolio'
          ]
        },
        {
          heading: 'After Purchase',
          text: 'Once you own a position, you have three options:'
        },
        {
          heading: 'Option 1: Hold Until Settlement',
          text: 'Keep your contracts until the event concludes. If your prediction is correct, contracts pay $1.00 each.'
        },
        {
          heading: 'Option 2: Sell Early',
          text: 'If the price moves in your favor before settlement, you can sell for a profit before the event concludes.'
        },
        {
          heading: 'Option 3: Cut Losses',
          text: 'If the market moves against you, you can sell to limit losses before the market settles.'
        },
        {
          heading: 'Example Trade',
          text: 'Market: "Will Manchester United win the Premier League?"\nCurrent Price: Yes $0.30, No $0.70\n\nYou believe they will win, so you:\n- Buy 100 Yes contracts at $0.30\n- Total cost: $30\n- If Man United wins: Receive 100 × $1.00 = $100 (profit: $70)\n- If Man United doesn\'t win: Contracts expire worthless (loss: $30)\n- Alternative: Sell before season ends if price rises to $0.50 for a $20 profit'
        }
      ]
    },
    'selling-positions-before-settlement': {
      title: 'Selling positions before settlement',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Why Sell Early?',
          text: 'One of the key advantages of prediction markets is the ability to exit your position before the event concludes. This allows you to lock in profits, cut losses, or free up capital for other opportunities.'
        },
        {
          heading: 'When to Sell',
          list: [
            'Price moves in your favor - Lock in profits',
            'New information changes the outlook - Cut losses early',
            'Need funds for another opportunity - Portfolio rebalancing',
            'Reduce risk exposure - Take partial profits',
            'Event timeline is longer than expected - Free up capital'
          ]
        },
        {
          heading: 'How to Sell',
          list: [
            'Navigate to "Portfolio" or "My Positions"',
            'Find the position you want to sell',
            'Click "Sell" on the position',
            'Enter number of contracts to sell (partial or full position)',
            'Choose order type (Market or Limit)',
            'Review current market price',
            'Confirm sale',
            'Funds credited to your account instantly'
          ]
        },
        {
          heading: 'Profit/Loss Calculation',
          text: 'Your profit or loss is calculated as: (Sell Price - Buy Price) × Number of Contracts'
        },
        {
          heading: 'Example 1: Taking Profit',
          text: 'You bought 100 Yes contracts at $0.40 (cost: $40)\nPrice rises to $0.65\nYou sell 100 contracts at $0.65 (receive: $65)\nProfit: $65 - $40 = $25 (62.5% return)'
        },
        {
          heading: 'Example 2: Cutting Losses',
          text: 'You bought 100 Yes contracts at $0.60 (cost: $60)\nPrice falls to $0.35\nYou sell 100 contracts at $0.35 (receive: $35)\nLoss: $35 - $60 = -$25 (41.7% loss)\n\nBy selling early, you recover $35 instead of potentially losing the full $60 if the outcome is "No".'
        },
        {
          heading: 'Partial Sales',
          text: 'You don\'t have to sell your entire position. You can sell a portion to lock in profits while keeping exposure:'
        },
        {
          heading: 'Example: Partial Sale Strategy',
          text: 'You bought 200 Yes contracts at $0.30 (cost: $60)\nPrice rises to $0.60\nYou sell 100 contracts at $0.60 (receive: $60)\nResult: You\'ve recovered your initial investment ($60) and still hold 100 contracts with $0 risk.\n\nIf Yes wins: Additional $100 gain (100 × $1.00)\nIf No wins: $0 loss (already recovered initial investment)'
        },
        {
          heading: 'Liquidity Considerations',
          text: 'The ease of selling depends on market liquidity (trading volume). High-volume markets have better liquidity, meaning you can sell quickly at fair prices. Low-volume markets may require patience or wider price spreads.'
        },
        {
          heading: 'Sell Order Types',
          text: 'You can use the same order types when selling as when buying:'
        },
        {
          heading: 'Market Sell Order',
          list: [
            'Sells immediately at current best price',
            'Guaranteed execution (if liquidity exists)',
            'May experience slight slippage on large orders'
          ]
        },
        {
          heading: 'Limit Sell Order',
          list: [
            'Set minimum price you\'re willing to accept',
            'Only sells if market reaches your price',
            'No guarantee of execution',
            'Useful in volatile markets or when you have a target profit'
          ]
        },
        {
          heading: 'Tax Implications',
          text: 'Depending on your jurisdiction, profits from prediction market trading may be subject to capital gains tax. Consult a tax professional for guidance specific to your situation. Predict provides transaction history exports for tax reporting.'
        }
      ]
    },
    'market-settlement-and-payouts': {
      title: 'Market settlement and payouts',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Settlement Process',
          text: 'Market settlement is the process of determining the official outcome of an event and paying out winning positions.'
        },
        {
          heading: 'Settlement Timeline',
          list: [
            'Event concludes (match ends, election results certified, etc.)',
            'Predict team reviews official sources',
            'Outcome is declared (typically within 24-48 hours)',
            'Winning contracts credited at $1.00 each',
            'Losing contracts expire at $0.00',
            'Funds immediately available for withdrawal or trading'
          ]
        },
        {
          heading: 'Settlement Sources',
          text: 'We use official, authoritative sources for each category:'
        },
        {
          heading: 'Sports Markets',
          list: [
            'Official league/tournament results',
            'Governing body announcements',
            'Post-match official statistics',
            'Verified sports data providers (Opta, Stats Perform)'
          ]
        },
        {
          heading: 'Political Markets',
          list: [
            'Official election commission results',
            'Government gazettes',
            'Parliamentary records',
            'Certified vote counts'
          ]
        },
        {
          heading: 'Economic Markets',
          list: [
            'Central bank announcements',
            'Official government statistics',
            'Exchange closing prices (for stock markets)',
            'Regulatory body publications'
          ]
        },
        {
          heading: 'Payout Methods',
          text: 'After settlement, your winnings are paid out automatically:'
        },
        {
          heading: 'Automatic Payout',
          list: [
            'Winning contracts credited at $1.00 per contract',
            'Funds appear in your account wallet instantly',
            'No action required from you',
            'Email confirmation sent',
            'Immediately available for withdrawal or reinvestment'
          ]
        },
        {
          heading: 'Payout Example',
          text: 'Market: "Will Team A win the championship?"\nOutcome: Team A wins (Yes)\n\nYour Position: 150 Yes contracts purchased at $0.45\nCost: 150 × $0.45 = $67.50\nPayout: 150 × $1.00 = $150.00\nProfit: $150.00 - $67.50 = $82.50\n\nThe $150 is credited to your account within minutes of settlement.'
        },
        {
          heading: 'Withdrawal After Payout',
          text: 'Once credited, you can:'
        },
        {
          heading: 'Options',
          list: [
            'Withdraw to bank account (2-5 business days)',
            'Withdraw to card (3-7 business days)',
            'Use funds to trade in other markets',
            'Leave funds in account for future trading'
          ]
        },
        {
          heading: 'Tax Reporting',
          text: 'Predict by Suppple provides annual tax statements showing your total winnings and losses for tax reporting purposes. Download from Account > Tax Documents.'
        },
        {
          heading: 'Disputed Markets',
          text: 'In rare cases, market outcomes may be disputed. See "Market Resolution Disputes" article for details on the dispute process.'
        },
        {
          heading: 'Voided Markets',
          text: 'If a market cannot be fairly settled (event canceled, insufficient data, etc.), the market may be voided:'
        },
        {
          heading: 'Void Settlement',
          list: [
            'All positions refunded at purchase price',
            'No winners or losers',
            'Funds returned to all participants within 24 hours',
            'Email notification sent to all traders in the market'
          ]
        }
      ]
    },
    'understanding-bid-and-ask-prices': {
      title: 'Understanding bid and ask prices',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Bid and Ask Explained',
          text: 'In prediction markets, the bid and ask prices represent the prices at which you can instantly sell or buy contracts.'
        },
        {
          heading: 'Ask Price (Buy Price)',
          text: 'The ask price is the lowest price at which someone is willing to sell contracts. This is the price you pay when you buy a contract immediately using a market order.'
        },
        {
          heading: 'Bid Price (Sell Price)',
          text: 'The bid price is the highest price at which someone is willing to buy contracts. This is the price you receive when you sell a contract immediately using a market order.'
        },
        {
          heading: 'The Spread',
          text: 'The difference between bid and ask prices is called the "spread." Example:\\n\\nBid: $0.58\\nAsk: $0.62\\nSpread: $0.04\\n\\nNarrower spreads indicate more liquid markets.'
        },
        {
          heading: 'Market Example',
          text: 'Market: "Will Team A win?"\\n\\nYes Contracts:\\n- Bid: $0.65 (you can sell at this price)\\n- Ask: $0.68 (you can buy at this price)\\n\\nNo Contracts:\\n- Bid: $0.32 (you can sell at this price)\\n- Ask: $0.35 (you can buy at this price)'
        },
        {
          heading: 'Why the Spread Exists',
          list: [
            'Compensates market makers for providing liquidity',
            'Covers risk of holding positions',
            'Wider in less liquid markets',
            'Narrower in high-volume markets',
            'Represents transaction cost'
          ]
        },
        {
          heading: 'Reading the Order Book',
          text: 'The order book shows all pending buy and sell orders at different prices.'
        },
        {
          heading: 'Order Book Example',
          text: 'Yes Contracts Order Book:\\n\\nSELL ORDERS (Ask):\\n10 @ $0.70\\n25 @ $0.69\\n50 @ $0.68 ← Lowest Ask\\n\\nBUY ORDERS (Bid):\\n50 @ $0.65 ← Highest Bid\\n100 @ $0.64\\n75 @ $0.63'
        },
        {
          heading: 'Trading with Bid/Ask',
          list: [
            'Market Order (Buy): Executes at current ask price',
            'Market Order (Sell): Executes at current bid price',
            'Limit Order (Buy): Sets your maximum buy price',
            'Limit Order (Sell): Sets your minimum sell price'
          ]
        },
        {
          heading: 'Impact of Spread on Returns',
          text: 'The spread affects your profitability. If you buy at ask ($0.68) and immediately sell at bid ($0.65), you lose $0.03 per contract. This is why holding positions until settlement or waiting for favorable price movement is often better.'
        },
        {
          heading: 'Minimizing Spread Costs',
          list: [
            'Use limit orders instead of market orders',
            'Trade in high-volume markets (tighter spreads)',
            'Avoid trading immediately after major news (spreads widen)',
            'Be patient - let the market come to your price',
            'Consider the spread in your profit calculations'
          ]
        }
      ]
    },
    'limit-orders-vs-market-orders': {
      title: 'Limit orders vs market orders',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Order Types Explained',
          text: 'Understanding when to use market orders vs limit orders is crucial for effective trading.'
        },
        {
          heading: 'Market Orders',
          text: 'A market order executes immediately at the current best available price.'
        },
        {
          heading: 'Market Order Characteristics',
          list: [
            'Executes instantly (within seconds)',
            'Guaranteed execution',
            'Price not guaranteed (you get current market price)',
            'Buys at current ask price',
            'Sells at current bid price',
            'Best for liquid markets',
            'Ideal when speed matters more than exact price'
          ]
        },
        {
          heading: 'When to Use Market Orders',
          list: [
            'Need to enter/exit position immediately',
            'Reacting to breaking news',
            'Market is highly liquid (tight spread)',
            'Price difference is minimal',
            'Small position size (won\'t move market)'
          ]
        },
        {
          heading: 'Limit Orders',
          text: 'A limit order only executes at your specified price or better.'
        },
        {
          heading: 'Limit Order Characteristics',
          list: [
            'Execution not guaranteed',
            'Price is guaranteed (if filled)',
            'May execute partially',
            'Remains active until filled or canceled',
            'Can be set above/below current price',
            'Better control over entry/exit prices'
          ]
        },
        {
          heading: 'When to Use Limit Orders',
          list: [
            'Not urgent to execute',
            'Want specific entry/exit price',
            'Trading in low-liquidity markets',
            'Large position size',
            'Avoiding slippage',
            'Setting up positions while away from platform'
          ]
        },
        {
          heading: 'Limit Order Example',
          text: 'Market: "Will it rain tomorrow?"\\nCurrent Ask: $0.55\\n\\nYou think $0.55 is too high. You place a limit buy order at $0.50.\\n\\nOutcome 1: Price drops to $0.50 → Your order fills\\nOutcome 2: Price stays at $0.55 → Your order remains unfilled'
        },
        {
          heading: 'Stop-Loss Orders',
          text: 'A stop-loss is a special order type that automatically sells your position if price reaches a certain level, limiting your losses.'
        },
        {
          heading: 'Stop-Loss Example',
          text: 'You bought Yes at $0.60.\\nYou set stop-loss at $0.50.\\n\\nIf price drops to $0.50, your position automatically sells, capping your loss at $0.10 per contract.'
        },
        {
          heading: 'Order Strategy Comparison',
          text: 'Scenario: Market currently at $0.60\\n\\nMarket Order: ✓ Executes immediately at $0.60\\nLimit Order at $0.55: Only fills if price drops to $0.55\\nLimit Order at $0.65: Only fills if price rises to $0.65 (unlikely if buying)\\nStop-Loss at $0.50: Triggers sell if price drops to $0.50'
        },
        {
          heading: 'Advanced Order Strategies',
          list: [
            'Good-Till-Canceled (GTC): Limit order stays active until filled',
            'Immediate-or-Cancel (IOC): Fill immediately or cancel',
            'Fill-or-Kill (FOK): Fill entire order immediately or cancel',
            'Day Order: Expires at end of trading day'
          ]
        }
      ]
    },
    'portfolio-management-tips': {
      title: 'Portfolio management tips',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Building a Balanced Portfolio',
          text: 'Effective portfolio management helps maximize returns while controlling risk.'
        },
        {
          heading: '1. Diversification',
          text: 'Don\'t put all your capital into one market or event type.'
        },
        {
          heading: 'Diversification Strategies',
          list: [
            'Spread across multiple event categories (sports, politics, economics)',
            'Mix short-term and long-term markets',
            'Balance high-probability and long-shot predictions',
            'Avoid over-concentration in single events',
            'Diversify across different settlement dates'
          ]
        },
        {
          heading: '2. Position Sizing',
          text: 'How much to invest in each market is critical to risk management.'
        },
        {
          heading: 'Position Sizing Rules',
          list: [
            'Risk only 1-5% of bankroll per market',
            'Larger positions for high-confidence trades',
            'Smaller positions for speculative trades',
            'Never risk money you can\'t afford to lose',
            'Scale position size with account growth'
          ]
        },
        {
          heading: '3. Kelly Criterion',
          text: 'A mathematical formula for optimal bet sizing: (Edge × Odds) / Odds. Example: If you estimate 60% probability and market shows 50%, your edge is 10%. Calculate optimal stake accordingly.'
        },
        {
          heading: '4. Track Your Performance',
          list: [
            'Record every trade with rationale',
            'Calculate win rate by category',
            'Identify profitable market types',
            'Learn from losing trades',
            'Review quarterly performance',
            'Adjust strategy based on data'
          ]
        },
        {
          heading: '5. Bankroll Management',
          text: 'Your bankroll is your total capital available for prediction trading.'
        },
        {
          heading: 'Bankroll Rules',
          list: [
            'Set aside dedicated prediction market funds',
            'Don\'t mix with essential living expenses',
            'Withdraw profits periodically',
            'Replenish conservatively during losing streaks',
            'Move up stakes slowly as bankroll grows'
          ]
        },
        {
          heading: '6. Rebalancing Strategy',
          list: [
            'Review portfolio weekly',
            'Close underperforming positions early',
            'Let winners run if fundamentals unchanged',
            'Take partial profits on large gains',
            'Reinvest profits across multiple markets'
          ]
        },
        {
          heading: '7. Avoid Common Pitfalls',
          list: [
            'Chasing losses with larger bets',
            'Over-trading (too many positions)',
            'Emotional decision-making',
            'Ignoring research in favor of gut feeling',
            'Betting on favorites just because they\'re favorites',
            'Not adapting strategy when market conditions change'
          ]
        },
        {
          heading: '8. Use Portfolio Metrics',
          list: [
            'Total Return: Overall profit/loss',
            'ROI: Return on investment percentage',
            'Sharpe Ratio: Risk-adjusted returns',
            'Maximum Drawdown: Largest peak-to-trough decline',
            'Win Rate: Percentage of profitable trades',
            'Average Win vs Average Loss'
          ]
        }
      ]
    },
    'risk-management-strategies': {
      title: 'Risk management strategies',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'Why Risk Management Matters',
          text: 'Even the best predictions can be wrong. Proper risk management ensures you survive losing streaks and maximize long-term profits.'
        },
        {
          heading: '1. Set Maximum Loss Limits',
          list: [
            'Daily loss limit: Stop trading if you lose X% in one day',
            'Weekly loss limit: Max acceptable loss per week',
            'Per-position limit: Never risk more than 5% on one trade',
            'Total exposure: Limit total active positions to 50% of bankroll'
          ]
        },
        {
          heading: '2. Use Stop-Loss Orders',
          text: 'Automatically exit positions that move against you beyond acceptable levels.'
        },
        {
          heading: 'Stop-Loss Example',
          text: 'Position: 100 Yes contracts bought at $0.70\\nStop-loss: $0.55\\n\\nIf price drops to $0.55, position automatically sells\\nLoss capped at: 100 × ($0.70 - $0.55) = $15'
        },
        {
          heading: '3. Hedging Strategies',
          text: 'Reduce risk by taking offsetting positions.'
        },
        {
          heading: 'Hedging Example',
          text: 'Market 1: "Team A wins championship" - You bought Yes at $0.50\\nMarket 2: "Team A wins semifinal" - Buy No at $0.40 as hedge\\n\\nIf Team A loses semifinal, Market 1 is void/uncertain but Market 2 profits'
        },
        {
          heading: '4. Avoid Over-Leverage',
          list: [
            'Don\'t use entire bankroll on active positions',
            'Keep 30-50% cash reserve for opportunities',
            'Never borrow money for prediction trading',
            'Scale down during losing streaks',
            'Gradually increase exposure during winning streaks'
          ]
        },
        {
          heading: '5. Correlation Awareness',
          text: 'Some markets are correlated - if one moves, others move similarly, increasing risk.'
        },
        {
          heading: 'Correlated Markets Example',
          list: [
            'Multiple markets on same sports event',
            'Political markets on related issues',
            'Economic markets affected by same data release',
            'Markets on sequential events (playoffs, elections)'
          ]
        },
        {
          heading: '6. Probability-Based Sizing',
          text: 'Adjust position size based on confidence level.'
        },
        {
          heading: 'Confidence-Based Position Sizing',
          list: [
            'High confidence (70%+ certain): 3-5% of bankroll',
            'Medium confidence (55-70%): 2-3% of bankroll',
            'Low confidence (50-55%): 1-2% of bankroll',
            'Speculative (<50% but value): 0.5-1% of bankroll'
          ]
        },
        {
          heading: '7. Time Diversification',
          list: [
            'Mix markets settling this week, month, and quarter',
            'Avoid too many markets settling same day',
            'Balance quick-settling and long-term markets',
            'Allows capital recycling from settled markets'
          ]
        },
        {
          heading: '8. Emotional Risk Management',
          list: [
            'Never trade while tilted or emotional',
            'Take breaks after big wins or losses',
            'Stick to predetermined strategy',
            'Don\'t increase bet size to chase losses',
            'Recognize when you need to step away'
          ]
        },
        {
          heading: '9. Black Swan Protection',
          text: 'Prepare for rare, high-impact events that can devastate portfolios.'
        },
        {
          heading: 'Black Swan Strategies',
          list: [
            'Never risk entire bankroll',
            'Avoid markets with undefined outcomes',
            'Keep emergency cash reserve',
            'Diversify across uncorrelated event types',
            'Question consensus when too many believe same outcome'
          ]
        }
      ]
    },
    'reading-market-depth-and-order-book': {
      title: 'Reading market depth and order book',
      category: 'Trading & Markets',
      content: [
        {
          heading: 'What is Market Depth?',
          text: 'Market depth shows the volume of buy and sell orders at different price levels, revealing market liquidity and potential price movements.'
        },
        {
          heading: 'Order Book Structure',
          text: 'The order book displays all pending limit orders.'
        },
        {
          heading: 'Sample Order Book',
          text: 'Market: "Will Team A win?"\\n\\nSELL ORDERS (Ask - people wanting to sell Yes):\\n50 contracts @ $0.72\\n100 contracts @ $0.71\\n200 contracts @ $0.70 ← Best Ask\\n\\nLAST TRADE: $0.69\\n\\nBUY ORDERS (Bid - people wanting to buy Yes):\\n250 contracts @ $0.68 ← Best Bid\\n150 contracts @ $0.67\\n100 contracts @ $0.66'
        },
        {
          heading: 'Reading the Spread',
          text: 'Spread = Best Ask - Best Bid = $0.70 - $0.68 = $0.02\\n\\nA tight spread ($0.01-0.03) indicates liquid market. Wide spread (>$0.05) suggests low liquidity.'
        },
        {
          heading: 'Analyzing Buy/Sell Imbalance',
          list: [
            'More buy volume than sell = bullish (price likely to rise)',
            'More sell volume than buy = bearish (price likely to fall)',
            'Balanced = market is fairly priced',
            'Large orders at specific price = support/resistance levels'
          ]
        },
        {
          heading: 'Support and Resistance',
          text: 'Large buy orders act as support (floor). Large sell orders act as resistance (ceiling).'
        },
        {
          heading: 'Support Example',
          text: 'If there are 5,000 buy orders at $0.60, it\'s unlikely price will drop below $0.60 quickly. This is a "support level."'
        },
        {
          heading: 'Resistance Example',
          text: 'If there are 10,000 sell orders at $0.75, price may struggle to rise above $0.75. This is a "resistance level."'
        },
        {
          heading: 'Order Book Strategies',
          list: [
            'Large Market Orders: Check depth to estimate slippage',
            'Limit Order Placement: Place just ahead of large orders',
            'Identify Walls: Large orders that may prevent price movement',
            'Spot Momentum: Rapidly filling orders indicate strong movement',
            'Avoid Low Liquidity: Thin order books = high slippage risk'
          ]
        },
        {
          heading: 'Market Manipulation Signs',
          list: [
            'Spoofing: Large fake orders that disappear',
            'Layering: Multiple orders at various levels to deceive',
            'Wash Trading: Trading with yourself to fake volume',
            'Report suspicious activity to compliance@suppple.co.uk'
          ]
        },
        {
          heading: 'Using Depth for Entry/Exit',
          text: 'Before entering a large position, check if there\'s enough depth to exit. A market with thin depth means you may struggle to sell without moving price significantly.'
        },
        {
          heading: 'Time & Sales (Trade History)',
          text: 'Shows recent executed trades with price, size, and time. Helps confirm direction and momentum.'
        },
        {
          heading: 'Volume Indicators',
          list: [
            'High volume at price level = strong support/resistance',
            'Increasing volume + rising price = bullish',
            'Increasing volume + falling price = bearish',
            'Low volume = unreliable price movements'
          ]
        }
      ]
    },

    // RULES & REGULATIONS
    'terms-of-service': {
      title: 'Terms of Service',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Acceptance of Terms',
          text: 'By creating an account and using Predict by Suppple, you agree to be bound by these Terms of Service, our Privacy Policy, and all applicable laws and regulations.'
        },
        {
          heading: 'Eligibility',
          list: [
            'You must be at least 18 years old',
            'You must be legally permitted to participate in prediction markets in your jurisdiction',
            'You must provide accurate personal information',
            'You must pass identity verification',
            'One account per person'
          ]
        },
        {
          heading: 'Account Responsibilities',
          list: [
            'Keep your password secure',
            'Do not share account access with others',
            'Notify us immediately of unauthorized access',
            'Keep contact information up to date',
            'Comply with all platform rules'
          ]
        },
        {
          heading: 'Prohibited Activities',
          list: [
            'Market manipulation or collusion',
            'Using multiple accounts',
            'Automated trading bots (without approval)',
            'Insider trading or using non-public information',
            'Money laundering or fraud',
            'Abusing bonuses or promotions',
            'Harassing other users or staff'
          ]
        },
        {
          heading: 'Intellectual Property',
          text: 'All content, trademarks, and data on Predict by Suppple are owned by Suppple Group or its licensors. You may not reproduce, distribute, or create derivative works without permission.'
        },
        {
          heading: 'Limitation of Liability',
          text: 'Predict by Suppple is provided "as is". We are not liable for losses due to market outcomes, technical issues, or events beyond our control. Your liability is limited to the funds in your account.'
        },
        {
          heading: 'Dispute Resolution',
          text: 'Disputes are subject to binding arbitration in accordance with the rules of the jurisdiction where Predict operates. See full terms at predict.suppple.co.uk/terms'
        },
        {
          heading: 'Changes to Terms',
          text: 'We may update these Terms from time to time. Continued use after changes constitutes acceptance. We will notify you of material changes via email.'
        }
      ]
    },
    'market-resolution-rules': {
      title: 'Market resolution rules',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Resolution Principles',
          text: 'All markets settle based on objective, verifiable outcomes from official sources. Resolution rules are defined before trading begins.'
        },
        {
          heading: 'General Rules',
          list: [
            'Markets settle based on official results only',
            'Unofficial reports or rumors do not count',
            'Results must be certified by the relevant authority',
            'Subsequent changes (appeals, overturns) do not affect settlement once declared',
            'Markets resolve "Yes" or "No" - no draws unless specified'
          ]
        },
        {
          heading: 'Sports Market Rules',
          list: [
            'Results based on official final score at end of regulation time (unless stated otherwise)',
            'Extra time and penalty shootouts only count if specified in market description',
            'Matches must be played by the stated deadline or market may be voided',
            'Postponed matches: Market extended if match rescheduled within 48 hours',
            'Abandoned matches: Market voided unless outcome is already determined',
            'Player/team changes: Market remains valid unless specifically stated otherwise'
          ]
        },
        {
          heading: 'Political Market Rules',
          list: [
            'Results based on official election commission certification',
            'Exit polls and projections do not count',
            'Recounts and legal challenges do not affect settlement after official certification',
            'Resignation or removal from office settles based on actual date',
            'Appointments settle when officially confirmed by relevant authority'
          ]
        },
        {
          heading: 'Economic Market Rules',
          list: [
            'Stock prices based on official exchange closing price',
            'Economic data based on initial official release (revisions do not count)',
            'Currency rates based on specified exchange at market close time',
            'Company announcements must be publicly filed with regulators'
          ]
        },
        {
          heading: 'Ambiguous Outcomes',
          text: 'In rare cases where the outcome is ambiguous or disputed:'
        },
        {
          heading: 'Resolution Process',
          list: [
            'Predict team reviews market description and all available evidence',
            'Official sources consulted',
            'Independent experts may be engaged',
            'Community input considered but not binding',
            'Final decision made by Predict Resolution Committee',
            'Explanation published with settlement'
          ]
        },
        {
          heading: 'Market Void Policy',
          text: 'Markets may be voided (all funds refunded) if:'
        },
        {
          heading: 'Void Conditions',
          list: [
            'Event is canceled or postponed indefinitely',
            'Outcome cannot be determined from available information',
            'Market description was ambiguous or incorrect',
            'External circumstances make fair resolution impossible',
            'Technical error affected market integrity'
          ]
        }
      ]
    },
    'prohibited-activities': {
      title: 'Prohibited activities',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Zero Tolerance Policy',
          text: 'Predict by Suppple maintains strict policies against activities that undermine market integrity, user safety, or regulatory compliance.'
        },
        {
          heading: '1. Market Manipulation',
          list: [
            'Coordinating with others to artificially move prices',
            'Wash trading (buying and selling to yourself)',
            'Spoofing (placing orders you intend to cancel)',
            'Front-running other traders',
            'Spreading false information to influence markets'
          ]
        },
        {
          heading: '2. Multiple Accounts',
          list: [
            'Creating more than one account per person',
            'Using family members\' accounts to circumvent limits',
            'Opening accounts to abuse promotions or bonuses'
          ]
        },
        {
          heading: '3. Insider Trading',
          list: [
            'Trading on non-public, material information',
            'Using information gained through professional role',
            'Sharing insider information with others',
            'Markets where you have a conflict of interest'
          ]
        },
        {
          heading: '4. Fraud & Deception',
          list: [
            'Providing false identity documents',
            'Using stolen payment methods',
            'Claiming unauthorized chargebacks',
            'Impersonating other users or staff'
          ]
        },
        {
          heading: '5. Money Laundering',
          list: [
            'Depositing funds from illegal sources',
            'Using the platform to move funds between parties',
            'Structuring deposits to avoid reporting thresholds',
            'Rapid deposit and withdrawal without trading'
          ]
        },
        {
          heading: '6. Underage Gambling',
          list: [
            'Using the platform if under 18 years old',
            'Providing false age information',
            'Allowing minors to access your account'
          ]
        },
        {
          heading: '7. Automated Trading Abuse',
          list: [
            'Using bots without written approval',
            'Exploiting technical glitches or errors',
            'Overwhelming systems with excessive requests',
            'Scraping data without authorization'
          ]
        },
        {
          heading: '8. Bonus Abuse',
          list: [
            'Creating multiple accounts for bonuses',
            'Colluding with others on bonus-eligible markets',
            'Violating bonus terms and conditions'
          ]
        },
        {
          heading: 'Consequences',
          text: 'Violations may result in:'
        },
        {
          heading: 'Penalties',
          list: [
            'Account suspension or permanent ban',
            'Forfeiture of winnings or bonuses',
            'Cancellation of pending withdrawals',
            'Reporting to regulatory authorities',
            'Legal action for serious violations',
            'Blacklisting from all Suppple Group platforms'
          ]
        },
        {
          heading: 'Reporting Violations',
          text: 'If you suspect prohibited activity, report it to compliance@suppple.co.uk. All reports are confidential and investigated thoroughly.'
        }
      ]
    },
    'regulatory-compliance-overview': {
      title: 'Regulatory compliance overview',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Regulatory Framework',
          text: 'Predict by Suppple operates through licensed partners in regulated jurisdictions, ensuring compliance with gaming, financial, and data protection regulations.'
        },
        {
          heading: 'Partner Licensing Model',
          text: 'Suppple Group operates through 2 licensed partners in regulated markets. Each partner holds appropriate licenses for their jurisdiction.'
        },
        {
          heading: 'Key Regulatory Bodies',
          list: [
            'UK Gambling Commission (UKGC)',
            'Malta Gaming Authority (MGA)',
            'Curaçao eGaming',
            'South African Gaming Boards (Provincial)',
            'Financial Conduct Authority (FCA) - Payment Processing'
          ]
        },
        {
          heading: 'Anti-Money Laundering (AML)',
          text: 'We comply with international AML standards to prevent money laundering and terrorist financing.'
        },
        {
          heading: 'AML Measures',
          list: [
            'Know Your Customer (KYC) verification for all users',
            'Transaction monitoring and suspicious activity reporting',
            'Source of funds verification for large deposits',
            'Enhanced due diligence for high-risk customers',
            'Regular compliance audits and staff training'
          ]
        },
        {
          heading: 'Know Your Customer (KYC)',
          text: 'All users must verify their identity before depositing or trading.'
        },
        {
          heading: 'KYC Requirements',
          list: [
            'Government-issued photo ID',
            'Proof of address (dated within 3 months)',
            'Selfie verification (in some cases)',
            'Source of funds documentation (for large transactions)',
            'Periodic re-verification (every 2 years)'
          ]
        },
        {
          heading: 'Data Protection Compliance',
          list: [
            'GDPR (General Data Protection Regulation) - EU/UK',
            'POPIA (Protection of Personal Information Act) - South Africa',
            'CCPA (California Consumer Privacy Act) - USA',
            'Data encryption in transit and at rest',
            'Right to access, correct, and delete personal data'
          ]
        },
        {
          heading: 'Responsible Gaming',
          text: 'We promote responsible prediction market participation.'
        },
        {
          heading: 'Responsible Gaming Tools',
          list: [
            'Deposit limits (daily, weekly, monthly)',
            'Loss limits',
            'Time limits and session reminders',
            'Self-exclusion (7 days to permanent)',
            'Reality checks (pop-up reminders)',
            'Links to problem gambling support organizations'
          ]
        },
        {
          heading: 'Age Verification',
          list: [
            'Minimum age: 18 years old (21+ in some jurisdictions)',
            'Age verified during KYC process',
            'Underage accounts immediately suspended',
            'Proactive age verification checks'
          ]
        },
        {
          heading: 'Financial Regulations',
          list: [
            'Segregated client funds (separate from company funds)',
            'Regular financial audits',
            'Payment processor compliance (PCI-DSS)',
            'Transaction reporting to authorities',
            'Tax reporting in applicable jurisdictions'
          ]
        },
        {
          heading: 'Market Integrity',
          list: [
            'Monitoring for market manipulation',
            'Prohibition of insider trading',
            'Transparent market rules and settlement criteria',
            'Independent market resolution verification',
            'Reporting suspicious trading activity'
          ]
        },
        {
          heading: 'Your Rights Under Regulations',
          list: [
            'Right to fair and transparent markets',
            'Right to timely withdrawal of funds',
            'Right to lodge complaints',
            'Right to privacy and data protection',
            'Right to self-exclusion and limits',
            'Right to access regulatory reporting'
          ]
        }
      ]
    },
    'dispute-resolution-process': {
      title: 'Dispute resolution process',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Filing a Dispute',
          text: 'If you believe a market was settled incorrectly or have issues with your account, follow our formal dispute resolution process.'
        },
        {
          heading: 'Step 1: Informal Resolution',
          list: [
            'Contact customer support via live chat or support@suppple.co.uk',
            'Explain your issue clearly with supporting evidence',
            'Support team reviews within 24-48 hours',
            'Most issues resolved at this stage'
          ]
        },
        {
          heading: 'Step 2: Formal Complaint',
          text: 'If informal resolution fails, escalate to formal complaint.'
        },
        {
          heading: 'Formal Complaint Process',
          list: [
            'Email complaints@suppple.co.uk with "FORMAL COMPLAINT" in subject',
            'Include: Your account details, issue description, supporting evidence',
            'Complaint acknowledged within 48 hours',
            'Investigated by dedicated compliance team',
            'Resolution provided within 7 business days',
            'You\'ll receive written explanation of decision'
          ]
        },
        {
          heading: 'Step 3: Executive Review',
          text: 'If unsatisfied with formal complaint outcome, request executive review.'
        },
        {
          heading: 'Executive Review Process',
          list: [
            'Request review within 14 days of complaint decision',
            'Email executivereview@suppple.co.uk',
            'Case reviewed by senior management',
            'May involve external expert consultation',
            'Final decision within 14 business days',
            'Decision is final at company level'
          ]
        },
        {
          heading: 'Step 4: Independent Alternative Dispute Resolution (ADR)',
          text: 'If still unresolved, you can escalate to independent ADR service.'
        },
        {
          heading: 'ADR Services',
          list: [
            'IBAS (Independent Betting Adjudication Service) - UK/International',
            'eCOGRA - Online gaming disputes',
            'CEDR (Centre for Effective Dispute Resolution)',
            'No cost to you',
            'Binding decision on Predict',
            'Contact details provided in final company response'
          ]
        },
        {
          heading: 'Common Dispute Types',
          text: 'Most disputes fall into these categories:'
        },
        {
          heading: '1. Market Settlement Disputes',
          list: [
            'Disagreement with market outcome determination',
            'Provide evidence: links to official sources, news articles, data',
            'Settlement team reviews all evidence',
            'Markets only overturned if clear error proven'
          ]
        },
        {
          heading: '2. Account/Transaction Disputes',
          list: [
            'Missing deposits',
            'Delayed withdrawals',
            'Incorrect balance',
            'Provide: transaction IDs, screenshots, timestamps',
            'Financial team investigates with payment processors'
          ]
        },
        {
          heading: '3. Account Closure/Restriction Disputes',
          list: [
            'Account suspended or closed',
            'Deposit/withdrawal limits reduced',
            'Provide explanation of circumstances',
            'Compliance team reviews account activity'
          ]
        },
        {
          heading: '4. Bonus/Promotion Disputes',
          list: [
            'Bonus not credited',
            'Wagering requirements unclear',
            'Provide: promotion details, terms screenshot',
            'Promotions team reviews T&Cs application'
          ]
        },
        {
          heading: 'Evidence to Support Your Case',
          list: [
            'Screenshots of relevant pages',
            'Transaction IDs and timestamps',
            'Email correspondence',
            'Official sources for market outcomes',
            'Account statements',
            'Clear explanation of your position'
          ]
        },
        {
          heading: 'Response Timelines',
          list: [
            'Support inquiry: 24-48 hours',
            'Formal complaint: 7 business days',
            'Executive review: 14 business days',
            'ADR: 30-90 days (varies by service)'
          ]
        },
        {
          heading: 'Regulatory Complaints',
          text: 'You can also lodge complaints directly with our licensing authorities. Contact details provided upon request.'
        }
      ]
    },
    'privacy-policy-summary': {
      title: 'Privacy policy summary',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Your Privacy Matters',
          text: 'Predict by Suppple is committed to protecting your personal information. This summary highlights key points. Full privacy policy available at predict.suppple.co.uk/privacy.'
        },
        {
          heading: 'Information We Collect',
          text: 'To provide our services, we collect:'
        },
        {
          heading: 'Personal Information',
          list: [
            'Name, date of birth, address',
            'Email address and phone number',
            'Government-issued ID documents',
            'Payment method details',
            'Photos (for verification purposes)'
          ]
        },
        {
          heading: 'Usage Information',
          list: [
            'Trading activity and transaction history',
            'Login times and IP addresses',
            'Device information and browser type',
            'Pages viewed and features used',
            'Communication preferences'
          ]
        },
        {
          heading: 'How We Use Your Information',
          list: [
            'Provide prediction market trading services',
            'Verify identity (KYC/AML compliance)',
            'Process deposits and withdrawals',
            'Detect and prevent fraud',
            'Improve platform features',
            'Send service-related communications',
            'Marketing (only with your consent)'
          ]
        },
        {
          heading: 'Information Sharing',
          text: 'We do not sell your personal information. We share data only when necessary:'
        },
        {
          heading: 'Third Parties We Share With',
          list: [
            'Payment processors (to process transactions)',
            'Identity verification services (KYC checks)',
            'Regulatory authorities (legal compliance)',
            'Law enforcement (if legally required)',
            'Service providers (cloud hosting, email)',
            'Licensed partner platforms (for market operations)'
          ]
        },
        {
          heading: 'Data Security Measures',
          list: [
            'Encryption in transit (TLS/SSL)',
            'Encryption at rest (AES-256)',
            'Access controls and authentication',
            'Regular security audits',
            'Staff training on data protection',
            'Incident response procedures'
          ]
        },
        {
          heading: 'Your Rights Under GDPR/POPIA',
          list: [
            'Right to access your data',
            'Right to correct inaccurate data',
            'Right to delete data (subject to legal retention)',
            'Right to restrict processing',
            'Right to data portability',
            'Right to object to processing',
            'Right to withdraw consent'
          ]
        },
        {
          heading: 'Exercising Your Rights',
          text: 'To exercise any privacy rights, email privacy@suppple.co.uk with your request. We respond within 30 days.'
        },
        {
          heading: 'Cookies and Tracking',
          list: [
            'Essential cookies (required for site function)',
            'Analytics cookies (understand usage patterns)',
            'Preference cookies (remember your settings)',
            'Marketing cookies (with your consent)',
            'You can manage cookie preferences in settings'
          ]
        },
        {
          heading: 'Data Retention',
          list: [
            'Account data: Retained while account active + 7 years after closure',
            'Transaction records: 7 years (regulatory requirement)',
            'KYC documents: 7 years post-verification',
            'Marketing data: Until you unsubscribe',
            'IP logs: 90 days'
          ]
        },
        {
          heading: 'International Data Transfers',
          text: 'Your data may be transferred to countries outside your region for processing. We ensure adequate protections through Standard Contractual Clauses and other mechanisms.'
        },
        {
          heading: 'Children\'s Privacy',
          text: 'Predict is not intended for individuals under 18. We do not knowingly collect data from minors. Accounts found to belong to minors are immediately closed.'
        },
        {
          heading: 'Privacy Policy Updates',
          text: 'We may update our privacy policy. Material changes communicated via email. Continued use after changes constitutes acceptance.'
        },
        {
          heading: 'Contact Our Data Protection Officer',
          text: 'Questions about privacy? Email dpo@suppple.co.uk or write to:\\n\\nData Protection Officer\\nSuppple Group\\nLondon, United Kingdom'
        }
      ]
    },
    'responsible-prediction-guidelines': {
      title: 'Responsible prediction guidelines',
      category: 'Rules & Regulations',
      content: [
        {
          heading: 'Trade Responsibly',
          text: 'Prediction markets should be entertaining and potentially profitable, but never risk more than you can afford to lose.'
        },
        {
          heading: 'Set Personal Limits',
          text: 'Take control of your prediction market activity.'
        },
        {
          heading: 'Available Limit Tools',
          list: [
            'Deposit Limits: Cap daily, weekly, or monthly deposits',
            'Loss Limits: Maximum amount you can lose in a period',
            'Session Time Limits: Receive reminders after set duration',
            'Reality Checks: Pop-up reminders of time spent',
            'Cooling-Off Periods: Take 24-72 hour breaks',
            'Self-Exclusion: Block access for set periods (7 days to permanent)'
          ]
        },
        {
          heading: 'How to Set Limits',
          list: [
            'Navigate to Account Settings > Responsible Gaming',
            'Choose limit type and amount',
            'Confirm your choice',
            'Limits activate immediately',
            'Can only be decreased (increases require 24-hour cooling-off)',
            'Cannot be removed during active period'
          ]
        },
        {
          heading: 'Warning Signs of Problem Behavior',
          text: 'Be aware of these warning signs:'
        },
        {
          heading: 'Behavioral Red Flags',
          list: [
            'Trading with money needed for essential expenses',
            'Chasing losses by increasing bet sizes',
            'Spending more time/money than intended',
            'Lying to family/friends about trading activity',
            'Neglecting work, school, or relationships',
            'Feeling anxious or depressed about trading',
            'Borrowing money to fund trading',
            'Trading to escape problems or negative emotions'
          ]
        },
        {
          heading: 'Self-Assessment Quiz',
          text: 'Answer honestly:'
        },
        {
          heading: 'Assessment Questions',
          list: [
            'Have you ever tried to stop trading but couldn\'t?',
            'Do you trade to win back losses?',
            'Has trading caused financial problems?',
            'Do you feel restless when not trading?',
            'Have relationships suffered due to trading?'
          ]
        },
        {
          heading: 'If you answered yes to 2+ questions, consider seeking help.'
        },
        {
          heading: 'Getting Help',
          text: 'Professional support is available:'
        },
        {
          heading: 'Support Organizations',
          list: [
            'BeGambleAware: www.begambleaware.org (UK)',
            'GamCare: www.gamcare.org.uk (UK Helpline: 0808 8020 133)',
            'Gamblers Anonymous: www.gamblersanonymous.org',
            'National Council on Problem Gambling (USA): 1-800-522-4700',
            'South African Responsible Gambling Foundation: 0800 006 008',
            'Gambling Therapy: www.gamblingtherapy.org (International)'
          ]
        },
        {
          heading: 'Self-Exclusion',
          text: 'If you need a break, self-exclusion is available.'
        },
        {
          heading: 'Self-Exclusion Options',
          list: [
            '7 Days: Short break to reassess',
            '1 Month: Temporary exclusion',
            '6 Months: Extended break',
            '1 Year: Long-term exclusion',
            'Permanent: Cannot be reversed',
            'Applies across all Suppple Group platforms'
          ]
        },
        {
          heading: 'To Self-Exclude',
          list: [
            'Navigate to Account Settings > Self-Exclusion',
            'Select exclusion period',
            'Confirm decision (cannot be undone)',
            'Account immediately suspended',
            'Marketing communications stopped',
            'Cannot create new accounts during period'
          ]
        },
        {
          heading: 'Tips for Responsible Trading',
          list: [
            'Set a budget before trading',
            'Never chase losses',
            'Take regular breaks',
            'Don\'t trade under influence of alcohol/drugs',
            'Keep trading separate from essential finances',
            'Talk to someone if trading becomes problematic',
            'Remember: Prediction markets are not guaranteed income'
          ]
        },
        {
          heading: 'For Friends & Family',
          text: 'If someone you know has a problem, encourage them to seek help. Resources above can guide both of you.'
        },
        {
          heading: 'Predict\'s Commitment',
          text: 'We are committed to providing a safe, responsible platform. Our team is trained to identify problem behavior and offer support. Contact us anytime at support@suppple.co.uk.'
        }
      ]
    },

    // TECHNICAL SUPPORT
    'platform-requirements-and-compatibility': {
      title: 'Platform requirements and compatibility',
      category: 'Technical Support',
      content: [
        {
          heading: 'System Requirements',
          text: 'Predict by Suppple works on most modern devices and browsers.'
        },
        {
          heading: 'Web Browser Requirements',
          list: [
            'Chrome 90+ (recommended)',
            'Firefox 88+',
            'Safari 14+',
            'Edge 90+',
            'JavaScript must be enabled',
            'Cookies must be enabled',
            'Minimum screen resolution: 1024x768'
          ]
        },
        {
          heading: 'Mobile App Requirements',
          text: 'iOS: iPhone 6s or newer, iOS 13.0+\nAndroid: Android 8.0+, minimum 2GB RAM'
        },
        {
          heading: 'Internet Connection',
          list: [
            'Minimum: 1 Mbps for basic functionality',
            'Recommended: 5+ Mbps for optimal experience',
            'Live trading requires stable connection',
            'Real-time price updates require continuous connection'
          ]
        },
        {
          heading: 'Supported Countries',
          text: 'Predict by Suppple is available in select countries. Check predict.suppple.co.uk/countries for the full list.'
        },
        {
          heading: 'Known Compatibility Issues',
          list: [
            'Internet Explorer not supported',
            'VPNs may be blocked for security reasons',
            'Corporate firewalls may block access',
            'Ad blockers may interfere with some features'
          ]
        }
      ]
    },
    'mobile-app-download-and-setup': {
      title: 'Mobile app download and setup',
      category: 'Technical Support',
      content: [
        {
          heading: 'Download Links',
          text: 'iOS: Available on the Apple App Store\nAndroid: Available on Google Play Store'
        },
        {
          heading: 'Installation',
          list: [
            'Open App Store or Google Play',
            'Search for "Predict by Suppple"',
            'Tap "Install" or "Get"',
            'Wait for download and installation to complete',
            'Tap "Open" to launch the app'
          ]
        },
        {
          heading: 'First-Time Setup',
          list: [
            'Open the Predict app',
            'Log in with your existing account (or create new account)',
            'Grant permissions (notifications, biometric login)',
            'Set up biometric authentication (Face ID, Touch ID, Fingerprint)',
            'Enable push notifications for market updates',
            'Start trading!'
          ]
        },
        {
          heading: 'App Features',
          list: [
            'Full trading functionality',
            'Real-time price updates',
            'Push notifications for market events',
            'Biometric login',
            'Deposit and withdrawal',
            'Portfolio tracking',
            'Market research and news'
          ]
        },
        {
          heading: 'Troubleshooting',
          list: [
            'App won\'t download: Check storage space and internet connection',
            'Login issues: Verify credentials, reset password if needed',
            'Push notifications not working: Check device notification settings',
            'App crashes: Update to latest version, restart device',
            'Slow performance: Close background apps, clear app cache'
          ]
        }
      ]
    },
    'browser-compatibility-issues': {
      title: 'Browser compatibility issues',
      category: 'Technical Support',
      content: [
        {
          heading: 'Supported Browsers',
          text: 'Predict by Suppple works best on modern browsers.'
        },
        {
          heading: 'Recommended Browsers',
          list: [
            'Google Chrome (version 90+)',
            'Mozilla Firefox (version 88+)',
            'Apple Safari (version 14+)',
            'Microsoft Edge (version 90+)',
            'Opera (version 76+)',
            'Brave Browser (latest version)'
          ]
        },
        {
          heading: 'Unsupported Browsers',
          list: [
            'Internet Explorer (all versions) - End of life',
            'Opera Mini - Limited functionality',
            'Older browser versions (3+ years old)'
          ]
        },
        {
          heading: 'Common Browser Issues',
          text: 'If experiencing issues, try these solutions:'
        },
        {
          heading: '1. Page Not Loading Correctly',
          list: [
            'Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)',
            'Clear browser cache and cookies',
            'Disable browser extensions temporarily',
            'Try incognito/private browsing mode',
            'Update browser to latest version'
          ]
        },
        {
          heading: '2. Login Issues',
          list: [
            'Enable cookies (required for authentication)',
            'Disable cookie blockers',
            'Check browser privacy settings',
            'Try different browser',
            'Clear site data for predict.suppple.co.uk'
          ]
        },
        {
          heading: '3. Trading Features Not Working',
          list: [
            'Enable JavaScript (required)',
            'Disable ad blockers',
            'Check browser console for errors (F12)',
            'Verify browser extensions aren\'t interfering',
            'Test in incognito mode'
          ]
        },
        {
          heading: '4. Slow Performance',
          list: [
            'Close unused browser tabs',
            'Disable unnecessary extensions',
            'Clear browsing data (cache, cookies)',
            'Update browser to latest version',
            'Restart browser',
            'Check internet connection speed'
          ]
        },
        {
          heading: 'Browser-Specific Issues',
          text: 'Known issues with specific browsers:'
        },
        {
          heading: 'Safari Issues',
          list: [
            'Cross-site tracking prevention may block features',
            'Solution: Settings > Privacy > Disable "Prevent Cross-Site Tracking"',
            'Or add predict.suppple.co.uk to allowed sites'
          ]
        },
        {
          heading: 'Firefox Issues',
          list: [
            'Enhanced Tracking Protection may interfere',
            'Solution: Click shield icon in address bar > Turn off protection',
            'Or add predict.suppple.co.uk to exceptions'
          ]
        },
        {
          heading: 'Brave Browser Issues',
          list: [
            'Brave Shields may block functionality',
            'Solution: Click Brave icon > Shields Down for predict.suppple.co.uk',
            'Refresh page after disabling'
          ]
        },
        {
          heading: 'Mobile Browser Compatibility',
          list: [
            'Chrome Mobile: Fully supported',
            'Safari Mobile: Fully supported (iOS 14+)',
            'Firefox Mobile: Supported',
            'Samsung Internet: Supported',
            'UC Browser: Limited support',
            'Recommendation: Use dedicated mobile app for best experience'
          ]
        },
        {
          heading: 'Clearing Cache and Cookies (Chrome)',
          list: [
            'Click three dots (top right) > Settings',
            'Privacy and Security > Clear browsing data',
            'Select "Cookies and other site data" and "Cached images and files"',
            'Choose "All time"',
            'Click "Clear data"',
            'Restart browser'
          ]
        },
        {
          heading: 'Still Having Issues?',
          text: 'Contact support@suppple.co.uk with:\\n- Browser name and version\\n- Operating system\\n- Description of issue\\n- Screenshot if possible\\n- Error messages from browser console (F12)'
        }
      ]
    },
    'clearing-cache-and-cookies': {
      title: 'Clearing cache and cookies',
      category: 'Technical Support',
      content: [
        {
          heading: 'Why Clear Cache and Cookies?',
          text: 'Clearing cache and cookies can resolve login issues, display problems, and performance issues.'
        },
        {
          heading: 'What Are Cache and Cookies?',
          list: [
            'Cache: Temporary files stored to speed up page loading',
            'Cookies: Small files that remember your preferences and login',
            'Over time, they can become outdated or corrupted'
          ]
        },
        {
          heading: 'Google Chrome (Desktop)',
          list: [
            'Click three dots (⋮) in top right',
            'Go to Settings > Privacy and security',
            'Click "Clear browsing data"',
            'Select "Cookies and other site data" and "Cached images and files"',
            'Choose time range: "All time" (recommended)',
            'Click "Clear data"',
            'Restart Chrome'
          ]
        },
        {
          heading: 'Mozilla Firefox (Desktop)',
          list: [
            'Click hamburger menu (≡) in top right',
            'Go to Settings > Privacy & Security',
            'Scroll to "Cookies and Site Data"',
            'Click "Clear Data"',
            'Check both boxes',
            'Click "Clear"',
            'Restart Firefox'
          ]
        },
        {
          heading: 'Safari (Mac)',
          list: [
            'Click Safari in menu bar',
            'Select "Preferences" > "Privacy"',
            'Click "Manage Website Data"',
            'Click "Remove All"',
            'Confirm removal',
            'Restart Safari'
          ]
        },
        {
          heading: 'Microsoft Edge',
          list: [
            'Click three dots (⋯) in top right',
            'Go to Settings > Privacy, search, and services',
            'Under "Clear browsing data" click "Choose what to clear"',
            'Select "Cookies and other site data" and "Cached images and files"',
            'Choose "All time"',
            'Click "Clear now"',
            'Restart Edge'
          ]
        },
        {
          heading: 'Chrome Mobile (Android)',
          list: [
            'Open Chrome app',
            'Tap three dots (⋮) > Settings',
            'Tap "Privacy and security" > "Clear browsing data"',
            'Select "Cookies and site data" and "Cached images and files"',
            'Choose "All time"',
            'Tap "Clear data"',
            'Restart Chrome app'
          ]
        },
        {
          heading: 'Safari Mobile (iPhone/iPad)',
          list: [
            'Go to iPhone Settings (not Safari app)',
            'Scroll to Safari',
            'Tap "Clear History and Website Data"',
            'Confirm by tapping "Clear History and Data"',
            'Restart Safari app'
          ]
        },
        {
          heading: 'What Happens After Clearing?',
          list: [
            'You\'ll be logged out of websites (including Predict)',
            'Saved preferences may be reset',
            'Websites may load slower first time (re-caching)',
            'Auto-fill data remains (separate from cookies)',
            'Passwords saved in browser remain'
          ]
        },
        {
          heading: 'Clearing Site-Specific Data',
          text: 'To clear data only for Predict (not all websites):'
        },
        {
          heading: 'Chrome: Site-Specific Clearing',
          list: [
            'Click lock/info icon in address bar',
            'Click "Cookies"',
            'Select predict.suppple.co.uk',
            'Click "Remove"',
            'Refresh page'
          ]
        },
        {
          heading: 'After Clearing: Re-Login',
          list: [
            'Visit predict.suppple.co.uk',
            'Click "Log In"',
            'Enter credentials',
            'May need to verify device (2FA)',
            'Settings and preferences reset to defaults'
          ]
        },
        {
          heading: 'Still Having Issues?',
          text: 'If problems persist after clearing cache and cookies, try:\\n- Different browser\\n- Incognito/private mode\\n- Disable browser extensions\\n- Contact support@suppple.co.uk'
        }
      ]
    },
    'api-documentation-for-developers': {
      title: 'API documentation for developers',
      category: 'Technical Support',
      content: [
        {
          heading: 'Predict API Overview',
          text: 'Predict by Suppple offers a RESTful API for developers to integrate prediction market data and trading functionality.'
        },
        {
          heading: 'API Access',
          text: 'API access is available to approved developers and partners. Apply at developers.suppple.co.uk.'
        },
        {
          heading: 'API Key Authentication',
          list: [
            'Register for developer account',
            'Generate API key in developer dashboard',
            'Include key in request headers: "X-API-Key: your_key_here"',
            'Keep API keys secret (never expose in client-side code)',
            'Rotate keys periodically for security'
          ]
        },
        {
          heading: 'Base URL',
          text: 'Production: https://api.predict.suppple.co.uk/v1\\nSandbox: https://sandbox-api.predict.suppple.co.uk/v1'
        },
        {
          heading: 'Core Endpoints',
          list: [
            'GET /markets - List all available markets',
            'GET /markets/{id} - Get specific market details',
            'GET /markets/{id}/orderbook - Get market order book',
            'POST /orders - Place order',
            'GET /orders - List your orders',
            'DELETE /orders/{id} - Cancel order',
            'GET /positions - List your positions',
            'GET /account - Get account information',
            'GET /transactions - List transaction history'
          ]
        },
        {
          heading: 'Example Request (Get Markets)',
          text: '```bash\\ncurl -X GET \\\\\\n  https://api.predict.suppple.co.uk/v1/markets \\\\\\n  -H "X-API-Key: your_api_key_here" \\\\\\n  -H "Content-Type: application/json"\\n```'
        },
        {
          heading: 'Example Response',
          text: '```json\\n{\\n  "markets": [\\n    {\\n      "id": "mrkt_12345",\\n      "title": "Will Team A win?",\\n      "category": "sports",\\n      "yes_price": 0.65,\\n      "no_price": 0.35,\\n      "volume_24h": 125000,\\n      "settlement_date": "2025-01-15T20:00:00Z"\\n    }\\n  ]\\n}\\n```'
        },
        {
          heading: 'Rate Limits',
          list: [
            'Standard: 100 requests per minute',
            'Premium: 1000 requests per minute',
            'Headers returned: X-RateLimit-Limit, X-RateLimit-Remaining',
            'Exceeding limits returns 429 Too Many Requests',
            'Contact API team for higher limits'
          ]
        },
        {
          heading: 'Webhooks',
          text: 'Subscribe to real-time events via webhooks.'
        },
        {
          heading: 'Webhook Events',
          list: [
            'market.created - New market added',
            'market.settled - Market outcome determined',
            'order.filled - Your order executed',
            'order.canceled - Order canceled',
            'deposit.completed - Deposit confirmed',
            'withdrawal.processed - Withdrawal completed'
          ]
        },
        {
          heading: 'WebSocket Streaming',
          text: 'For real-time market data, connect to WebSocket endpoint: wss://ws.predict.suppple.co.uk/v1/stream'
        },
        {
          heading: 'Error Handling',
          list: [
            '400 Bad Request - Invalid parameters',
            '401 Unauthorized - Invalid/missing API key',
            '403 Forbidden - Insufficient permissions',
            '404 Not Found - Resource doesn\'t exist',
            '429 Too Many Requests - Rate limit exceeded',
            '500 Internal Server Error - Server issue',
            '503 Service Unavailable - Maintenance'
          ]
        },
        {
          heading: 'Best Practices',
          list: [
            'Cache responses when possible',
            'Use WebSockets for real-time data (not polling)',
            'Implement exponential backoff for retries',
            'Validate data before sending requests',
            'Monitor API status at status.suppple.co.uk',
            'Join developer community at developers.suppple.co.uk/forum'
          ]
        },
        {
          heading: 'SDKs and Libraries',
          list: [
            'JavaScript/TypeScript: npm install @suppple/predict-sdk',
            'Python: pip install suppple-predict',
            'Java: Maven/Gradle available',
            'Ruby: gem install suppple-predict',
            'Go: go get github.com/suppple/predict-go'
          ]
        },
        {
          heading: 'Support for Developers',
          text: 'Email: api-support@suppple.co.uk\\nDocumentation: developers.suppple.co.uk/docs\\nSlack Community: slack.suppple.dev'
        }
      ]
    },
    'reporting-bugs-and-issues': {
      title: 'Reporting bugs and issues',
      category: 'Technical Support',
      content: [
        {
          heading: 'Found a Bug?',
          text: 'We appreciate users reporting bugs and issues. Your feedback helps us improve Predict.'
        },
        {
          heading: 'Before Reporting',
          list: [
            'Verify it\'s actually a bug (not expected behavior)',
            'Check if issue is already known (status.suppple.co.uk)',
            'Try reproducing on different browser/device',
            'Clear cache and cookies, try again',
            'Update browser/app to latest version'
          ]
        },
        {
          heading: 'How to Report a Bug',
          text: 'Email: bugs@suppple.co.uk or use in-app "Report Bug" feature.'
        },
        {
          heading: 'Information to Include',
          list: [
            'Detailed description of the issue',
            'Steps to reproduce the bug',
            'Expected behavior vs actual behavior',
            'Browser/device information',
            'Operating system and version',
            'Screenshot or screen recording',
            'Error messages (if any)',
            'Time and date of occurrence'
          ]
        },
        {
          heading: 'Example Bug Report',
          text: '**Bug Title:** "Unable to place order on mobile"\\n\\n**Description:** When I try to place an order on mobile app, the "Confirm Order" button is unresponsive.\\n\\n**Steps to Reproduce:**\\n1. Open Predict app on iPhone\\n2. Navigate to market "Will Team A win?"\\n3. Click "Buy Yes"\\n4. Enter 10 contracts\\n5. Click "Confirm Order"\\n6. Nothing happens\\n\\n**Expected:** Order should be placed\\n**Actual:** Button doesn\'t respond\\n\\n**Device:** iPhone 13, iOS 17.2\\n**App Version:** 2.1.4\\n**Screenshot:** [attached]'
        },
        {
          heading: 'Bug Severity Levels',
          list: [
            'Critical: App crashes, data loss, security issue',
            'High: Major feature broken, affects many users',
            'Medium: Feature partially broken, workaround exists',
            'Low: Minor visual issue, typo, cosmetic problem'
          ]
        },
        {
          heading: 'What Happens After Reporting?',
          list: [
            'Acknowledgment email within 24 hours',
            'Bug assigned to development team',
            'Investigation and diagnosis',
            'Fix developed and tested',
            'Deployed in next update',
            'Reporter notified when fixed'
          ]
        },
        {
          heading: 'Bug Bounty Program',
          text: 'Security vulnerabilities? Report to security@suppple.co.uk for potential reward.'
        },
        {
          heading: 'Security Bug Bounties',
          list: [
            'Critical vulnerabilities: Up to £5,000',
            'High severity: Up to £2,000',
            'Medium severity: Up to £500',
            'Low severity: Up to £100',
            'Responsible disclosure required'
          ]
        },
        {
          heading: 'What NOT to Report',
          list: [
            'Feature requests (use feedback@suppple.co.uk)',
            'Account-specific issues (use support@suppple.co.uk)',
            'Payment problems (contact payment support)',
            'Already-known issues on status page'
          ]
        },
        {
          heading: 'Feature Requests',
          text: 'Have an idea for a new feature? Submit at feedback.suppple.co.uk or email feedback@suppple.co.uk.'
        }
      ]
    },
    'system-maintenance-schedule': {
      title: 'System maintenance schedule',
      category: 'Technical Support',
      content: [
        {
          heading: 'Scheduled Maintenance',
          text: 'Predict performs regular maintenance to ensure optimal performance and security.'
        },
        {
          heading: 'Routine Maintenance Windows',
          list: [
            'Weekly: Sundays, 2:00-4:00 AM UTC',
            'Duration: Typically 30-60 minutes',
            'Frequency: Most weeks (canceled if unnecessary)',
            'Notification: 72 hours advance notice via email',
            'Downtime: Platform unavailable during maintenance'
          ]
        },
        {
          heading: 'What Happens During Maintenance?',
          list: [
            'Platform inaccessible (website and app)',
            'Trading suspended',
            'Open orders remain active (execute when back online)',
            'Positions unaffected',
            'Market settlement not impacted',
            'Data backups performed'
          ]
        },
        {
          heading: 'Emergency Maintenance',
          text: 'In rare cases, emergency maintenance is required for critical issues.'
        },
        {
          heading: 'Emergency Maintenance Scenarios',
          list: [
            'Security vulnerability discovered',
            'Critical system failure',
            'Database issue requiring immediate attention',
            'Notice: As little as 15 minutes (or none)',
            'Updates posted to status.suppple.co.uk'
          ]
        },
        {
          heading: 'Extended Maintenance',
          text: 'Major upgrades may require longer maintenance windows (4-8 hours).'
        },
        {
          heading: 'Extended Maintenance Schedule',
          list: [
            'Frequency: Quarterly or as needed',
            'Duration: 4-8 hours',
            'Notice: 2 weeks advance warning',
            'Scheduled: Off-peak hours (weekends)',
            'Communication: Email, in-app banner, social media'
          ]
        },
        {
          heading: 'Checking Maintenance Status',
          list: [
            'Visit: status.suppple.co.uk',
            'Real-time status updates',
            'Upcoming maintenance calendar',
            'Subscribe to status notifications',
            'Twitter: @SupppleStatus'
          ]
        },
        {
          heading: 'Preparing for Maintenance',
          list: [
            'Check maintenance schedule in advance',
            'Close or adjust positions if needed',
            'Download reports or statements beforehand',
            'Don\'t plan time-sensitive trades during maintenance',
            'Enable maintenance notifications in account settings'
          ]
        },
        {
          heading: 'What Maintenance Includes',
          list: [
            'Software updates and patches',
            'Security enhancements',
            'Database optimization',
            'Server hardware updates',
            'Performance improvements',
            'Bug fixes',
            'New feature deployments'
          ]
        },
        {
          heading: 'Post-Maintenance',
          list: [
            'Platform returns to normal operation',
            'All features restored',
            'Pending orders resume processing',
            'Email notification sent when complete',
            'Release notes published (if new features)'
          ]
        },
        {
          heading: 'Minimal-Downtime Updates',
          text: 'Most updates deployed without downtime using rolling deployments. These happen continuously without user impact.'
        },
        {
          heading: 'Getting Notifications',
          list: [
            'Enable maintenance alerts in Account Settings',
            'Subscribe to status.suppple.co.uk',
            'Follow @SupppleStatus on Twitter',
            'Join Telegram channel: t.me/suppplestatus'
          ]
        }
      ]
    }
  };

  const helpCategories = [
    {
      id: 'getting-started',
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of Predict by Suppple',
      color: 'blue',
      articles: [
        { id: 'what-is-predict-by-suppple', title: 'What is Predict by Suppple?', views: '15.2k' },
        { id: 'how-do-prediction-markets-work', title: 'How do prediction markets work?', views: '12.8k' },
        { id: 'creating-your-first-account', title: 'Creating your first account', views: '10.5k' },
        { id: 'understanding-market-types', title: 'Understanding market types', views: '8.9k' },
        { id: 'how-to-place-your-first-prediction', title: 'How to place your first prediction', views: '9.2k' },
        { id: 'reading-market-probabilities', title: 'Reading market probabilities', views: '7.1k' },
      ]
    },
    {
      id: 'account',
      icon: Users,
      title: 'Account & Verification',
      description: 'Manage your account and identity verification',
      color: 'green',
      articles: [
        { id: 'identity-verification-process', title: 'Identity verification process', views: '11.3k' },
        { id: 'updating-your-profile-information', title: 'Updating your profile information', views: '6.2k' },
        { id: 'two-factor-authentication-setup', title: 'Two-factor authentication setup', views: '8.7k' },
        { id: 'password-reset-and-recovery', title: 'Password reset and recovery', views: '5.4k' },
        { id: 'account-security-best-practices', title: 'Account security best practices', views: '7.8k' },
        { id: 'closing-your-account', title: 'Closing your account', views: '3.1k' },
      ]
    },
    {
      id: 'trading',
      icon: TrendingUp,
      title: 'Trading & Markets',
      description: 'Everything about predictions and trading',
      color: 'purple',
      articles: [
        { id: 'how-to-buy-positions-in-a-market', title: 'How to buy positions in a market', views: '14.6k' },
        { id: 'selling-positions-before-settlement', title: 'Selling positions before settlement', views: '9.8k' },
        { id: 'understanding-bid-and-ask-prices', title: 'Understanding bid and ask prices', views: '8.2k' },
        { id: 'market-settlement-and-payouts', title: 'Market settlement and payouts', views: '10.1k' },
        { id: 'limit-orders-vs-market-orders', title: 'Limit orders vs market orders', views: '6.7k' },
        { id: 'portfolio-management-tips', title: 'Portfolio management tips', views: '5.9k' },
        { id: 'risk-management-strategies', title: 'Risk management strategies', views: '7.4k' },
        { id: 'reading-market-depth-and-order-book', title: 'Reading market depth and order book', views: '4.8k' },
      ]
    },
    {
      id: 'deposits',
      icon: CreditCard,
      title: 'Deposits & Withdrawals',
      description: 'Funding your account and cashing out',
      color: 'orange',
      articles: [
        { id: 'how-to-deposit-funds', title: 'How to deposit funds', views: '13.2k' },
        { id: 'accepted-payment-methods', title: 'Accepted payment methods', views: '11.5k' },
        { id: 'withdrawal-process-and-timing', title: 'Withdrawal process and timing', views: '10.9k' },
        { id: 'minimum-and-maximum-deposit-limits', title: 'Minimum and maximum deposit limits', views: '7.6k' },
        { id: 'payment-processing-fees', title: 'Payment processing fees', views: '6.3k' },
        { id: 'failed-transactions-troubleshooting', title: 'Failed transactions troubleshooting', views: '4.9k' },
        { id: 'bank-account-verification', title: 'Bank account verification', views: '5.7k' },
      ]
    },
    {
      id: 'rules',
      icon: Shield,
      title: 'Rules & Regulations',
      description: 'Platform policies and legal information',
      color: 'red',
      articles: [
        { id: 'terms-of-service', title: 'Terms of Service', views: '8.4k' },
        { id: 'market-resolution-rules', title: 'Market resolution rules', views: '9.7k' },
        { id: 'prohibited-activities', title: 'Prohibited activities', views: '6.1k' },
        { id: 'regulatory-compliance-overview', title: 'Regulatory compliance overview', views: '5.8k' },
        { id: 'dispute-resolution-process', title: 'Dispute resolution process', views: '4.2k' },
        { id: 'privacy-policy-summary', title: 'Privacy policy summary', views: '3.9k' },
        { id: 'responsible-prediction-guidelines', title: 'Responsible prediction guidelines', views: '4.5k' },
      ]
    },
    {
      id: 'technical',
      icon: Settings,
      title: 'Technical Support',
      description: 'App issues and technical troubleshooting',
      color: 'gray',
      articles: [
        { id: 'platform-requirements-and-compatibility', title: 'Platform requirements and compatibility', views: '7.2k' },
        { id: 'mobile-app-download-and-setup', title: 'Mobile app download and setup', views: '9.4k' },
        { id: 'browser-compatibility-issues', title: 'Browser compatibility issues', views: '4.6k' },
        { id: 'clearing-cache-and-cookies', title: 'Clearing cache and cookies', views: '3.8k' },
        { id: 'api-documentation-for-developers', title: 'API documentation for developers', views: '6.5k' },
        { id: 'reporting-bugs-and-issues', title: 'Reporting bugs and issues', views: '2.9k' },
        { id: 'system-maintenance-schedule', title: 'System maintenance schedule', views: '2.1k' },
      ]
    },
  ];

  const popularTopics = [
    { title: 'How do I get started?', category: 'Getting Started', categoryId: 'getting-started' },
    { title: 'How to deposit funds', category: 'Deposits & Withdrawals', categoryId: 'deposits' },
    { title: 'Understanding market settlement', category: 'Trading & Markets', categoryId: 'trading' },
    { title: 'Identity verification requirements', category: 'Account & Verification', categoryId: 'account' },
    { title: 'Withdrawal timing and limits', category: 'Deposits & Withdrawals', categoryId: 'deposits' },
    { title: 'Market resolution disputes', category: 'Rules & Regulations', categoryId: 'rules' },
  ];

  const faqItems = [
    {
      question: 'What is Predict by Suppple?',
      answer: 'Predict by Suppple is a regulated prediction market platform where users can trade on the outcomes of real-world events. You can buy and sell positions based on your predictions about sports, politics, economics, entertainment, and more.'
    },
    {
      question: 'How does trading work on prediction markets?',
      answer: 'Prediction markets work like financial markets. Each event has a market where you can buy "Yes" or "No" positions. Prices represent the market\'s probability of an outcome. If your prediction is correct when the market settles, you receive $1 per contract. If incorrect, you receive $0.'
    },
    {
      question: 'Is Predict by Suppple legal?',
      answer: 'Yes, Predict by Suppple operates through licensed partners in regulated jurisdictions. We comply with all applicable laws and regulations in the markets where we operate. Users must be 18+ and pass identity verification.'
    },
    {
      question: 'How long does verification take?',
      answer: 'Identity verification typically takes 1-5 business days. You\'ll need to provide a government-issued ID and proof of address. Some users may be verified instantly through our automated system.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept card payments (Visa, Mastercard), bank transfers (EFT), Stripe (various methods including Apple Pay, Google Pay), vouchers, and mobile carrier billing. Payment methods vary by region.'
    },
    {
      question: 'How long do withdrawals take?',
      answer: 'Withdrawal processing typically takes 2-5 business days for bank transfers, 3-7 days for card withdrawals, and 24-48 hours for digital wallets. All withdrawals undergo security review before processing.'
    },
    {
      question: 'What happens if a market is disputed?',
      answer: 'If there\'s a dispute about market resolution, our team reviews the situation according to our market rules. We use official sources and predetermined criteria to resolve all markets fairly and transparently.'
    },
    {
      question: 'Are there fees to trade?',
      answer: 'Predict by Suppple does not charge trading fees. However, payment processors may charge fees for deposits and withdrawals. All fees are clearly displayed before you confirm any transaction.'
    },
    {
      question: 'Can I trade on mobile?',
      answer: 'Yes! Predict by Suppple is available on iOS and Android devices. You can download our mobile app or access the platform through your mobile browser with full functionality.'
    },
    {
      question: 'What are the deposit limits?',
      answer: 'Deposit limits vary by account level and verification status. Standard accounts have a minimum deposit of $10 and maximum limits that increase with verification level. Check your account dashboard for specific limits.'
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with a support specialist',
      availability: 'Mon-Fri, 9am-6pm GMT',
      action: 'View Numbers',
      color: 'purple'
    },
    {
      icon: ExternalLink,
      title: 'Community Forum',
      description: 'Connect with other traders',
      availability: 'Active community',
      action: 'Visit Forum',
      color: 'orange'
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results: any[] = [];
      helpCategories.forEach(category => {
        category.articles.forEach(article => {
          if (article.title.toLowerCase().includes(query.toLowerCase())) {
            results.push({ ...article, category: category.title, categoryId: category.id });
          }
        });
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleArticleClick = (article: any, categoryId: string) => {
    if (article.id && articleContent[article.id]) {
      setSelectedArticle({ ...articleContent[article.id], categoryId });
      // Scroll to top of article view
      setTimeout(() => {
        const element = document.getElementById('article-view');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      alert(`This article is coming soon!\n\nArticle: "${article.title}"\nCategory: ${categoryId}\n\nIn a production environment, this would display the full article content.`);
    }
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="help" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
              <HelpCircle className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, get support, and learn everything about Predict by Suppple
            </p>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search for help articles, guides, or questions..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-4 bg-white rounded-xl border border-gray-200 shadow-lg">
              <div className="p-4">
                <div className="text-sm text-gray-600 mb-3">
                  Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                </div>
                <div className="space-y-2">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleArticleClick(result, result.categoryId)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{result.title}</div>
                          <div className="text-sm text-gray-600">{result.category}</div>
                        </div>
                        <ChevronRight className="text-gray-400" size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Article Detail View */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              id="article-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16 bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-300 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{selectedArticle.category}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{selectedArticle.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="prose max-w-none">
                {selectedArticle.content.map((section: any, index: number) => (
                  <div key={index} className="mb-8">
                    {section.heading && (
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h4>
                    )}
                    {section.text && (
                      <p className="text-lg text-gray-700 mb-4 whitespace-pre-line leading-relaxed">{section.text}</p>
                    )}
                    {section.list && (
                      <ul className="space-y-3 mb-6">
                        {section.list.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-lg text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Was this article helpful?</p>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => alert('Thank you for your feedback!')} 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    👍 Yes, helpful
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => alert('Thank you for your feedback. We\'ll work on improving this article.')}
                  >
                    👎 No, needs improvement
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Popular Topics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTopics.map((topic, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-sm font-semibold text-gray-700 hover:text-blue-600"
                onClick={() => handleCategoryClick(topic.categoryId)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>

        {/* Help Categories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={`category-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 border-2 transition-all cursor-pointer group ${
                  selectedCategory === category.id ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  selectedCategory === category.id 
                    ? `bg-${category.color}-600` 
                    : `bg-${category.color}-100 group-hover:bg-${category.color}-600`
                }`}>
                  <category.icon className={`transition-colors ${
                    selectedCategory === category.id 
                      ? 'text-white' 
                      : `text-${category.color}-600 group-hover:text-white`
                  }`} size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h4>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.articles.slice(0, 3).map((article, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArticleClick(article, category.id);
                      }}
                      className="w-full flex items-center justify-between text-sm text-left hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{article.title}</span>
                      <ChevronRight className="text-gray-400" size={16} />
                    </button>
                  ))}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(category.id);
                  }}
                  className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  View all {category.articles.length} articles
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expanded Category View */}
        {selectedCategory && !selectedArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-300 shadow-xl"
          >
            {helpCategories.map((category) => {
              if (category.id === selectedCategory) {
                return (
                  <div key={category.id}>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-${category.color}-600 rounded-xl flex items-center justify-center`}>
                          <category.icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                          <p className="text-gray-600">{category.articles.length} articles</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="text-gray-600 hover:text-gray-900 font-semibold"
                      >
                        Close
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.articles.map((article, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleArticleClick(article, category.id)}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left group"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                              {article.title}
                            </div>
                            <div className="text-sm text-gray-500">{article.views} views</div>
                          </div>
                          <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </motion.div>
        )}

        {/* Detailed FAQ Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <h4 className="text-lg font-bold text-gray-900">{faq.question}</h4>
                    </div>
                    <ChevronDown 
                      className={`text-gray-400 flex-shrink-0 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} 
                      size={24} 
                    />
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700 ml-8">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Still Need Help?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-${option.color}-100 rounded-full flex items-center justify-center`}>
                  <option.icon className={`text-${option.color}-600`} size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                <p className="text-xs text-gray-500 mb-4">{option.availability}</p>
                <Button 
                  className={`w-full bg-${option.color}-600 hover:bg-${option.color}-700`}
                  onClick={() => {
                    if (option.title === 'Email Support') {
                      window.location.href = 'mailto:support@suppple.co.uk';
                    } else if (option.title === 'Live Chat') {
                      alert('Opening live chat...\n\nIn a production environment, this would open a live chat widget where you can speak with a support agent in real-time.');
                    } else if (option.title === 'Phone Support') {
                      alert('Phone Support Numbers:\n\nUK: +44 20 1234 5678\nUS: +1 555 123 4567\nZA: +27 11 123 4567\n\nAvailable: Mon-Fri, 9am-6pm GMT');
                    } else {
                      alert('Opening Community Forum...\n\nIn a production environment, this would take you to our community forum where you can ask questions and connect with other traders.');
                    }
                  }}
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Quick Links</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">Platform Resources</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => alert('Platform Status - All systems operational')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Platform Status
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => alert('Opening API Documentation...')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    API Documentation
                  </button>
                </li>
                <li>
                  <a href="#regulatory" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronRight size={16} />
                    Market Rules
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => handleCategoryClick('trading')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Trading Guide
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal & Compliance</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#regulatory" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronRight size={16} />
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#regulatory" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronRight size={16} />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#regulatory" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronRight size={16} />
                    Regulatory Information
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => alert('Cookie Policy\n\nWe use cookies to improve your experience. View our full cookie policy for details.')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Community</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => alert('Opening Community Forum...')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Community Forum
                  </button>
                </li>
                <li>
                  <a href="#news" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronRight size={16} />
                    Trading Blog
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => alert('Opening Educational Videos...')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Educational Videos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => alert('Follow us on:\n\nTwitter: @PredictSuppple\nLinkedIn: Predict by Suppple\nFacebook: PredictSuppple')}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                    Social Media
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <AlertCircle className="mx-auto mb-4 text-blue-600" size={48} />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Reach out via live chat, email, or phone and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => alert('Opening live chat...\n\nConnecting you with a support agent...')}
              >
                <MessageCircle size={20} className="mr-2" />
                Start Live Chat
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = 'mailto:support@suppple.co.uk?subject=Help Center Inquiry'}
              >
                <Mail size={20} className="mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
