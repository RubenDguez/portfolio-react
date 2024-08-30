import { motion as m } from 'framer-motion';

export type DeploymentType = 'deployment' | 'video' | 'server';

export interface ProjectProps {
  title: string;
  img: string;
  description: string;
  gitHub: string;
  type: DeploymentType;
  deployment: string;
}

function getDeploymentIcon(deployment: DeploymentType): string {
  switch(deployment) {
    case 'deployment':
      return 'fa-solid fa-globe'
    case 'video': 
      return 'fa-brands fa-youtube';
    case 'server':
      return 'fa-solid fa-server'
  }
}

export default function Project({ title, img, gitHub, description, type, deployment }: ProjectProps) {
  return (
    <div className="card">
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description.length > 100 ? description.substring(0, 100).concat('...') : description}</p>
      </div>
      <div className="card-actions">
        <m.a href={gitHub} target="_blank" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          <i className="fa-brands fa-github"></i>
        </m.a>
        <m.a href={deployment} target="_blank" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.75, ease: 'easeInOut' }}>
          <i className={getDeploymentIcon(type)}></i>
        </m.a>
      </div>
    </div>
  );
}
