import {motion as m} from 'framer-motion';

export default function About() {
  return (
    <m.div className="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
      <p>
        I am an accomplished IT Programmer Analyst with extensive experience in driving automation, efficiency, and innovation within the energy and engineering sectors. My
        expertise spans full-stack web development, automation testing, and project management, enabling me to deliver high-quality solutions that meet and exceed client
        expectations.
      </p>
      <p>
        Throughout my career, I have focused on streamlining processes and optimizing performance, ensuring that projects are completed on time, within scope, and to the highest
        standards. I am skilled at leveraging cutting-edge technologies to develop robust, scalable systems that enhance operational efficiency and reduce costs.
      </p>
      <p>
        Collaboration is at the core of my approach. I excel in working with cross-functional teams, fostering a culture of innovation, and adhering to industry best practices. My
        ability to communicate effectively and manage complex projects has consistently resulted in successful outcomes.
      </p>

      <p>
        I am passionate about continuing to grow in my field and am eager to take on new challenges where I can contribute to the advancement of technology and drive impactful
        results. I am currently seeking opportunities within dynamic organizations that value innovation, efficiency, and excellence.
      </p>
    </m.div>
  );
}
