import type { Metadata } from 'next';

import '@/scss/main.scss';

import Header from '@/components/ui/Header';

import { SWRProvider } from '@/app/swr.provider';

export const metadata: Metadata = {
  title: 'Next.js practice',
  description: 'Практика с Next.js',
  icons: '/favicon.svg'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="layout">
        <SWRProvider>
          <Header className="layout__header" />
          {children}
          <footer className="layout__footer">footer</footer>
        </SWRProvider>
      </body>
    </html>
  );
}
