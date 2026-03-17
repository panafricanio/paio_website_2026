import { RegistrationInfo } from '@/types';

export const registrationInfo: RegistrationInfo = {
  description: 'National Informatics Olympiad committees are invited to register their delegations for PAIO 2026. Each participating country may send a delegation consisting of contestants and team leaders.',
  deadline: 'April 30, 2026',
  teamSize: { min: 1, max: 4 },
  requirements: [
    'Official registration must be submitted by the national Informatics Olympiad committee.',
    'Each delegation may include up to 4 contestants and 2 team leaders.',
    'Contestants must be under 20 years of age and enrolled in secondary education.',
    'A valid passport is required for all delegates.',
    'Delegations must confirm participation and submit contestant details by the registration deadline.',
    'Accommodation and local transport will be arranged by the organizing committee upon registration.',
  ],
  contactEmail: 'registration@paio2026.org',
};
