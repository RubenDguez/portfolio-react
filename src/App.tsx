import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='outlet'>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
