'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ArrowRight, Bug, CheckCircle, XCircle, Terminal, Database, Zap, Award, Target, Shield, Code } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/SocialIcons';
import { personalInfo, quickFacts } from '@/data/portfolio';

const testingVisualItems = [
  { icon: CheckCircle, label: 'Test Cases', status: '150+', color: 'text-success', bg: 'bg-success-soft' },
  { icon: XCircle, label: 'Defects Found', status: '40+', color: 'text-error', bg: 'bg-error-soft' },
  { icon: Bug, label: 'Bug Reports', status: 'High', color: 'text-warning', bg: 'bg-warning-soft' },
  { icon: Terminal, label: 'Automation', status: '25+', color: 'text-primary-brand', bg: 'bg-primary-soft' },
  { icon: Database, label: 'SQL Queries', status: 'Valid', color: 'text-secondary-accent', bg: 'bg-accent-soft' },
  { icon: Zap, label: 'Regression', status: 'Cycle', color: 'text-secondary-text', bg: 'bg-secondary-surface' },
];

const statItems = [
  { icon: Award, label: 'Projects', value: '4', desc: 'Case Studies' },
  { icon: Target, label: 'Internship', value: '5', desc: 'Months' },
  { icon: Shield, label: 'Tools', value: '12+', desc: 'Mastered' },
  { icon: Code, label: 'Certifications', value: '4', desc: 'Verified' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 bg-background"
      aria-labelledby="hero-title"
    >
      <div className="hero-gradient" aria-hidden="true" />
      
      <motion.div
        className="absolute inset-0 bg-gradient-subtle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-brand bg-primary-soft rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-brand" />
              </span>
              QUALITY ASSURANCE · SOFTWARE TESTING
            </motion.div>

            <motion.h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text leading-[0.95] text-balance tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building confidence in software{' '}
              <span className="text-gradient">through thoughtful testing.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm {personalInfo.name}, an aspiring QA Engineer with a foundation in manual testing, Selenium automation, API testing, SQL, and Agile practices.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" href="#projects" icon={<ArrowRight size={18} strokeWidth={2.5} />}>
                View My Work
              </Button>
              <Button variant="secondary" size="lg" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-secondary-text hover:text-primary-brand transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} strokeWidth={2} aria-hidden="true" />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-secondary-text hover:text-primary-brand transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} strokeWidth={2} aria-hidden="true" />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">GitHub</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-2 text-secondary-text hover:text-primary-brand transition-colors"
                aria-label="Email"
              >
                <svg width={20} height={20} strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">Email</span>
              </a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-6 border-t border-subtle-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {statItems.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                  className="p-4 bg-primary-surface/50 border border-subtle-border rounded-[16px] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary-soft rounded-[8px] text-primary-brand">
                      <stat.icon size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-text font-mono">{stat.value}</p>
                      <p className="text-xs text-muted-text">{stat.label}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-text mt-1 ml-10">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TestingSystemVisual />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {quickFacts.map((fact, _index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + _index * 0.08 }}
              className="group"
            >
              <div className="p-6 bg-primary-surface border border-subtle-border rounded-[20px] transition-all duration-300 hover:border-border hover:shadow-large hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-brand mb-2">
                  {fact.label}
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary-text">
                  {fact.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestingSystemVisual() {
  return (
    <div className="relative aspect-square max-w-[520px] mx-auto">
      <div className="absolute inset-0 bg-primary-surface border border-subtle-border rounded-[24px] shadow-xl" />
      
      <div className="relative p-8 h-full flex flex-col justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-text">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
          </div>
          <span className="ml-3 font-mono text-secondary-text">qa-dashboard.spec.ts</span>
          <div className="ml-auto flex items-center gap-2 text-success font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
            <span>Running</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {testingVisualItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative p-5 bg-tertiary-surface/50 border border-subtle-border rounded-[16px] flex flex-col items-center justify-center gap-3 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
              whileHover={{ y: -6, scale: 1.03, borderColor: 'var(--color-border)' }}
            >
              <div className={`p-4 bg-primary-surface border border-subtle-border rounded-[12px] ${item.bg} ${item.color}`}>
                <item.icon size={26} strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-primary-text text-center">{item.label}</span>
              <span className="text-xl font-bold font-mono text-primary-brand">{item.status}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-text pt-6 border-t border-subtle-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span>12 Passed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error" />
            <span>3 Failed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warning" />
            <span>5 Pending</span>
          </div>
          <div className="ml-auto font-mono text-primary-brand">Coverage: 87%</div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-br from-primary-soft to-accent-soft rounded-[20px] flex items-center justify-center shadow-glow-subtle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: [0, 3, -3, 0] }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <CheckCircle size={36} className="text-primary-brand" strokeWidth={2.5} aria-hidden="true" />
      </motion.div>

      <motion.div
        className="absolute -top-6 -left-6 w-20 h-20 bg-accent-soft rounded-[16px] flex items-center justify-center shadow-glow-subtle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ duration: 0.6, delay: 0.9 }}
        style={{ animation: 'float 3.5s ease-in-out infinite' }}
      >
        <Database size={28} className="text-secondary-accent" strokeWidth={2.5} aria-hidden="true" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-primary-soft rounded-[12px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, x: [0, 8, 0] }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <Zap size={24} className="text-primary-brand" strokeWidth={2.5} aria-hidden="true" />
      </motion.div>
    </div>
  );
}

