'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { careerJourney } from '@/data/portfolio';
import { GraduationCap, Briefcase, Target, Award, TrendingUp, Code, BookOpen, Sparkles } from 'lucide-react';

const milestoneIcons = {
  'SSLC': { icon: GraduationCap, color: 'primary', desc: 'Foundation' },
  'HSC': { icon: GraduationCap, color: 'secondary-accent', desc: 'Pre-University' },
  'BE Computer Science': { icon: GraduationCap, color: 'success', desc: 'Engineering Degree' },
  'Quality Analyst Internship': { icon: Briefcase, color: 'warning', desc: 'Professional Experience' },
  'Building toward QA Engineer roles': { icon: Target, color: 'primary', desc: 'Current Focus' },
};

export function CareerJourney() {
  return (
    <Section id="journey" className="bg-primary-surface" padding="lg">
      <SectionHeader
        label="CAREER JOURNEY"
        title="Path to QA Engineering"
        description="Milestones that shaped my foundation and direction — each step building toward a quality-first mindset."
        align="center"
        divider
      />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-subtle-border -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          aria-hidden="true"
        />

        <div className="space-y-10 relative z-10">
          {careerJourney.map((milestone, index) => {
            const isLast = index === careerJourney.length - 1;
            const iconData = milestoneIcons[milestone.title as keyof typeof milestoneIcons] || { icon: Target, color: 'primary', desc: 'Milestone' };
            const Icon = iconData.icon;
            const color = iconData.color;

            return (
              <motion.article
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative ${index % 2 === 0 ? 'pr-20 lg:pr-0 lg:pl-20 text-right' : 'pl-20 lg:pl-0 lg:pr-20'}`}
              >
                <div className={`absolute lg:left-1/2 left-auto top-4 -translate-x-1/2 lg:-translate-x-1/2 w-10 h-10 rounded-full border-4 border-primary-surface flex items-center justify-center z-10 shadow-xl ${getColorClasses(color)}`}>
                  <Icon size={22} strokeWidth={2.5} className="text-white" aria-hidden="true" />
                </div>
                {!isLast && (
                  <motion.div
                    className="absolute lg:left-1/2 left-auto top-14 -translate-x-1/2 lg:-translate-x-1/2 w-0.5 h-[calc(100%-2rem)] bg-subtle-border"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    style={{ transformOrigin: 'top center' }}
                    aria-hidden="true"
                  />
                )}

                <Card variant="premium" hoverLift className="p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-soft to-transparent rounded-full blur-xl opacity-50" aria-hidden="true" />

                  <div className="flex items-center gap-3 mb-4 justify-end lg:justify-start relative z-10">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary-brand font-mono">
                      {milestone.year}
                    </span>
                    <Badge variant={color as 'primary' | 'secondary-accent' | 'success' | 'warning'} size="sm" icon={<Sparkles size={10} strokeWidth={2.5} />}>
                      {iconData.desc}
                    </Badge>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-primary-text mb-2 relative z-10">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed relative z-10">
                    {milestone.detail}
                  </p>

                  {index === careerJourney.length - 2 && (
                    <div className="mt-4 pt-4 border-t border-subtle-border relative z-10">
                      <p className="text-xs text-muted-text mb-2">Key Learnings</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" size="sm">SDLC/STLC Mastery</Badge>
                        <Badge variant="secondary" size="sm">Agile Workflows</Badge>
                        <Badge variant="secondary" size="sm">Defect Lifecycle</Badge>
                        <Badge variant="secondary" size="sm">Automation Basics</Badge>
                      </div>
                    </div>
                  )}

                  {isLast && (
                    <div className="mt-4 pt-4 border-t border-subtle-border relative z-10">
                      <p className="text-xs text-muted-text mb-2">Current Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="primary" size="sm" icon={<Code size={10} strokeWidth={2.5} />}>Playwright</Badge>
                        <Badge variant="secondary-accent" size="sm" icon={<TrendingUp size={10} strokeWidth={2.5} />}>Performance Testing</Badge>
                        <Badge variant="success" size="sm" icon={<BookOpen size={10} strokeWidth={2.5} />}>ISTQB</Badge>
                        <Badge variant="warning" size="sm" icon={<Award size={10} strokeWidth={2.5} />}>CI/CD</Badge>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.article>
            );
          })}
        </div>
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <JourneyMetric label="Years of Education" value="4" desc="BE Computer Science" icon={GraduationCap} />
          <JourneyMetric label="Months Internship" value="5" desc="SquashApps QA" icon={Briefcase} />
          <JourneyMetric label="Projects Completed" value="4" desc="Testing & Development" icon={Award} />
        </div>
      </motion.div>
    </Section>
  );
}

function getColorClasses(color: string) {
  const classes = {
    primary: 'bg-primary-brand',
    'secondary-accent': 'bg-secondary-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  };
  return classes[color as keyof typeof classes] || 'bg-primary-brand';
}

function JourneyMetric({ label, value, desc, icon: Icon }: { label: string; value: string | number; desc: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  return (
    <Card variant="premium" className="p-6 text-center">
      <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand w-fit mx-auto mb-4">
        <Icon size={24} strokeWidth={2} aria-hidden="true" />
      </div>
      <p className="text-3xl font-bold text-primary-text font-mono mb-1">{value}</p>
      <p className="text-sm font-semibold text-primary-text mb-1">{label}</p>
      <p className="text-xs text-muted-text">{desc}</p>
    </Card>
  );
}

