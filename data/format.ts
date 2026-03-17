import { CompetitionFormat } from '@/types';

export const competitionFormat: CompetitionFormat = {
  rounds: [
    {
      id: 'round-1',
      name: 'Round 1',
      duration: '5 hours',
      description: 'Contestants tackle three algorithmic problems of increasing difficulty. Problems cover fundamental algorithms, data structures, and mathematical reasoning.',
      taskCount: 3,
    },
    {
      id: 'round-2',
      name: 'Round 2',
      duration: '5 hours',
      description: 'Three advanced problems testing optimization, graph theory, and dynamic programming. Solutions are evaluated on correctness and efficiency.',
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
      description: 'Each contestant is provided with a standardized workstation running Linux. No internet access or external resources are permitted during competition rounds.',
    },
    {
      id: 'rule-conduct',
      title: 'Code of Conduct',
      description: 'Contestants must work independently during competition rounds. Any form of communication with others or use of unauthorized materials results in disqualification.',
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
    'Each country may send a delegation of up to 4 contestants and 2 team leaders.',
    'Contestants must have participated in their national selection process.',
    'All participants must agree to the PAIO Code of Conduct.',
  ],
};
