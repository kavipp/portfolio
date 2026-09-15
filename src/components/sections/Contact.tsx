'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Input, Textarea, Button, Badge } from '@/components/ui';
import { contactInfo } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, CheckCircle as LucideCheckCircle, AlertCircle, Shield, Clock, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/ui/SocialIcons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 20) return 'Message must be at least 20 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('loading');
    setSubmitMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setSubmitMessage('Your email client has been opened. Please send the message to complete your inquiry.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Failed to open email client. Please email directly at kavippranesh.l@example.com');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      description: 'Best for detailed inquiries',
      responseTime: 'Within 24 hours',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      description: 'For urgent matters',
      responseTime: 'Business hours',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kavippranesh',
      href: contactInfo.linkedin,
      external: true,
      description: 'Professional networking',
      responseTime: 'Within 48 hours',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'github.com/kavippranesh',
      href: contactInfo.github,
      external: true,
      description: 'Code & projects',
      responseTime: 'Check repo issues',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      description: 'Coimbatore, Tamil Nadu',
      responseTime: 'IST (UTC+5:30)',
    },
  ];

  return (
    <Section id="contact" className="bg-primary-surface" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeader
            label="CONTACT"
            title={contactInfo.heading}
            description={contactInfo.subtext}
          />

          <motion.div
            className="space-y-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 p-5 bg-tertiary-surface/50 border border-subtle-border rounded-[16px] transition-all duration-300 hover:border-border hover:bg-tertiary-surface hover:-translate-x-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 p-3 bg-primary-surface border border-subtle-border rounded-[12px] text-primary-brand group-hover:bg-primary-soft group-hover:border-primary-brand transition-all duration-300">
                  <method.icon size={20} strokeWidth={2} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">{method.label}</p>
                    {method.responseTime && (
                      <Badge variant="secondary" size="sm">{method.responseTime}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-primary-text font-medium mb-1">{method.value}</p>
                  <p className="text-xs text-muted-text">{method.description}</p>
                </div>
                <svg width={20} height={20} strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-muted-text group-hover:text-primary-brand transition-colors" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 p-6 bg-background border border-subtle-border rounded-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={22} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
              <h4 className="text-lg font-semibold text-primary-text">Privacy & Trust</h4>
            </div>
            <ul className="space-y-2 text-sm text-secondary-text" role="list">
              <li className="flex items-center gap-2"><LucideCheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> Your data is only used to respond to your inquiry</li>
              <li className="flex items-center gap-2"><LucideCheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> No third-party sharing or marketing lists</li>
              <li className="flex items-center gap-2"><LucideCheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> Messages sent via your email client (mailto)</li>
              <li className="flex items-center gap-2"><LucideCheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" /> You control what information to share</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card variant="premium" className="p-8 sticky top-24">
            <h3 className="text-xl font-semibold text-primary-text mb-6 flex items-center gap-2">
              <MessageSquare size={22} className="text-primary-brand" strokeWidth={2} aria-hidden="true" />
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="mb-6 p-4 bg-success-soft border border-success/30 rounded-[12px] flex items-start gap-3"
                role="alert"
              >
                <LucideCheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="font-medium text-success">Message Ready to Send</p>
                  <p className="text-sm text-secondary-text mt-1">{submitMessage}</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mb-6 p-4 bg-error-soft border border-error/30 rounded-[12px] flex items-start gap-3"
                role="alert"
              >
                <AlertCircle size={20} className="text-error flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="font-medium text-error">Submission Failed</p>
                  <p className="text-sm text-secondary-text mt-1">{submitMessage}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name ? errors.name : undefined}
                placeholder="Your full name"
                required
                autoComplete="name"
                helperText={!touched.name ? 'Enter your name as you\'d like to be addressed' : undefined}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : undefined}
                placeholder="your@email.com"
                required
                autoComplete="email"
                helperText={!touched.email ? 'We\'ll reply to this address' : undefined}
              />

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject ? errors.subject : undefined}
                placeholder="What's this about?"
                required
                helperText={!touched.subject ? 'Brief summary of your inquiry' : undefined}
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message ? errors.message : undefined}
                placeholder="Describe your project, opportunity, or question in detail..."
                required
                rows={6}
                helperText={!touched.message ? 'Minimum 20 characters • Be specific for a better response' : undefined}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                loading={submitStatus === 'loading'}
                icon={<Send size={18} strokeWidth={2.5} />}
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-muted-text text-center sm:text-left">
                By submitting, you agree to your data being used to respond to your inquiry.{' '}
                <a href="mailto:kavippranesh.l@example.com" className="text-primary-brand hover:underline">Direct email</a>{' '}
                also available.
              </p>
            </form>

            <div className="mt-6 pt-6 border-t border-subtle-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-tertiary-surface/50 rounded-[12px]">
                  <Clock size={20} className="text-primary-brand mx-auto mb-2" strokeWidth={2} aria-hidden="true" />
                  <p className="text-xs font-medium text-primary-text">Quick Response</p>
                  <p className="text-[11px] text-muted-text">Usually within 24h</p>
                </div>
                <div className="p-3 bg-tertiary-surface/50 rounded-[12px]">
                  <Shield size={20} className="text-primary-brand mx-auto mb-2" strokeWidth={2} aria-hidden="true" />
                  <p className="text-xs font-medium text-primary-text">Secure</p>
                  <p className="text-[11px] text-muted-text">Via your email client</p>
                </div>
                <div className="p-3 bg-tertiary-surface/50 rounded-[12px]">
                  <LucideCheckCircle size={20} className="text-success mx-auto mb-2" strokeWidth={2} aria-hidden="true" />
                  <p className="text-xs font-medium text-primary-text">No Spam</p>
                  <p className="text-[11px] text-muted-text">Your data stays private</p>
                </div>
              </div>
            </div>
            </Card>
        </motion.div>
      </div>
    </Section>
  );
}

