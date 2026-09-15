'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { aboutContent } from '@/data/portfolio';
import { GraduationCap, ShieldCheck, Search, Settings, Target, Users, BookOpen, Zap } from 'lucide-react';

const iconMap = {
  'graduation-cap': GraduationCap,
  'shield-check': ShieldCheck,
  'magnifying-glass': Search,
  'gear': Settings,
};

export function About() {
  return (
    <Section id="about" className="bg-background" padding="lg">
      <SectionHeader
        label={aboutContent.sectionLabel}
        title={aboutContent.heading}
        description={aboutContent.narrative}
        align="center"
        divider
      />

<div className="grid lg:grid-cols-3 gap-8 min-h-[600px] lg:min-h-[700px]">
        <motion.div
          className="lg:col-span-2 space-y-6 h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            <p className="text-bodyLarge text-secondary-text leading-relaxed">
              With a Computer Science background and a focused interest in software quality, I approach testing as a disciplined craft. My internship at SquashApps gave me hands-on exposure to real-world QA workflows — from writing test cases and executing regression suites to automating browser tests with Selenium and validating APIs with Postman.
            </p>
            <p className="text-bodyLarge text-secondary-text leading-relaxed">
              I enjoy the systematic side of QA: understanding requirements, designing edge-case scenarios, tracking defects through their lifecycle, and collaborating with developers to resolve them. I'm comfortable with SDLC and STLC processes, Agile ceremonies, and tools like Jira and GitHub.
            </p>
            <p className="text-bodyLarge text-secondary-text leading-relaxed">
              Currently, I'm deepening my automation skills and building stronger test frameworks. My goal is to join a team where I can contribute to reliable software delivery while growing into a competent QA Engineer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Badge variant="primary" icon={<Target size={12} strokeWidth={2.5} />} size="md">Detail-Oriented</Badge>
            <Badge variant="secondary" icon={<Users size={12} strokeWidth={2.5} />} size="md">Collaborative</Badge>
            <Badge variant="success" icon={<BookOpen size={12} strokeWidth={2.5} />} size="md">Continuous Learning</Badge>
            <Badge variant="warning" icon={<Zap size={12} strokeWidth={2.5} />} size="md">Automation-First</Badge>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-subtle-border">
            <MetricHighlight
              number="150+"
              label="Test Cases Designed"
              desc="Across functional, regression, and edge-case scenarios"
            />
            <MetricHighlight
              number="40+"
              label="Defects Identified"
              desc="Including critical payment flow issues"
            />
            <MetricHighlight
              number="25+"
              label="Automation Scripts"
              desc="Selenium WebDriver with Page Object Model"
            />
            <MetricHighlight
              number="5"
              label="Months Experience"
              desc="Quality Analyst Intern at SquashApps"
            />
          </div>
        </motion.div>

<motion.div
          className="space-y-4 h-full flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
{aboutContent.bentoCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || GraduationCap;
            return (
              <Card
                key={card.title}
                variant="premium"
                hoverLift
                className="p-6 flex flex-col h-full min-h-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 flex-1 min-h-0">
                  <div className="flex-shrink-0 p-3 bg-primary-soft rounded-[12px] text-primary-brand">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-primary-text mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm font-medium text-primary-brand mb-0.5">
                        {card.subtitle}
                      </p>
                      <p className="text-sm text-secondary-text">
                        {card.detail}
                      </p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-subtle-border flex items-center gap-2 text-xs text-muted-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-brand" aria-hidden="true" />
                  <span>Core Focus Area</span>
                </div>
              </Card>
            );
          })}

<Card variant="glass" className="p-6 flex-1 min-h-0">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-accent-soft rounded-[12px] text-secondary-accent">
                <Target size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-text mb-2">What I'm Seeking</h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  A QA Engineer role where I can apply structured testing methodologies, grow automation expertise, and contribute to a quality-first culture. Open to mentorship and challenging projects.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function MetricHighlight({ number, label, desc }: { number: string; label: string; desc: string }) {
  return (
    <div className="p-4 bg-primary-surface border border-subtle-border rounded-[16px] hover:border-border hover:shadow-medium transition-all duration-300">
      <p className="text-2xl font-bold text-primary-text font-mono mb-1">{number}</p>
      <p className="text-sm font-semibold text-primary-text">{label}</p>
      <p className="text-xs text-muted-text mt-1">{desc}</p>
    </div>
  );
}

