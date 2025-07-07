import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileImg from "../assets/Profile.png"; // Your profile image
import bgImg from "../assets/dev1.jpg"; // Save the provided image as bg-coding.jpg in your assets folder

function About() {  
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section
            className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
        >
            {/* Faded background image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(0.7)", // Make background darker for contrast
                }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-4xl px-6 bg-white bg-opacity-80 rounded-xl shadow-lg" data-aos="fade-up">
                <div className="flex-shrink-0 flex items-center justify-center md:mr-10 mb-6 md:mb-0">
                    <img
                        src={ProfileImg}
                        alt="Profile"
                        width={240}
                        height={240}
                        className="w-60 h-70 rounded-full object-cover shadow-lg"
                        data-aos="fade-right"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/240"; }}
                    />
                </div>
                <div className="text-center md:text-left" data-aos="fade-left">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-lg text-gray-700 max-w-md">
                        I am an enthusiastic and motivated developer, eager to start my professional journey in the tech industry. As a fresher, I have a strong foundation in modern web technologies and a passion for building creative, user-friendly solutions.  
                        <br /><br />
                        Alongside my academic projects, I have worked as a freelancer, collaborating with clients to deliver websites and digital solutions tailored to their needs. I am committed to continuous learning, adapting quickly to new challenges, and contributing positively to any team or any project.
                    </p>
                </div>
            </div>
            <div className="relative z-10 mt-8" data-aos="zoom-in">
                <a
                    href="/resume.pdf"
                    download
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-800 transition-transform duration-300 transform hover:scale-110"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}

export default About;
