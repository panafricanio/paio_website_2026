import { Venue, HostOrganization } from '@/types';

export const venue: Venue = {
  name: 'Kigali Convention Centre',
  city: 'Kigali',
  country: 'Rwanda',
  description: 'The Kigali Convention Centre is a world-class facility and one of Africa\'s most iconic conference venues. Located in the heart of Kigali, it offers state-of-the-art infrastructure ideal for hosting international competitions and events.',
  address: 'KN 2 Ave, Kigali, Rwanda',
  imageUrl: 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
  name: 'Rwanda Information Society Authority (RISA)',
  description: 'RISA is the Rwandan government agency responsible for coordinating and driving the national ICT agenda. In partnership with the African Informatics Olympiad Committee, RISA is proud to host PAIO 2026 in Kigali.',
  website: 'https://risa.rw',
};
