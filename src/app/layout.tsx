import type { Metadata } from 'next';

import '@/scss/main.scss';

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
        <header className="layout__header">header</header>
        {children}
        <footer className="layout__footer">footer</footer>
      </body>
    </html>
  );
}
