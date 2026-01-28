import { LucideIcon } from 'lucide-react';

export interface AgendaItem {
  id: number;
  title: string;
  description: string[];
}

export interface AudienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  boldText: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Organizer {
  name: string;
  role: string;
  subRole: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}