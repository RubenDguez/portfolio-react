import {AnimatePresence} from 'framer-motion';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import React from "react";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";
import About from "./pages/About.tsx";
import Error from "./pages/Error.tsx";

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className='app'>
          <Header/>
          <div className='outlet'>
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path='*' element={<Error />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer/>
        </div>
      </React.Suspense>
    </HashRouter>
  );
}


export default App;
