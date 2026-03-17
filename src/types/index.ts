export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface AgendaDay {
  id: string;
  date: string;
  label: string;
  events: AgendaEvent[];
}

export interface AgendaEvent {
  time: string;
  title: string;
  description?: string;
  type: 'ceremony' | 'competition' | 'break' | 'social' | 'workshop';
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logoUrl?: string;
  website?: string;
}

export interface FormatRule {
  id: string;
  title: string;
  description: string;
}

export interface CompetitionFormat {
  rounds: FormatRound[];
  rules: FormatRule[];
  eligibility: string[];
}

export interface FormatRound {
  id: string;
  name: string;
  duration: string;
  description: string;
  taskCount: number;
}

export interface Venue {
  name: string;
  city: string;
  country: string;
  description: string;
  address: string;
  imageUrl?: string;
  coordinates?: { lat: number; lng: number };
  facilities: string[];
}

export interface HostOrganization {
  name: string;
  description: string;
  website?: string;
  logoUrl?: string;
}

export interface CallForTasks {
  description: string;
  deadline: string;
  guidelines: string[];
  submissionUrl?: string;
  contactEmail: string;
}

export interface RegistrationInfo {
  description: string;
  deadline: string;
  teamSize: { min: number; max: number };
  requirements: string[];
  registrationUrl?: string;
  contactEmail: string;
}
