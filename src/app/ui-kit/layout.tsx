import { notFound } from 'next/navigation';

export default function UiLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === 'production') {
    return notFound();
  }

  return <>{children}</>;
}
