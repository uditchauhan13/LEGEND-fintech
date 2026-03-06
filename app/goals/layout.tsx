import { MainLayout } from '@/components/main-layout';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Goals & Planning - Legend',
  description: 'Set and track your financial goals',
};

export default function GoalsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
