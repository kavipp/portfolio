'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { certifications } from '@/data/portfolio';
import { Award, ExternalLink, CheckCircle, Calendar, Shield, Star, BookOpen } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certifications" className="bg-background" padding="lg">
      <SectionHeader
        label="CERTIFICATIONS"
        title="Verified Credentials"
        description="Platform-verified certifications demonstrating continuous learning in core QA and development skills."
        align="center"
        divider
      />

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Card variant="premium" hoverLift className="p-6 flex items-start gap-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-soft to-transparent rounded-full blur-xl opacity-50" aria-hidden="true" />

              <div className="flex-shrink-0 p-4 bg-primary-soft rounded-[14px] text-primary-brand relative z-10">
                <Award size={28} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-primary-text">
                    {cert.name}
                  </h3>
                  <Badge variant="success" size="sm" icon={<CheckCircle size={10} strokeWidth={2.5} />}>
                    Verified
                  </Badge>
                </div>
                <p className="text-sm text-primary-brand font-medium mb-1">
                  {cert.platform}
                </p>
                <p className="text-secondary-text text-sm mb-3">
                  {cert.skill}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-text">
                    <Calendar size={14} strokeWidth={2} aria-hidden="true" />
                    Completed {cert.date}
                  </span>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary-brand hover:underline text-sm font-medium"
                    >
                      Verify <ExternalLink size={12} strokeWidth={2} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Award />}
            value={certifications.length}
            label="Total Certifications"
            desc="Across 3 platforms"
            color="primary"
          />
          <StatCard
            icon={<Shield />}
            value={new Set(certifications.map(c => c.skill)).size}
            label="Unique Skills"
            desc="Validated expertise"
            color="secondary-accent"
          />
          <StatCard
            icon={<BookOpen />}
            value="2023–2024"
            label="Learning Period"
            desc="Continuous upskilling"
            color="success"
          />
        </div>

        <Card variant="glass" className="p-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Star size={24} className="text-warning" strokeWidth={2} aria-hidden="true" />
            <h4 className="text-lg font-semibold text-primary-text">Continuous Learning Commitment</h4>
          </div>
          <p className="text-secondary-text leading-relaxed max-w-2xl mx-auto">
            Actively expanding credentials in test automation frameworks (Playwright, Cypress), performance testing (k6, JMeter),
            cloud-based QA tools (BrowserStack, Sauce Labs), and CI/CD integration (GitHub Actions, Jenkins).
            Currently pursuing ISTQB Foundation Level and AWS Cloud Practitioner certifications.
          </p>
        </Card>
      </motion.div>
    </Section>
  );
}

function StatCard({ icon, value, label, desc, color }: { icon: React.ReactElement; value: string | number; label: string; desc: string; color: 'primary' | 'secondary-accent' | 'success' }) {
  const colorClasses = {
    primary: 'text-primary-brand bg-primary-soft',
    'secondary-accent': 'text-secondary-accent bg-accent-soft',
    success: 'text-success bg-success-soft',
  };

  const cls = colorClasses[color];

  return (
    <Card variant="premium" className="p-6 text-center">
      <div className={`p-3 rounded-[12px] ${cls} w-fit mx-auto mb-4`}>
        {icon}
      </div>
      <p className="text-3xl font-bold text-primary-text font-mono mb-1">{value}</p>
      <p className="text-sm font-semibold text-primary-text mb-1">{label}</p>
      <p className="text-xs text-muted-text">{desc}</p>
    </Card>
  );
}

