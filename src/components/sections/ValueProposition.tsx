'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { valuePropositions } from '@/data/portfolio';
import { Target, CheckCircle, Code, Database, Users, BookOpen, Zap, Shield, RefreshCw, TrendingUp } from 'lucide-react';

const iconMap = {
  '01': { icon: Target, color: 'primary' },
  '02': { icon: CheckCircle, color: 'success' },
  '03': { icon: Code, color: 'secondary-accent' },
  '04': { icon: Database, color: 'warning' },
  '05': { icon: Users, color: 'error' },
  '06': { icon: BookOpen, color: 'primary' },
};


export function ValueProposition() {
  return (
    <Section id="value" className="bg-primary-surface" padding="lg">
      <SectionHeader
        label="WHAT I BRING"
        title="Six Pillars of My Testing Approach"
        description="Core competencies that define how I deliver quality — each backed by hands-on project experience."
        align="center"
        divider
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuePropositions.map((item, index) => {
          const { icon: Icon, color } = iconMap[item.number as keyof typeof iconMap] || { icon: Target, color: 'primary' };
          const colorClasses = {
            primary: 'text-primary-brand bg-primary-soft',
            'secondary-accent': 'text-secondary-accent bg-accent-soft',
            success: 'text-success bg-success-soft',
            warning: 'text-warning bg-warning-soft',
            error: 'text-error bg-error-soft',
          };
          const cls = colorClasses[color as keyof typeof colorClasses];

          return (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card variant="premium" hoverLift className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`flex-shrink-0 p-4 rounded-[14px] ${cls}`}>
                    <Icon size={26} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary-brand">
                      {item.number}
                    </span>
                    <h3 className="text-lg font-semibold text-primary-text mt-1 mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-secondary-text text-sm leading-relaxed flex-1 mb-5">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-subtle-border flex items-center gap-2">
                  <Badge variant={color as 'primary' | 'success' | 'secondary-accent' | 'warning' | 'error'} size="sm" icon={<CheckCircle size={10} strokeWidth={2.5} />}>
                    Verified in Practice
                  </Badge>
                </div>
              </Card>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="mt-16 p-8 bg-background border border-subtle-border rounded-[24px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h4 className="text-lg font-semibold text-primary-text mb-6 text-center flex items-center justify-center gap-2">
          <Shield size={20} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
          Quality Principles in Action
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PrincipleCard title="Shift Left" desc="Test early, test often" icon={<Target />} color="primary" />
          <PrincipleCard title="Risk-Based" desc="Prioritize what matters" icon={<TrendingUp />} color="secondary-accent" />
          <PrincipleCard title="Automation ROI" desc="Automate stable, repetitive tests" icon={<RefreshCw />} color="success" />
          <PrincipleCard title="Fast Feedback" desc="Close the loop quickly" icon={<Zap />} color="warning" />
        </div>
      </motion.div>
    </Section>
  );
}

function PrincipleCard({ title, desc, icon: Icon, color }: { title: string; desc: string; icon: React.ReactElement; color: 'primary' | 'secondary-accent' | 'success' | 'warning' }) {
  const colorClasses = {
    primary: 'text-primary-brand bg-primary-soft',
    'secondary-accent': 'text-secondary-accent bg-accent-soft',
    success: 'text-success bg-success-soft',
    warning: 'text-warning bg-warning-soft',
  };
  const cls = colorClasses[color];

  return (
    <Card variant="small" className="p-5 text-center h-full">
      <div className={`p-3 rounded-[12px] ${cls} w-fit mx-auto mb-4`}>
        {Icon}
      </div>
      <h5 className="font-semibold text-primary-text mb-1">{title}</h5>
      <p className="text-xs text-secondary-text">{desc}</p>
    </Card>
  );
}

