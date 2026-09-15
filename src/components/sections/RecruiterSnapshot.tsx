'use client';

import { motion } from 'framer-motion';
import { Section, Button, Card, Badge, Tag, LinkedinIcon, GithubIcon } from '@/components/ui';
import { recruiterSnapshot } from '@/data/portfolio';
import { Briefcase, GraduationCap, Code, Wrench, MapPin, Download, Target, CheckCircle, Shield, Database, Users, RefreshCw, ClipboardList, Mail } from 'lucide-react';

const coreSkills = [
  { name: 'Manual Testing', level: 'Expert', icon: Shield },
  { name: 'Functional Testing', level: 'Expert', icon: CheckCircle },
  { name: 'Regression Testing', level: 'Advanced', icon: RefreshCw },
  { name: 'Test Case Design', level: 'Advanced', icon: ClipboardList },
  { name: 'Selenium WebDriver', level: 'Proficient', icon: Code },
  { name: 'Java', level: 'Proficient', icon: Code },
  { name: 'API Testing (Postman)', level: 'Advanced', icon: Database },
  { name: 'SQL / MySQL', level: 'Advanced', icon: Database },
  { name: 'Jira', level: 'Advanced', icon: Users },
  { name: 'Agile/Scrum', level: 'Advanced', icon: Users },
  { name: 'Maven', level: 'Proficient', icon: Wrench },
  { name: 'GitHub', level: 'Advanced', icon: GithubIcon },
];

const tools = [
  { name: 'Selenium', category: 'Automation', proficiency: 'Proficient' },
  { name: 'Postman', category: 'API Testing', proficiency: 'Advanced' },
  { name: 'Jira', category: 'Tracking', proficiency: 'Advanced' },
  { name: 'Java', category: 'Programming', proficiency: 'Proficient' },
  { name: 'JavaScript', category: 'Programming', proficiency: 'Learning' },
  { name: 'SQL', category: 'Data', proficiency: 'Advanced' },
  { name: 'MySQL', category: 'Data', proficiency: 'Advanced' },
  { name: 'Maven', category: 'Build', proficiency: 'Proficient' },
  { name: 'GitHub', category: 'Version Control', proficiency: 'Advanced' },
  { name: 'VS Code', category: 'IDE', proficiency: 'Expert' },
  { name: 'TestNG', category: 'Testing Framework', proficiency: 'Proficient' },
  { name: 'Extent Reports', category: 'Reporting', proficiency: 'Proficient' },
];

export function RecruiterSnapshot() {
  return (
    <Section id="recruiter" className="bg-background" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-primary-surface border border-border rounded-[24px] p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-brand mb-2 block">
                Recruiter Snapshot
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text">
                15-Second Profile Overview
              </h3>
              <p className="text-secondary-text mt-1 text-sm">ATS-friendly keywords highlighted • Scannable format</p>
            </div>
            <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand">
              <Target size={26} strokeWidth={2} aria-hidden="true" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SnapshotCard
              icon={GraduationCap}
              label="Education"
              value={recruiterSnapshot.education}
              iconBg="primary"
            />
            <SnapshotCard
              icon={Briefcase}
              label="Experience"
              value={recruiterSnapshot.experience}
              iconBg="secondary-accent"
            />
            <SnapshotCard
              icon={MapPin}
              label="Location"
              value={recruiterSnapshot.location}
              iconBg="success"
            />
            <SnapshotCard
              icon={Code}
              label="Core Skills"
              value={recruiterSnapshot.core}
              iconBg="warning"
            />
            <SnapshotCard
              icon={Wrench}
              label="Tools"
              value={recruiterSnapshot.tools}
              iconBg="primary"
            />
            <SnapshotCard
              icon={Briefcase}
              label="Target Role"
              value={recruiterSnapshot.role}
              iconBg="error"
            />
          </div>

          <div className="space-y-8 mb-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary-text flex items-center gap-2">
                  <Code size={20} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
                  Technical Keywords (ATS Optimized)
                </h4>
              </div>
              <div className="flex flex-wrap gap-2" role="list">
                {coreSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                    className="group"
                    role="listitem"
                  >
                    <Tag variant="primary" removable={false}>
                      <span className="flex items-center gap-1.5">
                        {(() => {
                          const Icon = skill.icon;
                          return <Icon size={12} strokeWidth={2.5} aria-hidden="true" />;
                        })()}
                        {skill.name}
                        <Badge variant="secondary" size="sm" className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.level}
                        </Badge>
                      </span>
                    </Tag>
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary-text flex items-center gap-2">
                  <Wrench size={20} className="text-secondary-accent" strokeWidth={2} aria-hidden="true" />
                  Tool Proficiency Matrix
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]" role="table">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-xs font-semibold uppercase tracking-widest text-muted-text">Tool</th>
                      <th className="text-left p-3 text-xs font-semibold uppercase tracking-widest text-muted-text">Category</th>
                      <th className="text-left p-3 text-xs font-semibold uppercase tracking-widest text-muted-text">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool, index) => (
                      <motion.tr
                        key={tool.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.03 }}
                        className="border-b border-subtle-border hover:bg-secondary-surface/50 transition-colors"
                      >
                        <td className="p-3 font-medium text-primary-text">{tool.name}</td>
                        <td className="p-3 text-secondary-text text-sm">{tool.category}</td>
                        <td className="p-3">
                          <Badge variant={getProficiencyVariant(tool.proficiency)} size="sm">
                            {tool.proficiency}
                          </Badge>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-subtle-border">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" href="/Kavippranesh(resume)-2.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" icon={<Download size={18} strokeWidth={2.5} />}>
                Download Resume (PDF)
              </Button>
              <Button variant="secondary" size="lg" href="mailto:kavippranesh.l@example.com" className="w-full sm:w-auto" icon={<Mail size={18} strokeWidth={2.5} />}>
                Email Me
              </Button>
              <Button variant="outline" size="lg" href="https://linkedin.com/in/kavippranesh" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" icon={<LinkedinIcon size={18} strokeWidth={2.5} />}>
                LinkedIn Profile
              </Button>
            </div>

            <Card variant="glass" className="p-6">
              <h5 className="font-semibold text-primary-text mb-3 flex items-center gap-2">
                <Shield size={18} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
                Why Hire Me?
              </h5>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-secondary-text" role="list">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> 5 months hands-on QA internship</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> 150+ test cases designed & executed</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> 40+ defects identified & tracked</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> 25+ Selenium automation scripts</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> Strong SDLC/STLC & Agile foundation</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> Continuous learner — 4 certifications</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function SnapshotCard({ icon: Icon, label, value, iconBg }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string; value: string; iconBg: 'primary' | 'secondary-accent' | 'success' | 'warning' | 'error' }) {
  const iconBgClasses = {
    primary: 'bg-primary-soft text-primary-brand',
    'secondary-accent': 'bg-accent-soft text-secondary-accent',
    success: 'bg-success-soft text-success',
    warning: 'bg-warning-soft text-warning',
    error: 'bg-error-soft text-error',
  };

  return (
    <Card variant="premium" className="p-6">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-[12px] ${iconBgClasses[iconBg]}`}>
          <Icon size={22} strokeWidth={2} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-text mb-1">
            {label}
          </p>
          <p className="text-sm text-primary-text leading-relaxed">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}
function getProficiencyVariant(proficiency: string) {
  switch (proficiency) {
    case 'Expert': return 'success';
    case 'Advanced': return 'primary';
    case 'Proficient': return 'secondary';
    case 'Learning': return 'warning';
    default: return 'secondary';
  }
}




