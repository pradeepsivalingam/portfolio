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
            className="h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center w-4xl w-4xl px-6 bg-white bg-opacity-80 rounded-xl shadow-lg" data-aos="fade-up">
                <div className="flex-shrink-0 flex items-center justify-center md:mr-10 mb-6 md:mb-0">
                    <img
                        src={ProfileImg}
                        alt="Profile"
                        className="w-60 h- rounded-full object-cover shadow-lg"
                        data-aos="fade-right"
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
        </section>
    );
}

export default About;