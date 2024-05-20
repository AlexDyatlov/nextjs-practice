import clsx from 'clsx';

import Container from '@/_ui/container';
import NavLinks from '@/components/ui/NavLinks';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx('header', className)}>
      <Container>
        <NavLinks />
      </Container>
    </header>
  );
}
