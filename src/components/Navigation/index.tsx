import {ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {motion as m} from 'framer-motion';

const links = [
  {title: 'About', to: '/'},
  {title: 'Portfolio', to: '/portfolio'},
  {title: 'Contact', to: '/contact'},
  {title: 'Resume', to: '/resume'},
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

const NavButton =  ({children, to}: {children: ReactNode, to: string}) => {
  const {pathname} = useLocation();

  return (
    <Link className={pathname === to ? 'active' : ''} to={to}>
      <m.div whileHover={{scale: 1.3}} transition={{duration: 0.75, ease: 'easeOut'}}>
        {children}
      </m.div>
    </Link>
  );
};
