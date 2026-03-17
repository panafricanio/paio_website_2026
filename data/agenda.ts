import { AgendaDay } from '@/types';

export const agendaDays: AgendaDay[] = [
  {
    id: 'day-0',
    date: 'August 2, 2026',
    label: 'Day 0 - Arrival',
    events: [
      { time: '09:00 - 18:00', title: 'Arrival & Check-in', description: 'Delegates arrive and check in at the venue.', type: 'social' },
      { time: '15:00 - 17:00', title: 'Technical Environment Setup', description: 'Contestants verify their workstations and competition environment.', type: 'workshop' },
      { time: '19:00 - 21:00', title: 'Welcome Dinner', description: 'Informal welcome dinner for all participants and team leaders.', type: 'social' },
    ],
  },
  {
    id: 'day-1',
    date: 'August 3, 2026',
    label: 'Day 1 - Opening',
    events: [
      { time: '09:00 - 10:30', title: 'Opening Ceremony', description: 'Official opening with keynote speakers and the parade of nations.', type: 'ceremony' },
      { time: '11:00 - 12:00', title: 'Practice Session', description: 'Familiarization contest to test the judging system.', type: 'competition' },
      { time: '12:00 - 13:30', title: 'Lunch Break', type: 'break' },
      { time: '14:00 - 16:00', title: 'Excursion & Team Building', description: 'Guided tour and team-building activities in Kigali.', type: 'social' },
      { time: '19:00 - 21:00', title: 'Cultural Evening', description: 'Showcasing African culture through performances and exhibitions.', type: 'social' },
    ],
  },
  {
    id: 'day-2',
    date: 'August 4, 2026',
    label: 'Day 2 - Competition Round 1',
    events: [
      { time: '08:00 - 08:30', title: 'Contestant Briefing', description: 'Final instructions and seating assignments.', type: 'ceremony' },
      { time: '09:00 - 14:00', title: 'Competition Round 1', description: 'Five hours to solve three algorithmic tasks.', type: 'competition' },
      { time: '14:00 - 15:30', title: 'Lunch Break', type: 'break' },
      { time: '16:00 - 18:00', title: 'Translation & Review', description: 'Team leaders review and translate tasks for the next round.', type: 'workshop' },
      { time: '19:00 - 21:00', title: 'Dinner & Recreation', type: 'social' },
    ],
  },
  {
    id: 'day-3',
    date: 'August 5, 2026',
    label: 'Day 3 - Excursion',
    events: [
      { time: '08:00 - 08:30', title: 'Breakfast', type: 'break' },
      { time: '09:00 - 12:30', title: 'City Tour', description: 'Guided sightseeing tour of Kigali including the Kigali Genocide Memorial and cultural landmarks.', type: 'social' },
      { time: '12:30 - 14:00', title: 'Lunch Break', type: 'break' },
      { time: '14:00 - 17:00', title: 'Science & Innovation Workshop', description: 'Hands-on workshop exploring technology and innovation in Africa.', type: 'workshop' },
      { time: '19:00 - 21:00', title: 'International Food Festival', description: 'Delegates share cuisine from their home countries.', type: 'social' },
    ],
  },
  {
    id: 'day-4',
    date: 'August 6, 2026',
    label: 'Day 4 - Competition Round 2',
    events: [
      { time: '08:00 - 08:30', title: 'Contestant Briefing', type: 'ceremony' },
      { time: '09:00 - 14:00', title: 'Competition Round 2', description: 'Five hours to solve three algorithmic tasks.', type: 'competition' },
      { time: '14:00 - 15:30', title: 'Lunch Break', type: 'break' },
      { time: '16:00 - 18:00', title: 'Analysis Session', description: 'Solution presentations and discussion of competition tasks.', type: 'workshop' },
      { time: '19:00 - 21:00', title: 'Dinner & Recreation', type: 'social' },
    ],
  },
  {
    id: 'day-5',
    date: 'August 7, 2026',
    label: 'Day 5 - Closing',
    events: [
      { time: '09:00 - 11:00', title: 'Closing & Awards Ceremony', description: 'Medal presentations, special awards, and official closing.', type: 'ceremony' },
      { time: '11:30 - 13:00', title: 'Farewell Lunch', type: 'social' },
      { time: '14:00 - 17:00', title: 'Free Time & Networking', description: 'Open time for delegates to connect and explore.', type: 'social' },
      { time: '19:00 - 21:00', title: 'Farewell Gala Dinner', description: 'Formal celebration dinner with all participants and organizers.', type: 'social' },
    ],
  },
  {
    id: 'day-6',
    date: 'August 8, 2026',
    label: 'Day 6 - Departure',
    events: [
      { time: '07:00 - 09:00', title: 'Breakfast', type: 'break' },
      { time: '09:00 - 12:00', title: 'Check-out & Departures', description: 'Delegates check out and depart from the venue.', type: 'social' },
      { time: '09:00 - 12:00', title: 'Airport Transfers', description: 'Organized shuttle service to Kigali International Airport.', type: 'social' },
    ],
  },
];
