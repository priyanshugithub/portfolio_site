import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Priyanshu Tyagi | Frontend Developer',
  description: 'Portfolio of Priyanshu Tyagi, a frontend developer with experience in React applications who is exploring AI integrations and workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <div id="top" className="sr-only" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
