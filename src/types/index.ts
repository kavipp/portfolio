export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  portfolioYear: number;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface AboutContent {
  sectionLabel: string;
  heading: string;
  narrative: string;
  bentoCards: BentoCard[];
}

export interface BentoCard {
  title: string;
  subtitle: string;
  detail: string;
  icon: string;
}

export interface ValueProposition {
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  context: string;
  responsibilities: string[];
  tools: string[];
  outcomes: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface QAWorkflowStep {
  number: number;
  title: string;
  description: string;
  tools: string[];
}

export interface Project {
  number: string;
  title: string;
  type: string;
  summary: string;
  role: string;
  testingScope: string[];
  tools: string[];
  challenges: string;
  approach: string;
  outcome: string;
  github: string;
  liveDemo: string | null;
  image: string | null;
}

export interface Certification {
  name: string;
  platform: string;
  skill: string;
  date: string;
  verificationUrl: string | null;
}

export interface CareerJourneyItem {
  year: string;
  title: string;
  detail: string;
}

export interface RecruiterSnapshot {
  role: string;
  education: string;
  experience: string;
  core: string;
  tools: string;
  location: string;
}

export interface ToolsEcosystem {
  testing: string[];
  programming: string[];
  data: string[];
  workflow: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  heading: string;
  subtext: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}