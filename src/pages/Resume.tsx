import { motion as m } from 'framer-motion';

export default function Resume() {
  return (
    <m.div className="resume" initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: -360 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
        <a className='download-button' href="/CV.pdf" download>Download</a>
    </m.div>
  );
}
