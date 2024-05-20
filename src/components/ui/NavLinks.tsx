'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pageLinks = [
  {
    name: 'Главная',
    path: '/'
  },
  {
    name: 'Продукты',
    path: '/products'
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="menu">
      <ul className="menu__list">
        {pageLinks.map(({ name, path }, index) => (
          <li className="menu__item" key={index}>
            <Link className={`menu__link ${pathname === path ? '_active' : ''}`} href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
