import Project from '../components/UI/Project';
import {motion as m} from 'framer-motion';

const projects = [
  {
    title: 'Payroll Tracker',
    image:
      'https://static.vecteezy.com/system/resources/previews/012/733/256/original/financial-business-statistics-with-bar-graph-and-candlestick-chart-show-stock-market-price-and-effective-earning-on-blue-background-vector.jpg',
    url: 'https://github.com/RubenDguez/employee-payroll-tracker',
    description: '',
  },
  {
    title: 'Personal Blog',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg',
    url: 'https://github.com/RubenDguez/blogs',
    description: '',
  },
  {
    title: 'Body Boss',
    image: 'https://st3.depositphotos.com/1875497/18199/i/450/depositphotos_181998538-stock-photo-abstract-blur-fitness-gym-interior.jpg',
    url: 'https://github.com/RubenDguez/body-boss',
    description: 'A comprehensive fitness tracking web application designed to help users manage their workouts, track progress, and stay motivated.',
  },
  {
    title: 'README Gen Pro',
    image:
      'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2019/12/markdown-logo-on-a-blue-background.png',
    url: 'https://github.com/RubenDguez/readme-pro',
    description:
      'A user-friendly application designed to generate professional README files effortlessly. This tool serves as a centralized platform where users can quickly and easily create well-structured README files for their projects.',
  },
  {
    title: 'Vehicle Builder',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/044/531/300/small/ai-generated-conveyor-belt-at-a-car-factory-generative-ai-photo.jpeg',
    url: 'https://github.com/RubenDguez/vehicle-builder',
    description:
      'A command-line application that allows users to create, select, and interact with different types of vehicles. Users can choose to create a new vehicle or select an existing one, provide details about the vehicle, and then perform various actions with it.',
  },
  {
    title: 'Weather Dashboard',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/016/520/272/small_2x/the-dark-sky-had-clouds-gathered-to-the-left-and-a-strong-storm-before-it-rained-bad-weather-sky-photo.jpg',
    url: 'https://github.com/RubenDguez/weather',
    description:
      'A web application that allows travelers to view current and future weather conditions for multiple cities. This app helps users plan their trips accordingly by providing a 5-day weather forecast.',
  },
  {
    title: 'Employee Tracker',
    image: 'https://image.cnbcfm.com/api/v1/image/107146370-1667576072340-gettyimages-1404892156-untitled2.jpeg?v=1667580570',
    url: 'https://github.com/RubenDguez/employee-tracker',
    description:
      "A command-line application that allows business owners to efficiently manage their company's employee database. The application is built using Node.js, Inquirer, and PostgreSQL. It provides a user-friendly interface for viewing, adding, and updating information about departments, roles, and employees within a company.",
  },
  {
    title: 'Weather Forecast AI',
    image: 'https://www.siliconrepublic.com/wp-content/uploads/2023/08/weather_forecast_edited-718x523.jpeg',
    url: '',
    description: '',
  },
];
export default function Portfolio() {
  return (
    <div className='card-container'>
      {projects.map((project, i) => (
        <m.div key={project.title} initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: (0.45 * i), ease: 'easeOut' }}>
          <m.div whileHover={{ scale: 1.1 }} transition={{ duration: (0.45), ease: 'easeOut' }}>
            <Project title={project.title} img={project.image} url={project.url} description={project.description} />
          </m.div>
        </m.div>
      ))}
    </div>
  );
}
