'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Card, Badge, Button } from '@/components/ui';
import { skillsCategories } from '@/data/portfolio';
import { ClipboardList, Bot, Database, Code, BarChart3, Target, TrendingUp } from 'lucide-react';

const categoryIcons = {
  'Testing Fundamentals': ClipboardList,
  'Automation': Bot,
  'API / Data': Database,
  'Development / Tools': Code,
};

const proficiencyData: Record<string, number> = {
  'Manual Testing': 90,
  'Test Case Design': 85,
  'Bug Life Cycle': 88,
  'Functional Testing': 90,
  'Regression Testing': 85,
  'Smoke Testing': 88,
  'SDLC': 80,
  'STLC': 85,
  'Selenium WebDriver': 75,
  'Java': 70,
  'Maven': 65,
  'Postman': 85,
  'SQL': 80,
  'MySQL': 78,
  'GitHub': 80,
  'Jira': 85,
  'HTML': 75,
  'CSS': 70,
  'JavaScript': 65,
  'VS Code': 90,
};

function getProficiencyLabel(score: number) {
  if (score >= 90) return 'Expert';
  if (score >= 80) return 'Advanced';
  if (score >= 70) return 'Proficient';
  if (score >= 60) return 'Intermediate';
  return 'Learning';
}

function getProficiencyColor(score: number) {
  if (score >= 85) return 'success';
  if (score >= 75) return 'primary';
  if (score >= 65) return 'warning';
  return 'secondary';
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  return (
    <Section id="skills" className="bg-primary-surface" padding="lg">
      <div className="flex items-center justify-between mb-12 md:mb-16">
        <SectionHeader
          label="SKILLS"
          title="Testing & Technical Capabilities"
          description="Organized by domain with proficiency levels — practical skills backed by project experience."
        />
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'cards' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('cards')}
            icon={<ClipboardList size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Cards
          </Button>
          <Button
            variant={viewMode === 'matrix' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('matrix')}
            icon={<BarChart3 size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Matrix
          </Button>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <SkillsCardView
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ) : (
        <SkillsMatrixView />
      )}

      <motion.div
        className="mt-16 p-8 bg-background border border-subtle-border rounded-[24px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand">
            <Target size={24} strokeWidth={2} aria-hidden="true" />
          </div>
          <h4 className="text-lg font-semibold text-primary-text">
            Testing Lifecycle Proficiency
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillPillar title="Plan" items={['Requirements', 'Test Plan', 'Risk Analysis']} icon={ClipboardList} color="primary" />
          <SkillPillar title="Design" items={['Test Cases', 'Test Data', 'Traceability']} icon={Code} color="secondary-accent" />
          <SkillPillar title="Execute" items={['Manual', 'Selenium', 'Postman', 'SQL']} icon={Bot} color="success" />
          <SkillPillar title="Report" items={['Defects', 'Metrics', 'Sign-off']} icon={TrendingUp} color="warning" />
        </div>
      </motion.div>
    </Section>
  );
}

function SkillsCardView({ activeCategory, setActiveCategory }: { activeCategory: string | null; setActiveCategory: (cat: string | null) => void }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Skill categories">
        {skillsCategories.map((category, index) => (
          <motion.button
            key={category.category}
            onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === category.category
                ? 'bg-primary-brand text-white shadow-glow'
                : 'bg-secondary-surface text-secondary-text border border-border hover:border-primary-brand hover:text-primary-brand'
            }`}
            role="tab"
            aria-selected={activeCategory === category.category}
            aria-controls={`panel-${category.category}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {category.category}
          </motion.button>
        ))}
      </div>

      <motion.div
        id="skills-panels"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {skillsCategories.map((category, catIndex) => {
          const Icon = categoryIcons[category.category as keyof typeof categoryIcons] || ClipboardList;
          const isActive = !activeCategory || activeCategory === category.category;

          return (
            <motion.article
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 20, scale: isActive ? 1 : 0.98 }}
              transition={{ duration: 0.3, delay: catIndex * 0.05 }}
              className={`relative ${!isActive ? 'pointer-events-none' : ''}`}
            >
              <Card variant="premium" hoverLift className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-text">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 flex-1" role="list">
                  {category.skills.map((skill, skillIndex) => {
                    const score = proficiencyData[skill] || 60;
                    const label = getProficiencyLabel(score);
                    const color = getProficiencyColor(score);

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 + catIndex * 0.08 + skillIndex * 0.03 }}
                        className="group w-full sm:w-auto"
                        role="listitem"
                      >
                        <div className="bg-tertiary-surface border border-subtle-border rounded-[12px] p-4 transition-all duration-300 hover:border-border hover:shadow-medium hover:-translate-y-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-primary-text">{skill}</span>
                            <Badge variant={color} size="sm">{label}</Badge>
                          </div>
                          <div className="h-2 bg-secondary-surface rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary-brand rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${score}%` }}
                              transition={{ duration: 0.8, delay: 0.2 + catIndex * 0.08 + skillIndex * 0.03, ease: 'easeOut' }}
                              style={{ width: 0 }}
                            />
                          </div>
                          <p className="text-xs text-muted-text mt-2 text-right font-mono">{score}%</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-subtle-border">
                  <p className="text-xs text-muted-text text-center">
                    {category.skills.length} skills • Avg: {Math.round(category.skills.reduce((acc, s) => acc + (proficiencyData[s] || 60), 0) / category.skills.length)}%
                  </p>
                </div>
              </Card>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}

function SkillsMatrixView() {
  const allSkills = skillsCategories.flatMap(cat =>
    cat.skills.map(skill => ({
      name: skill,
      category: cat.category,
      score: proficiencyData[skill] || 60,
    }))
  );

  const sortedSkills = [...allSkills].sort((a, b) => b.score - a.score);

  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full min-w-[800px]" role="table">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Skill</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Category</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Proficiency</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Level</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Evidence</th>
          </tr>
        </thead>
        <tbody>
          {sortedSkills.map((skill, index) => (
            <motion.tr
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="border-b border-subtle-border hover:bg-secondary-surface/50 transition-colors"
              whileHover={{ x: 4 }}
            >
              <td className="p-4">
                <span className="font-medium text-primary-text">{skill.name}</span>
              </td>
              <td className="p-4">
                <Badge variant="secondary" size="sm">{skill.category}</Badge>
              </td>
              <td className="p-4">
                <div className="w-48 h-2 bg-secondary-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-brand rounded-full"
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </td>
              <td className="p-4">
                <Badge variant={getProficiencyColor(skill.score)} size="sm">
                  {getProficiencyLabel(skill.score)}
                </Badge>
              </td>
              <td className="p-4">
                <span className="text-sm font-mono text-muted-text">{skill.score}%</span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function SkillPillar({ title, items, icon: Icon, color }: { title: string; items: string[]; icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; color: 'primary' | 'secondary-accent' | 'success' | 'warning' }) {
  const colorClasses = {
    primary: 'text-primary-brand bg-primary-soft',
    'secondary-accent': 'text-secondary-accent bg-accent-soft',
    success: 'text-success bg-success-soft',
    warning: 'text-warning bg-warning-soft',
  };

  const cls = colorClasses[color];

  return (
    <div className="p-5 bg-primary-surface border border-subtle-border rounded-[16px] hover:border-border hover:shadow-medium transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-[10px] ${cls}`}>
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </div>
        <h5 className="text-sm font-semibold uppercase tracking-wider text-primary-text">{title}</h5>
      </div>
      <ul className="space-y-2" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-secondary-text">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-brand/30" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

