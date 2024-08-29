import { FunctionComponent, PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const buttons = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' },
  { title: 'Resume', to: '/resume' },
];

export default function Navigation() {
  return (
    <div className="navigation">
      {buttons.map((button) => (
        <NavButton key={button.title} to={button.to}>
          {button.title}
        </NavButton>
      ))}
    </div>
  );
}

const NavButton: FunctionComponent<PropsWithChildren<{ to: string }>> = function ({ children, to }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button className={pathname === to ? 'active' : ''} onClick={() => navigate(to)}>
      {children}
    </button>
  );
};
