import { CompetitionFormat } from '@/types';

export const competitionFormat: CompetitionFormat = {
  days: [
    {
      id: 'day-1',
      name: 'Day 1',
      date: 'July 25',
      duration: '5 hours',
      description: 'Contestants tackle three algorithmic problems testing their knowledge of data structures and algorithms. Problems cover fundamental techniques and mathematical reasoning with increasing difficulty.',
      taskCount: 3,
    },
    {
      id: 'day-2',
      name: 'Day 2',
      date: 'July 27',
      duration: '5 hours',
      description: 'Contestants tackle three algorithmic problems testing their knowledge of data structures and algorithms. Problems cover advanced techniques including optimization, graph theory, and dynamic programming.',
      taskCount: 3,
    },
  ],
  rules: [
    {
      id: 'rule-language',
      title: 'Programming Languages',
      description: 'Contestants may use C, C++, Java, or Python. Solutions must compile and run within the specified time and memory limits.',
    },
    {
      id: 'rule-scoring',
      title: 'Scoring System',
      description: 'Each task is worth 100 points. Partial scoring is awarded based on the number of test cases passed. The total maximum score is 600 points.',
    },
    {
      id: 'rule-environment',
      title: 'Competition Environment',
      description: 'Each contestant is provided with a standardized workstation running Linux. No internet access or external resources are permitted during competition days.',
    },
    {
      id: 'rule-conduct',
      title: 'Code of Conduct',
      description: 'Contestants must work independently during competition days. Any form of communication with others or use of unauthorized materials results in disqualification.',
    },
    {
      id: 'rule-appeals',
      title: 'Appeals Process',
      description: 'Team leaders may submit appeals within two hours of results publication. The scientific committee reviews all appeals and their decisions are final.',
    },
  ],
  eligibility: [
    'Contestants must be citizens or permanent residents of an African nation.',
    'Contestants must be enrolled in secondary education or younger (under 20 years old on the day of the competition).',
    'Each country may send a delegation of up to 6 contestants (3 boys and 3 girls) and 2 team leaders.',
    'Contestants must have participated in their national selection process.',
    'All participants must agree to the PAIO Code of Conduct.',
  ],
};
