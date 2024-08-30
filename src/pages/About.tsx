import Typewriter from '../components/Typewriter';
import { motion as m } from 'framer-motion';

const lines = [
  'Hello World !!!',
  'I am a Full-Stack Web Developer',
  'I do UI Automation Testing too',
  'I love Innovation and Efficiency',
  "Can't go wrong with Collaboration and Teamwork",
  'Coding Best-Practices is my bible',
  'Always Ready for the Next Challenge',
];

export default function About() {
  return (
    <m.div className="home-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
      <Typewriter speed={250} lines={lines} />
      <div className="home">
        <m.div animate={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.75 }} className="me"></m.div>
        <p>
          Experienced IT Programmer Analyst with a proven track record of success in driving automation and efficiency within the energy and engineering sectors. With a keen eye
          for innovation, I excel in leveraging cutting-edge technologies to develop robust solutions that not only meet but exceed client expectations. My expertise spans across
          various domains, including full-stack web development, automation testing, and project management. I have a demonstrated ability to streamline processes and optimize
          performance, ensuring projects are delivered on time and within budget.
        </p>
      </div>
    </m.div>
  );
}
