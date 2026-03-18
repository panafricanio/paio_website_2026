import { Venue, HostOrganization } from '@/types';

export const venue: Venue = {
  name: 'African Olympiad Academy (AOA)',
  city: 'Kigali',
  country: 'Rwanda',
  description: 'The African Olympiad Academy (AOA) is a dedicated training and event facility supporting Olympiad-level learning and competitions. Located in Kigali, it offers an inspiring environment and the infrastructure needed to host international academic events.',
  address: 'Kigali, Rwanda',
  imageUrl: '/aoa.png',
  coordinates: { lat: -1.9536, lng: 30.0606 },
  facilities: [
    'High-speed internet connectivity',
    'Individual workstations for all contestants',
    'Dedicated translation rooms for team leaders',
    'On-site catering and dining facilities',
    'Medical support and first aid',
    'Transportation to and from accommodation',
  ],
};

export const hostOrganization: HostOrganization = {
  name: 'Rwanda Olympiad Foundation',
  imageUrl: '/rof.png',
  description: 'The Rwanda Olympiad Foundation supports and promotes Olympiad participation and excellence in Rwanda. In partnership with the African Olympiad Academy, the Foundation is proud to host PAIO 2026 in Kigali.',
};
