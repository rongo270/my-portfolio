import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedApp from './components/FeaturedApp';
import WorkingOn from './components/WorkingOn';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 80 });
    }, []);

    return (
        <div className="app-wrapper">
            <Navbar />
            <Hero />
            <About />
            <FeaturedApp />
            <WorkingOn />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
