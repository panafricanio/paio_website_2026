// Type definitions for PAIO 2026 website

export interface NavItem {
  label: string;
  href: string;
}

export interface CompetitionCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
  details?: string[];
}
