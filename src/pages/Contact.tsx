import ContactForm from '../components/Forms/Contact';
import {motion as m} from 'framer-motion';

export default function Contact() {
  return (
    <m.div className='contact' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
      <ContactForm />
    </m.div>
  );
}
