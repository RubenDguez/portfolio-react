import { motion as m } from 'framer-motion';

export default function Resume() {
  return (
    <m.div className="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
      <div id='proficiencies'>
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>ReactJS</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <m.a whileHover={{ scale: 1.1 }} className="download-button" href="/CV.pdf" download>
        <div id="download-image"></div>
        <div id="download-text">Download</div>
      </m.a>
    </m.div>
  );
}
