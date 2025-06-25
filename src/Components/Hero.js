import { useEffect } from 'react';
import HeroImg from '../assets/hero.png';
import About from './About';
// Importing AOS (Animate On Scroll) library for animations 
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
            <section className='flex px-5 py-40 bg-secondary justify-center'>
                <div
                    className="flex justify-end items-center h-screen pr-16"
                    data-aos="fade-right"
                >
                    <div className="w-1/2 text-white text-3xl">
                        Hi, I'm <span className=""></span> PRADEEP<p className="text-xl">I'm a Developer</p>
                    </div>
                </div>
                <img
                    className='w-8/12'
                    src={HeroImg}
                    alt='Hero'
                    data-aos="fade-left"
                />
            </section>
            <About />
            <Education />
            <Skills />
            <Service />
            <Profile />
            <Contact/>
            <Copyrights />

        </>
    );
}