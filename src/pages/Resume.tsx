import { motion as m } from 'framer-motion';

export default function Resume() {
  return (
    <m.div className="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
        <m.a whileHover={{ scale: 1.1 }} className='download-button' href="/CV.pdf" download>
          <div id='download-image'></div>
          <div id='download-text'>Download</div>
        </m.a>
    </m.div>
  );
}
