import { Sponsor } from '@/types';

export const sponsors: Sponsor[] = [
  {
    id: 'african-union',
    name: 'African Union',
    tier: 'platinum',
    website: 'https://au.int',
  },
  {
    id: 'rwanda-ict',
    name: 'Rwanda ICT Chamber',
    tier: 'platinum',
    website: 'https://ictchamber.rw',
  },
  {
    id: 'google-africa',
    name: 'Google Africa',
    tier: 'gold',
    website: 'https://google.com',
  },
  {
    id: 'microsoft-africa',
    name: 'Microsoft Africa',
    tier: 'gold',
    website: 'https://microsoft.com',
  },
  {
    id: 'ioi',
    name: 'International Olympiad in Informatics',
    tier: 'gold',
    website: 'https://ioinformatics.org',
  },
  {
    id: 'carnegie-mellon-africa',
    name: 'Carnegie Mellon University Africa',
    tier: 'silver',
    website: 'https://www.africa.engineering.cmu.edu',
  },
  {
    id: 'andela',
    name: 'Andela',
    tier: 'silver',
    website: 'https://andela.com',
  },
  {
    id: 'african-dev-bank',
    name: 'African Development Bank',
    tier: 'silver',
    website: 'https://afdb.org',
  },
  {
    id: 'mtn-group',
    name: 'MTN Group',
    tier: 'bronze',
    website: 'https://mtn.com',
  },
  {
    id: 'safaricom',
    name: 'Safaricom',
    tier: 'bronze',
    website: 'https://safaricom.co.ke',
  },
];

export const sponsorTiers = [
  { key: 'platinum' as const, label: 'Platinum Partners' },
  { key: 'gold' as const, label: 'Gold Partners' },
  { key: 'silver' as const, label: 'Silver Partners' },
  { key: 'bronze' as const, label: 'Bronze Partners' },
];
