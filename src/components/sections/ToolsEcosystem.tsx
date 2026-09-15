'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader, Card, Badge, Button } from '@/components/ui';
import { toolsEcosystem } from '@/data/portfolio';
import { Monitor, Code, Database, Wrench, BarChart3, Layers, Link2, Sparkles } from 'lucide-react';


const categoryIcons = {
  testing: Monitor,
  programming: Code,
  data: Database,
  workflow: Wrench,
};

const categoryLabels: Record<string, string> = {
  testing: 'Testing',
  programming: 'Programming',
  data: 'Data & API',
  workflow: 'Workflow',
};

const toolProficiency: Record<string, { level: 'Expert' | 'Advanced' | 'Proficient' | 'Learning'; category: string }> = {
  Selenium: { level: 'Proficient', category: 'Automation' },
  Postman: { level: 'Advanced', category: 'API Testing' },
  Jira: { level: 'Advanced', category: 'Tracking' },
  Java: { level: 'Proficient', category: 'Programming' },
  JavaScript: { level: 'Learning', category: 'Programming' },
  SQL: { level: 'Advanced', category: 'Data' },
  MySQL: { level: 'Advanced', category: 'Data' },
  Maven: { level: 'Proficient', category: 'Build' },
  GitHub: { level: 'Advanced', category: 'Version Control' },
  'VS Code': { level: 'Expert', category: 'IDE' },
  'TestNG': { level: 'Proficient', category: 'Framework' },
  'Extent Reports': { level: 'Proficient', category: 'Reporting' },
};

const proficiencyColors: Record<string, 'success' | 'primary' | 'secondary-accent' | 'warning'> = {
  Expert: 'success',
  Advanced: 'primary',
  Proficient: 'secondary-accent',
  Learning: 'warning',
};

export function ToolsEcosystem() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const categories = Object.keys(toolsEcosystem) as (keyof typeof toolsEcosystem)[];

  return (
    <Section id="tools" className="bg-primary-surface" padding="lg">
      <div className="flex items-center justify-between mb-12 md:mb-16">
        <SectionHeader
          label="TOOLS ECOSYSTEM"
          title="Technology Stack"
          description="Tools I work with across the testing and development lifecycle, with proficiency levels."
        />
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'cards' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('cards')}
            icon={<Layers size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Cards
          </Button>
          <Button
            variant={viewMode === 'table' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('table')}
            icon={<BarChart3 size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Table
          </Button>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <ToolsCardView categories={categories} />
      ) : (
        <ToolsTableView categories={categories} />
      )}

      <motion.div
        className="mt-16 p-8 bg-background border border-subtle-border rounded-[24px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h4 className="text-lg font-semibold text-primary-text mb-6 text-center flex items-center justify-center gap-2">
          <Link2 size={20} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
          How They Connect in My Workflow
        </h4>
        <div className="grid md:grid-cols-4 gap-4">
          <ToolFlow from="Requirements" to="Test Cases" via="Jira" color="primary" />
          <ToolFlow from="Test Cases" to="Automation" via="Selenium" color="secondary-accent" />
          <ToolFlow from="API Testing" to="Validation" via="Postman" color="success" />
          <ToolFlow from="Code" to="CI/CD" via="GitHub + Maven" color="warning" />
        </div>
      </motion.div>
    </Section>
  );
}

function ToolsCardView({ categories }: { categories: (keyof typeof toolsEcosystem)[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <motion.article
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <Card variant="premium" hoverLift className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary-soft rounded-[12px] text-primary-brand">
                {(() => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Monitor;
                  return <Icon size={24} strokeWidth={2} aria-hidden="true" />;
                })()}
              </div>
              <h3 className="text-lg font-semibold text-primary-text">
                {categoryLabels[category]}
              </h3>
            </div>

            <ul className="space-y-3 flex-1" role="list">
              {toolsEcosystem[category].map((tool, toolIndex) => {
                const proficiency = toolProficiency[tool]?.level || 'Proficient';
                return (
                  <motion.li
                    key={tool}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + toolIndex * 0.05 }}
                    className="group"
                    role="listitem"
                  >
                    <div className="flex items-center justify-between p-3 bg-tertiary-surface/50 border border-subtle-border rounded-[10px] transition-all duration-200 hover:border-border hover:bg-tertiary-surface">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-brand/30 flex-shrink-0" aria-hidden="true" />
                        <span className="text-secondary-text font-medium">{tool}</span>
                      </div>
                      <Badge variant={proficiencyColors[proficiency as keyof typeof proficiencyColors]} size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {proficiency}
                      </Badge>
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-subtle-border">
              <p className="text-xs text-muted-text text-center">
                {toolsEcosystem[category].length} tools • {getAvgProficiency(category)} avg level
              </p>
            </div>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}

function ToolsTableView({ categories }: { categories: (keyof typeof toolsEcosystem)[] }) {
  const allTools = categories.flatMap(cat =>
    toolsEcosystem[cat].map(tool => ({
      name: tool,
      category: categoryLabels[cat],
      proficiency: toolProficiency[tool]?.level || 'Proficient',
      proficiencyCategory: toolProficiency[tool]?.category || 'General',
    }))
  );

  const sortedTools = [...allTools].sort((a, b) => {
    const order = { Expert: 4, Advanced: 3, Proficient: 2, Learning: 1 };
    return order[b.proficiency] - order[a.proficiency];
  });

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
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Tool</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Category</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Proficiency</th>
            <th className="text-left p-4 text-xs font-semibold uppercase tracking-widest text-muted-text">Use Case</th>
          </tr>
        </thead>
        <tbody>
          {sortedTools.map((tool, index) => (
            <motion.tr
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="border-b border-subtle-border hover:bg-secondary-surface/50 transition-colors"
              whileHover={{ x: 4 }}
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[8px] bg-primary-soft flex items-center justify-center">
                    <Sparkles size={16} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <span className="font-medium text-primary-text">{tool.name}</span>
                </div>
              </td>
              <td className="p-4">
                <Badge variant="secondary" size="sm">{tool.category}</Badge>
              </td>
              <td className="p-4">
                <Badge variant={proficiencyColors[tool.proficiency as keyof typeof proficiencyColors]} size="sm">
                  {tool.proficiency}
                </Badge>
              </td>
              <td className="p-4 text-secondary-text text-sm">
                {tool.proficiencyCategory}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function getAvgProficiency(category: string) {
  const tools = toolsEcosystem[category];
  const scores = tools.map(t => {
    const prof = toolProficiency[t]?.level || 'Proficient';
    const values = { Expert: 4, Advanced: 3, Proficient: 2, Learning: 1 };
    return values[prof as keyof typeof values];
  });
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  if (avg >= 3.5) return 'Expert';
  if (avg >= 2.5) return 'Advanced';
  if (avg >= 1.5) return 'Proficient';
  return 'Learning';
}

function ToolFlow({ from, to, via, color }: { from: string; to: string; via: string; color: 'primary' | 'secondary-accent' | 'success' | 'warning' }) {
  const colorClasses = {
    primary: 'text-primary-brand bg-primary-soft',
    'secondary-accent': 'text-secondary-accent bg-accent-soft',
    success: 'text-success bg-success-soft',
    warning: 'text-warning bg-warning-soft',
  };

  const cls = colorClasses[color];

  return (
    <Card variant="small" className="p-5 text-center h-full">
      <p className="text-sm font-medium text-primary-text mb-2">{from}</p>
      <div className="my-2">
        <span className={`text-2xl font-bold ${cls}`}>→</span>
      </div>
      <p className={`text-xs font-medium px-2 py-1 ${cls} rounded-full inline-block mb-2`}>{via}</p>
      <div className="my-2">
        <span className={`text-2xl font-bold ${cls}`}>→</span>
      </div>
      <p className="text-sm font-medium text-secondary-text">{to}</p>
    </Card>
  );
}

