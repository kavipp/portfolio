'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Section, SectionHeader, Card, Input } from '@/components/ui';
import { faqs } from '@/data/portfolio';
import { ChevronDown, Search, X, HelpCircle, CheckCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <Section id="faq" className="bg-background" padding="lg">
      <SectionHeader
        label="FAQ"
        title="Common Questions"
        description="Quick answers about my background, skills, and availability. Use search to find specific topics."
        align="center"
        divider
      />

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text" size={20} strokeWidth={2} aria-hidden="true" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12"
            aria-label="Search FAQ"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-text hover:text-primary-brand transition-colors"
              aria-label="Clear search"
            >
              <X size={18} strokeWidth={2} />
            </button>
          )}
        </div>

        {filteredFaqs.length === 0 ? (
          <Card variant="glass" className="p-8 text-center">
            <HelpCircle size={48} className="text-muted-text mx-auto mb-4" strokeWidth={1.5} aria-hidden="true" />
            <h4 className="text-lg font-semibold text-primary-text mb-2">No results found</h4>
            <p className="text-secondary-text">Try adjusting your search terms or browse all questions below.</p>
          </Card>
        ) : (
          <div className="space-y-4" role="list">
            {filteredFaqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-primary-surface border border-subtle-border rounded-[16px] overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? 'bg-primary-brand text-white' : 'bg-tertiary-surface text-secondary-text'
                    }`}>
                      <HelpCircle size={18} strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <span className="text-base font-medium text-primary-text pr-8">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className={`flex-shrink-0 text-secondary-text transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5 border-t border-subtle-border"
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0, paddingTop: openIndex === index ? '12px' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="text-secondary-text leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          className="mt-12 p-6 bg-primary-surface border border-subtle-border rounded-[16px] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <CheckCircle size={20} className="text-success" strokeWidth={2.5} aria-hidden="true" />
            <h4 className="text-lg font-semibold text-primary-text">Still have questions?</h4>
          </div>
          <p className="text-secondary-text mb-4">
            Didn't find what you're looking for? Feel free to reach out directly — I'm happy to chat about testing, automation, or potential opportunities.
          </p>
          <a
            href="mailto:kavippranesh.l@example.com"
            className="inline-flex items-center gap-2 text-primary-brand font-medium hover:underline"
          >
            Email Me <ChevronDown size={16} strokeWidth={2.5} />
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}

