import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KAVIPPRANESH L. | QA Engineer & Software Testing Portfolio',
  description: 'Portfolio of KAVIPPRANESH L., an aspiring QA Engineer with a foundation in manual testing, Selenium automation, API testing, SQL, and Agile practices.',
  keywords: ['QA Engineer', 'Software Testing', 'Quality Assurance', 'Selenium', 'Automation Testing', 'API Testing', 'SQL', 'Manual Testing', 'Bug Reporting', 'Jira', 'Postman'],
  authors: [{ name: 'KAVIPPRANESH L.' }],
  creator: 'KAVIPPRANESH L.',
  publisher: 'KAVIPPRANESH L.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kavippranesh.dev',
    title: 'KAVIPPRANESH L. | QA Engineer & Software Testing Portfolio',
    description: 'Portfolio of KAVIPPRANESH L., an aspiring QA Engineer with a foundation in manual testing, Selenium automation, API testing, SQL, and Agile practices.',
    siteName: 'KAVIPPRANESH L. Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAVIPPRANESH L. | QA Engineer & Software Testing Portfolio',
    description: 'Portfolio of KAVIPPRANESH L., an aspiring QA Engineer with a foundation in manual testing, Selenium automation, API testing, SQL, and Agile practices.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FCFCFD' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'KAVIPPRANESH L.',
              jobTitle: 'Quality Analyst & Software Testing Enthusiast',
              url: 'https://kavippranesh.dev',
              sameAs: [
                'https://linkedin.com/in/kavippranesh',
                'https://github.com/kavippranesh',
              ],
              knowsAbout: [
                'Manual Testing',
                'Test Case Design',
                'Functional Testing',
                'Regression Testing',
                'Selenium WebDriver',
                'API Testing',
                'SQL',
                'Java',
                'Jira',
                'Agile',
                'SDLC',
                'STLC',
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'BE Computer Science Engineering',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'SquashApps',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}