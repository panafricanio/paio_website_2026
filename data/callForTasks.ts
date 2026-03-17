import { CallForTasks } from '@/types';

export const callForTasks: CallForTasks = {
  description: 'The PAIO 2026 Scientific Committee invites experienced problem setters and researchers to submit original algorithmic tasks for the competition. Tasks should be novel, well-defined, and suitable for secondary-school contestants with strong programming backgrounds.',
  deadline: 'March 1, 2026',
  guidelines: [
    'Tasks must be original and not used in any previous competition.',
    'Each submission must include a problem statement, solution, test data, and time/memory limits.',
    'Tasks should be solvable using C, C++, Java, or Python within the given constraints.',
    'Difficulty should range from accessible (for partial scoring) to challenging (for full marks).',
    'Topics may include algorithms, data structures, graph theory, dynamic programming, combinatorics, and computational geometry.',
    'Submissions are reviewed by the Scientific Committee. Selected authors will be credited and invited to the competition.',
  ],
  contactEmail: 'tasks@paio2026.org',
};
