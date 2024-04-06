import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
