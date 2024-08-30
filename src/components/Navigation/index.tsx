import { FunctionComponent, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion';

const links = [
  { title: 'About', to: '/' },
  { title: 'Portfolio', to: '/portfolio' },
  { title: 'Contact', to: '/contact' },
  { title: 'Resume', to: '/resume' },
];

export default function Navigation() {
  return (
    <div className="navigation">
      {links.map((button) => (
        <NavButton key={button.title} to={button.to}>
          {button.title}
        </NavButton>
      ))}
    </div>
  );
}

const NavButton: FunctionComponent<PropsWithChildren<{ to: string }>> = function ({ children, to }) {
  const { pathname } = useLocation();

  return (
    <Link className={pathname === to ? 'active' : ''} to={to}>
      <m.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
        {children}
      </m.div>
    </Link>
  );
};
