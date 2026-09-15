'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { qaWorkflowSteps } from '@/data/portfolio';
import { ArrowRight, CheckCircle, ChevronRight, Target, ClipboardList, FlaskConical, Search, Bug, RefreshCw, FileText, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const stepIcons = {
  1: Target,
  2: ClipboardList,
  3: Search,
  4: FlaskConical,
  5: Bug,
  6: RefreshCw,
  7: TrendingUp,
  8: FileText,
};

const stepColors = {
  1: 'primary',
  2: 'secondary-accent',
  3: 'success',
  4: 'warning',
  5: 'error',
  6: 'primary',
  7: 'secondary-accent',
  8: 'success',
};

const colorClasses = {
  primary: 'text-primary-brand',
  'secondary-accent': 'text-secondary-accent',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

function getStepColor(stepNumber: number): string {
  const color = stepColors[stepNumber as keyof typeof stepColors] || 'primary';
  return colorClasses[color as keyof typeof colorClasses] || 'text-primary-brand';
}

export function QAWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Section id="workflow" className="bg-background" padding="lg">
      <SectionHeader
        label="QA WORKFLOW"
        title="How I Think About Quality"
        description="A systematic eight-step process from requirements to closure — each step builds on the previous for comprehensive coverage."
        align="center"
        divider
      />

      <div className="relative">
        <motion.div
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-subtle-border -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          aria-hidden="true"
        />

        <div className="grid lg:grid-cols-4 gap-8 relative z-10">
          {qaWorkflowSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative lg:pl-0 pl-14"
            >
              <div className={cn('absolute left-6 top-0 w-12 h-12 rounded-full border-4 border-primary-surface flex items-center justify-center z-10 shadow-xl', activeStep === step.number && 'ring-4 ring-primary-brand/20')}>
                {(() => {
                  const Icon = stepIcons[step.number as keyof typeof stepIcons] || Target;
                  return <Icon size={22} strokeWidth={2.5} className={getStepColor(step.number)} aria-hidden="true" />;
                })()}
              </div>

              <Card
                variant="premium"
                hoverLift
                className="p-6 h-full transition-all duration-300"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary-brand/15 font-mono">
                    {step.number.toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-text">
                    {step.title}
                  </h3>
                </div>

                <p className="text-secondary-text text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5" role="list">
                  {step.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" size="sm" role="listitem">
                      {tool}
                    </Badge>
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
                  className="w-full flex items-center justify-between p-3 bg-tertiary-surface/50 border border-subtle-border rounded-[10px] text-left transition-all duration-200 hover:border-border hover:bg-tertiary-surface"
                  aria-expanded={activeStep === step.number}
                  aria-controls={`step-detail-${step.number}`}
                >
                  <span className="text-sm font-medium text-secondary-text">
                    {activeStep === step.number ? 'Hide Details' : 'View Details'}
                  </span>
                  <ChevronRight
                    size={16}
                    strokeWidth={2.5}
                    className={`text-muted-text transition-transform duration-200 ${activeStep === step.number ? 'rotate-90' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={`step-detail-${step.number}`}
                  className="mt-4 space-y-3"
                  initial={false}
                  animate={{ height: activeStep === step.number ? 'auto' : 0, opacity: activeStep === step.number ? 1 : 0, paddingTop: activeStep === step.number ? '4px' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  {getStepDetails(step.number).map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-primary-surface border border-subtle-border rounded-[10px]">
                      <CheckCircle size={16} className="flex-shrink-0 text-success mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                      <span className="text-sm text-secondary-text">{detail}</span>
                    </div>
                  ))}
                </motion.div>
              </Card>

              {index < qaWorkflowSteps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-28 w-8 h-0.5 bg-subtle-border"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  style={{ transformOrigin: 'left center' }}
                  aria-hidden="true"
                >
                  <ArrowRight
                    className="absolute right-0 top-[-6px] text-primary-brand"
                    size={14}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="lg:hidden space-y-4 mt-8">
          {qaWorkflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex items-start gap-4 p-5 bg-primary-surface border border-subtle-border rounded-[16px]">
                <div className={cn('flex-shrink-0 w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center', getStepColor(step.number))}>
                  {(() => {
                    const Icon = stepIcons[step.number as keyof typeof stepIcons] || Target;
                    return <Icon size={22} strokeWidth={2.5} aria-hidden="true" />;
                  })()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary-brand/15 font-mono">
                      {step.number.toString().padStart(2, '0')}
                    </span>
                    <h4 className="font-semibold text-primary-text">{step.title}</h4>
                  </div>
                  <p className="text-sm text-secondary-text mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" size="sm">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              {index < qaWorkflowSteps.length - 1 && (
                <div className="absolute left-5 top-[68px] bottom-[-4px] w-0.5 bg-subtle-border" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card variant="glass" className="p-8">
          <h4 className="text-lg font-semibold text-primary-text mb-6 text-center">Quality Principles I Follow</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <PrincipleCard title="Early Testing" desc="Shift left — test requirements before code exists" icon={<Target />} />
            <PrincipleCard title="Risk-Based" desc="Prioritize high-impact areas first" icon={<TrendingUp />} />
            <PrincipleCard title="Automation ROI" desc="Automate stable, repetitive, high-value tests" icon={<RefreshCw />} />
            <PrincipleCard title="Continuous Feedback" desc="Fast loops between dev, QA, and stakeholders" icon={<Users />} />
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

function getStepDetails(stepNumber: number): string[] {
  const details: Record<number, string[]> = {
    1: [
      'Analyze user stories and acceptance criteria',
      'Identify testable requirements and gaps',
      'Collaborate with PO and developers for clarity',
      'Define test scope and entry/exit criteria',
    ],
    2: [
      'Create test strategy and approach document',
      'Define resource allocation and timeline',
      'Identify risks and mitigation strategies',
      'Select tools and environments',
    ],
    3: [
      'Write positive, negative, and edge cases',
      'Ensure traceability to requirements',
      'Review test cases with stakeholders',
      'Maintain test case repository in TestRail/Jira',
    ],
    4: [
      'Execute test cases across environments',
      'Log results with screenshots/evidence',
      'Perform exploratory testing sessions',
      'Validate API responses and database states',
    ],
    5: [
      'Document bugs with clear reproduction steps',
      'Classify severity and priority accurately',
      'Attach logs, screenshots, and videos',
      'Communicate blockers immediately',
    ],
    6: [
      'Verify fixes against original test cases',
      'Perform regression around fixed areas',
      'Update test status and documentation',
      'Close verified defects',
    ],
    7: [
      'Maintain automated regression suite',
      'Run regression on every release candidate',
      'Update scripts for UI/flow changes',
      'Report regression metrics',
    ],
    8: [
      'Prepare test summary report',
      'Analyze defect trends and metrics',
      'Conduct retrospective and lessons learned',
      'Sign off on release readiness',
    ],
  };
  return details[stepNumber] || [];
}

function PrincipleCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactElement }) {
  return (
    <div className="p-4 bg-primary-surface/50 border border-subtle-border rounded-[12px] text-center">
      <div className="text-primary-brand mb-3">{icon}</div>
      <h5 className="font-semibold text-primary-text mb-1">{title}</h5>
      <p className="text-xs text-secondary-text">{desc}</p>
    </div>
  );
}

