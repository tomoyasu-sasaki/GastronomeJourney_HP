'use client';

import PageTransition from '@/components/animations/PageTransition';

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition type="fade">{children}</PageTransition>;
} 