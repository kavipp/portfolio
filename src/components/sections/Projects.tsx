'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { projects } from '@/data/portfolio';
import { ExternalLink, CheckCircle, Code, Database, Bug, Zap, Globe, ArrowRight, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <Section id="projects" className="bg-primary-surface" padding="lg">
      <SectionHeader
        label="PROJECTS"
        title="Testing Case Studies & Development Projects"
        description="Each project demonstrates practical testing methodology, technical implementation, and measurable outcomes."
        align="center"
        divider
      />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              index={index}
              isExpanded={expandedProject === project.number}
              onToggle={() => setExpandedProject(expandedProject === project.number ? null : project.number)}
            />
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-secondary-text mb-6">Want to see more details or collaborate on a testing project?</p>
        <Button variant="outline" size="lg" href="mailto:kavippranesh.l@example.com" icon={<ArrowRight size={18} strokeWidth={2.5} />}>
          Get In Touch
        </Button>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project, index, isExpanded, onToggle }: { project: typeof projects[0]; index: number; isExpanded: boolean; onToggle: () => void }) {
  const isEven = index % 2 === 0;

  const metrics = [
    { label: 'Test Cases', value: project.number === '01' ? '150+' : project.number === '03' ? '25+' : project.number === '04' ? '20+' : 'N/A', icon: <Code size={20} /> },
    { label: 'Defects Found', value: project.number === '01' ? '40+' : 'N/A', icon: <Bug size={20} className="text-warning" /> },
    { label: 'Automated', value: project.type.includes('Automation') ? 'Yes' : 'Partial', icon: <Zap size={20} className="text-primary-brand" /> },
    { label: 'Coverage', value: 'Core Flows', icon: <Globe size={20} className="text-secondary-accent" /> },
  ];

  return (
    <Card variant="premium" hoverLift className="overflow-hidden relative">
      <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:[grid-template-areas:_\"image_content\"]'}`}>
        <div className="relative min-h-[360px] bg-tertiary-surface flex items-center justify-center p-8 lg:p-12" style={{ gridArea: isEven ? 'image' : 'content' }}>
          <ProjectVisual project={project} metrics={metrics} />
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ gridArea: isEven ? 'content' : 'image' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl font-bold text-primary-brand/15 font-mono">
              {project.number}
            </span>
            <Badge variant="primary" size="md">{project.type}</Badge>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
            {project.title}
          </h3>

          <p className="text-secondary-text leading-relaxed mb-6 text-bodyLarge">
            {project.summary}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <ProjectDetail label="Role" value={project.role} icon={<Code size={16} strokeWidth={2} />} />
            <ProjectDetail label="Tools" value={project.tools.join(', ')} icon={<Database size={16} strokeWidth={2} />} />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">Testing Scope</p>
              <button
                onClick={onToggle}
                className="flex items-center gap-1.5 text-sm font-medium text-primary-brand hover:underline transition-colors"
                aria-expanded={isExpanded}
                aria-controls={`scope-${project.number}`}
              >
                {isExpanded ? <ChevronUp size={16} strokeWidth={2.5} /> : <ChevronDown size={16} strokeWidth={2.5} />}
                <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
              </button>
            </div>
            <motion.div
              id={`scope-${project.number}`}
              className="space-y-2"
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="space-y-2" role="list">
                {project.testingScope.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-secondary-text">
                    <CheckCircle size={14} className="text-success flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <ProjectHighlight label="Challenge" value={project.challenges} icon={<Bug size={14} strokeWidth={2} className="text-warning" />} />
            <ProjectHighlight label="Approach" value={project.approach} icon={<Zap size={14} strokeWidth={2} className="text-primary-brand" />} />
            <ProjectHighlight label="Outcome" value={project.outcome} icon={<CheckCircle size={14} strokeWidth={2} className="text-success" />} />
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-subtle-border">
            {project.github && (
              <Button variant="secondary" size="sm" href={project.github} target="_blank" rel="noopener noreferrer" icon={<GithubIcon size={16} strokeWidth={2} />}>
                View Code
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="primary" size="sm" href={project.liveDemo} target="_blank" rel="noopener noreferrer" icon={<ExternalLink size={16} strokeWidth={2} />}>
                Live Demo
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={onToggle} icon={<Eye size={16} strokeWidth={2} />} iconPosition="left">
              {isExpanded ? 'Less Details' : 'More Details'}
            </Button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 p-8 lg:p-12 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={onToggle}
            className="absolute top-6 right-6 p-2 bg-primary-surface border border-border rounded-full hover:bg-secondary-surface transition-colors"
            aria-label="Close expanded view"
          >
            <svg width={20} height={20} strokeWidth={2.5} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="flex-1 overflow-y-auto space-y-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-text mb-4">Full Testing Scope</h4>
              <ul className="space-y-3" role="list">
                {project.testingScope.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-primary-surface border border-subtle-border rounded-[12px]">
                    <CheckCircle size={18} className="text-success flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-secondary-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <DetailCard title="Challenge" content={project.challenges} icon={<Bug size={20} className="text-warning" />} />
              <DetailCard title="Approach" content={project.approach} icon={<Zap size={20} className="text-primary-brand" />} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <DetailCard title="Outcome" content={project.outcome} icon={<CheckCircle size={20} className="text-success" />} />
              <DetailCard title="Tools Used" content={project.tools.join(', ')} icon={<Database size={20} className="text-secondary-accent" />} />
            </div>
          </div>
          <div className="pt-6 border-t border-subtle-border flex flex-wrap gap-3">
            {project.github && (
              <Button variant="secondary" href={project.github} target="_blank" rel="noopener noreferrer" icon={<GithubIcon size={16} strokeWidth={2} />}>
                View Repository
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer" icon={<ExternalLink size={16} strokeWidth={2} />}>
                Live Demo
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </Card>
  );
}

function ProjectVisual({ project, metrics }: { project: typeof projects[0]; metrics: { label: string; value: string; icon: React.ReactNode }[] }) {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="bg-primary-surface border border-subtle-border rounded-[16px] p-6 shadow-xl">
        <div className="flex items-center gap-2 text-xs text-muted-text mb-5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
          </div>
          <span className="font-mono ml-3">{project.title.toLowerCase().replace(/\s+/g, '-')}.spec.ts</span>
        </div>
        <div className="space-y-3 font-mono text-sm">
          {project.testingScope.slice(0, 6).map((scope, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-tertiary-surface rounded-[10px] hover:bg-secondary-surface transition-colors">
              <CheckCircle size={16} className="text-success flex-shrink-0" strokeWidth={2.5} />
              <span className="text-secondary-text truncate">{scope}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-primary-surface border border-subtle-border rounded-[16px] p-5 text-center hover:border-border hover:shadow-medium transition-all duration-300">
            <div className="text-primary-brand mb-3">{metric.icon}</div>
            <p className="text-2xl font-bold text-primary-text font-mono">{metric.value}</p>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-text">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-tertiary-surface/50 border border-subtle-border rounded-[12px]">
      <div className="flex-shrink-0 text-primary-brand mt-0.5">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">{label}</p>
        <p className="text-sm text-primary-text truncate">{value}</p>
      </div>
    </div>
  );
}

function ProjectHighlight({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-tertiary-surface/50 border border-subtle-border rounded-[12px]">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">{label}</p>
        <p className="text-sm text-secondary-text leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function DetailCard({ title, content, icon }: { title: string; content: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 bg-primary-surface border border-subtle-border rounded-[16px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand">
          {icon}
        </div>
        <h5 className="text-sm font-semibold uppercase tracking-wider text-primary-text">{title}</h5>
      </div>
      <p className="text-secondary-text leading-relaxed">{content}</p>
    </div>
  );
}

