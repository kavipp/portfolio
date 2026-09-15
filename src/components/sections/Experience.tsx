'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card } from '@/components/ui';
import { experience } from '@/data/portfolio';
import { Building2, MapPin, CheckCircle, ChevronRight, Award, Code, Database, Zap, Users, Clock } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" className="bg-background" padding="lg">
      <SectionHeader
        label="EXPERIENCE"
        title="Professional Journey"
        description="Hands-on QA experience in a collaborative product development environment with measurable outcomes."
        align="center"
        divider
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-subtle-border"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-16"
            >
              <div className="absolute left-6 top-2 w-10 h-10 rounded-full bg-primary-surface border-2 border-primary-brand flex items-center justify-center z-10 shadow-xl">
                <Building2 size={20} strokeWidth={2.5} className="text-primary-brand" aria-hidden="true" />
              </div>
              <div className="absolute left-10.5 top-12 h-full w-0.5 bg-subtle-border" aria-hidden="true" />

              <Card variant="premium" hoverLift className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-soft to-transparent rounded-full blur-2xl opacity-50" aria-hidden="true" />

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="flex-shrink-0 p-3 bg-primary-soft rounded-[12px] text-primary-brand">
                    <Building2 size={22} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-brand bg-primary-soft rounded-full">
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-text">
                        <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary-brand font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-text mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center">
                        <Code size={12} strokeWidth={2.5} className="text-primary-brand" aria-hidden="true" />
                      </span>
                      Context
                    </h4>
                    <p className="text-secondary-text leading-relaxed text-bodyLarge">
                      {exp.context}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-text mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center">
                        <CheckCircle size={12} strokeWidth={2.5} className="text-primary-brand" aria-hidden="true" />
                      </span>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3" role="list">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          className="flex items-start gap-3 text-secondary-text leading-relaxed text-bodyLarge group"
                        >
                          <CheckCircle size={20} className="flex-shrink-0 text-success mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={2.5} aria-hidden="true" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-text mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center">
                        <Database size={12} strokeWidth={2.5} className="text-primary-brand" aria-hidden="true" />
                      </span>
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2.5" role="list">
                      {exp.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + toolIndex * 0.04 }}
                        >
                          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary-soft text-primary-brand">{tool}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-text mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center">
                        <Award size={12} strokeWidth={2.5} className="text-primary-brand" aria-hidden="true" />
                      </span>
                      Measurable Outcomes
                    </h4>
                    <ul className="space-y-3" role="list">
                      {exp.outcomes.map((outcome, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 p-4 bg-tertiary-surface/50 border border-subtle-border rounded-[12px] group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success-soft flex items-center justify-center">
                            <ChevronRight size={16} className="text-success" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <p className="text-secondary-text leading-relaxed text-bodyLarge">{outcome}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-subtle-border">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <ImpactMetric icon={Clock} label="Duration" value="5 Months" desc="Apr–Aug 2025" />
                        <ImpactMetric icon={Users} label="Team Size" value="8+" desc="QA & Dev Collaboration" />
                        <ImpactMetric icon={Zap} label="Automation" value="25+ Scripts" desc="Regression Coverage" />
                      </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card variant="glass" className="p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Award size={24} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
            <h4 className="text-lg font-semibold text-primary-text">Key Takeaway</h4>
          </div>
          <p className="text-secondary-text leading-relaxed">
            This internship solidified my foundation in end-to-end QA processes — from requirement analysis to regression automation.
            I learned that effective testing isn't just about finding bugs; it's about preventing them through early collaboration,
            clear documentation, and systematic risk-based approaches.
          </p>
        </Card>
      </motion.div>
    </Section>
  );
}

function ImpactMetric({ icon: Icon, label, value, desc }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string; value: string; desc: string }) {
  return (
    <div className="p-4 bg-primary-surface border border-subtle-border rounded-[12px] text-center">
      <div className="text-primary-brand mb-2"><Icon size={20} strokeWidth={2} aria-hidden="true" /></div>
      <p className="text-xl font-bold text-primary-text font-mono">{value}</p>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-text mb-1">{label}</p>
      <p className="text-[11px] text-muted-text">{desc}</p>
    </div>
  );
}

