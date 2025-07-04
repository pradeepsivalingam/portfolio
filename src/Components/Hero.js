import { useEffect } from 'react';
// import HeroImg from '../assets/hero.png';
import About from './About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './education.js';
import Skills from './Skills';
import Service from './Service.js';
import Profile from './profile.js';
import Contact from './contact.js';
import Copyrights from './Copyrights.js';

export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className="flex items-center justify-center h-screen bg-secondary px-5">
  <div
    className="text-white text-center justify-center .hero-title items-center"
    data-aos="fade-right"
  >
    <h1 className="text-3xl hero-title">Hi, I'm PRADEEP</h1>
    <p className="text-4xl mt-2">I'm a Developer</p>
  </div>
</section>


            <About />
            <Education />
            <Skills />
            <Service />
            <Profile />
            <Contact />
            <Copyrights />
        </>
    );
}
