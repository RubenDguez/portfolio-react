import Project, { ProjectProps } from '../components/UI/Project';
import { motion as m } from 'framer-motion';

const projects: Array<ProjectProps> = [
  {
    title: 'Personal Blog',
    img: '/_blog.jpeg',
    description: 'A dynamic, user-friendly personal blog platform where you can share your thoughts, experiences, and ideas with the world. ',
    gitHub: 'https://github.com/RubenDguez/blogs',
    deployment: 'https://rubendguez.github.io/blogs/',
    type: 'deployment'
  },
  {
    title: 'Body Boss',
    img: '/_gym.jpg',
    description: 'A comprehensive fitness tracking web application designed to help users manage their workouts, track progress, and stay motivated.',
    gitHub: 'https://github.com/RubenDguez/body-boss',
    deployment: 'https://rubendguez.github.io/body-boss/pages/dashboard.html',
    type: 'deployment'
  },
  {
    title: 'README Gen Pro',
    img: '/_markdown.avif',
    description: 'A user-friendly application designed to generate professional README files effortlessly. This tool serves as a centralized platform where users can quickly and easily create well-structured README files for their projects.',
    gitHub: 'https://github.com/RubenDguez/readme-pro',
    deployment: 'https://www.youtube.com/watch?v=opUc3G43uqc',
    type: 'video'
  },
  {
    title: 'Vehicle Builder',
    img: '/_car-factory.jpeg',
    description: 'A command-line application that allows users to create, select, and interact with different types of vehicles. Users can choose to create a new vehicle or select an existing one, provide details about the vehicle, and then perform various actions with it.',
    gitHub: 'https://github.com/RubenDguez/vehicle-builder',
    deployment: 'https://www.youtube.com/watch?v=MKE38wU4sUo',
    type: 'video'
  },
  {
    title: 'Weather Dashboard',
    img: '/_weather-dashboard.jpg',
    description: 'A web application that allows travelers to view current and future weather conditions for multiple cities. This app helps users plan their trips accordingly by providing a 5-day weather forecast.',
    gitHub: 'https://github.com/RubenDguez/weather',
    deployment: 'https://weather-app-pro-v3mp.onrender.com/',
    type: 'server'
  },
  {
    title: 'Employee Tracker',
    img: '/_employee-tracker.jpeg',
    description: "A command-line application that allows business owners to efficiently manage their company's employee database. The application is built using Node.js, Inquirer, and PostgreSQL. It provides a user-friendly interface for viewing, adding, and updating information about departments, roles, and employees within a company.",
    gitHub: 'https://github.com/RubenDguez/employee-tracker',
    deployment: 'https://www.youtube.com/watch?v=XBAS-EguFtk',
    type: 'video'
  },
];

export default function Portfolio() {
  return (
    <div className="card-container">
      {projects.map((project, i) => (
        <m.div key={project.title} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 * i, ease: 'easeOut' }}>
          <m.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
            <Project
              title={project.title}
              img={project.img}
              gitHub={project.gitHub}
              type={project.type}
              deployment={project.deployment}
              description={project.description}
            />
          </m.div>
        </m.div>
      ))}
    </div>
  );
}
