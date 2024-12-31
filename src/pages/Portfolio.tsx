import { motion as m } from 'framer-motion';
import Project, { ProjectProps } from '../components/UI/Project';

const projects: Array<ProjectProps> = [
  {
    title: 'Personal Blog',
    img: 'public/_blog.jpeg',
    description: 'A dynamic, user-friendly personal blog platform where you can share your thoughts, experiences, and ideas with the world. ',
    gitHub: 'https://github.com/RubenDguez/blogs',
    deployment: 'https://rubendguez.github.io/blogs/',
    type: 'deployment',
  },
  {
    title: 'Body Boss',
    img: 'public/_gym.jpg',
    description: 'A comprehensive fitness tracking web application designed to help users manage their workouts, track progress, and stay motivated.',
    gitHub: 'https://github.com/RubenDguez/body-boss',
    deployment: 'https://rubendguez.github.io/body-boss/pages/dashboard.html',
    type: 'deployment',
  },
  {
    title: 'README Gen Pro',
    img: 'public/_markdown.avif',
    description:
      'A user-friendly application designed to generate professional README files effortlessly. This tool serves as a centralized platform where users can quickly and easily create well-structured README files for their projects.',
    gitHub: 'https://github.com/RubenDguez/readme-pro',
    deployment: 'https://www.youtube.com/watch?v=opUc3G43uqc',
    type: 'video',
  },
  {
    title: 'Vehicle Builder',
    img: 'public/_car-factory.jpeg',
    description:
      'A command-line application that allows users to create, select, and interact with different types of vehicles. Users can choose to create a new vehicle or select an existing one, provide details about the vehicle, and then perform various actions with it.',
    gitHub: 'https://github.com/RubenDguez/vehicle-builder',
    deployment: 'https://www.youtube.com/watch?v=MKE38wU4sUo',
    type: 'video',
  },
  {
    title: 'Weather Dashboard',
    img: 'public/_weather-dashboard.jpg',
    description:
      'A web application that allows travelers to view current and future weather conditions for multiple cities. This app helps users plan their trips accordingly by providing a 5-day weather forecast.',
    gitHub: 'https://github.com/RubenDguez/weather',
    deployment: 'https://weather-app-pro-v3mp.onrender.com/',
    type: 'server',
  },
  {
    title: 'Employee Tracker',
    img: 'public/_employee-tracker.jpeg',
    description:
      "A command-line application that allows business owners to efficiently manage their company's employee database. The application is built using Node.js, Inquirer, and PostgreSQL. It provides a user-friendly interface for viewing, adding, and updating information about departments, roles, and employees within a company.",
    gitHub: 'https://github.com/RubenDguez/employee-tracker',
    deployment: 'https://www.youtube.com/watch?v=XBAS-EguFtk',
    type: 'video',
  },
  {
    title: 'GitHub Candidate Search',
    img: 'public/_github-search.png',
    description:
      "The application utilizes the GitHub API to retrieve user profiles and display key information such as name, username, location, avatar, email, company, and GitHub profile link. Users can save or reject candidates, with saved candidates persisting between sessions using local storage.",
    gitHub: 'https://github.com/RubenDguez/candidate-search',
    deployment: '',
    type: 'video',
  },
  {
    title: 'Kanban Board',
    img: 'public/_kanban-board.png',
    description:
      "This project is a full-stack Kanban board application designed to enhance team productivity through task management. The application includes a secure login system using JSON Web Tokens (JWT) for authentication. It allows users to log in, manage tasks in a Kanban-style interface, and ensures that only authenticated users can access and manipulate data.",
    gitHub: 'https://github.com/RubenDguez/kanban-board',
    deployment: '',
    type: 'video',
  },
  {
    title: 'Social Network API',
    img: 'public/_express-mongo.jpeg',
    description:
      "The Social Network API is a backend solution designed for social media platforms, where users can share their thoughts, react to others' thoughts, and manage friend lists. This project is built using Express.js and MongoDB with Mongoose ODM, providing a NoSQL database solution optimized for handling large volumes of unstructured data. The API supports CRUD operations for users, thoughts, reactions, and friendships, offering the core functionalities required for a social network.",
    gitHub: 'https://github.com/RubenDguez/social-api',
    deployment: '',
    type: 'video',
  },
  {
    title: 'Book Search Engine',
    img: 'public/_book-search-engine.jpg',
    description:
      "A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js), allowing users to search for books via the Google Books API, save them to their account, and manage saved books. This project refactors an existing RESTful API to use a GraphQL API powered by Apollo Server.",
    gitHub: 'https://github.com/RubenDguez/book-search-engine',
    deployment: 'https://book-search-engine-lepn.onrender.com/',
    type: 'server',
  },
  {
    title: 'Tech Quiz Test Suite',
    img: 'public/_cypress.png',
    description:
      "This project adds comprehensive testing to an existing Tech Quiz application built with the MERN stack. The app allows users to take a quiz with ten random questions and view their final score. The testing suite uses Cypress to implement both component and end-to-end tests for key functionalities.",
    gitHub: 'https://github.com/RubenDguez/tech-quiz-test-suite',
    deployment: 'https://www.youtube.com/watch?v=MQ2cAYoAUs8&ab_channel=ArgenisDominguez',
    type: 'video',
  },
  {
    title: 'CI/CD',
    img: 'public/_github-actions.jpg',
    description:
      "This project demonstrates the integration of a Continuous Integration (CI) and Continuous Deployment (CD) pipeline using GitHub Actions. The application runs Cypress tests on every pull request (PR) to the develop branch and automatically deploys to Render when changes are merged into the main branch.",
    gitHub: 'https://github.com/RubenDguez/ci-cd-github',
    deployment: 'https://ci-cd-github.onrender.com/',
    type: 'server',
  },
  {
    title: 'Takeout Restaurant Menu and Order System',
    img: 'public/_python.jpg',
    description:
      "This project implements a restaurant ordering system where a customer can view a menu, place an order, update their order, and receive an itemized receipt. The system is designed for accessibility, enabling users with hearing and vocal impairments to interact with the system using a text-based interface. The core functionalities of the system include viewing menu items, adding them to an order, updating quantities, and receiving a detailed receipt with the total price.",
    gitHub: 'https://github.com/RubenDguez/python-take-out-restaurant',
    deployment: '',
    type: 'video',
  },
];

export default function Portfolio() {
  return (
    <div className="card-container">
      {projects.map((project, i) => (
        <m.div key={project.title} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 * i, ease: 'easeOut' }} exit={{ opacity: 0 }}>
          <m.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
            <Project title={project.title} img={project.img} gitHub={project.gitHub} type={project.type} deployment={project.deployment} description={project.description} />
          </m.div>
        </m.div>
      ))}
    </div>
  );
}
