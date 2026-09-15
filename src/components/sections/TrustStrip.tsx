'use client';

import { motion } from 'framer-motion';
import { trustStripItems } from '@/data/portfolio';
import { CheckCircle } from 'lucide-react';

export function TrustStrip() {
  return (
    <section className="py-10 border-y border-subtle-border bg-primary-surface" aria-label="Core testing focus areas">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {trustStripItems.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-2 px-4 py-2 bg-tertiary-surface/50 border border-subtle-border rounded-full transition-all duration-200 hover:border-border hover:bg-tertiary-surface"
            >
              <CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" />
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

