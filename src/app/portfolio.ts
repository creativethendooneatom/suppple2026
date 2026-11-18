import prediktLogo from '../assets/predikt-logo-official.png';
import grioLogo from '../assets/096d4fc46974c6f935b21bbacbca7e805f856062.png';
import makerrrLogo from '../assets/a43e4904f855e7ec564fd9161424505e0b04623c.png';

export const portfolio = {
  predikt: {
    name: 'Predikt',
    category: 'Prediction markets',
    path: '/predikt',
    logo: prediktLogo,
    summary: 'Event contracts and market-based forecasts for real-world outcomes.',
  },
  grio: {
    name: 'GRIO',
    category: 'Multimodal artificial intelligence',
    path: '/grio',
    logo: grioLogo,
    summary: 'Connect people and workflows to organisational knowledge through text, voice, images and documents.',
  },
  makerrr: {
    name: 'Makerrr',
    category: 'AI-native software engineering',
    path: '/makerrr',
    logo: makerrrLogo,
    summary: 'Plan, build, test and maintain software with repository-aware agents and developer-controlled tools.',
  },
  supppleverify: {
    name: 'SupppleVERIFY',
    category: 'Identity, AML and compliance',
    path: '/supppleverify',
    logo: null,
    summary: 'Integrate identity checks, screening, risk review and monitoring into customer workflows.',
  },
} as const;

export type ProductId = keyof typeof portfolio;

export const prediktPlatformPath = '/platforms';
