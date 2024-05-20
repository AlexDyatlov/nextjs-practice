import type { Metadata } from 'next';

import '@/scss/main.scss';

import Header from '@/components/ui/Header';

export const metadata: Metadata = {
  title: 'Next.js practice',
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
        <Header className="layout__header" />
        {children}
        <footer className="layout__footer">footer</footer>
      </body>
    </html>
  );
}
