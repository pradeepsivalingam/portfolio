import React from "react"
import serviceimg from "../assets/Services.png";
import ps from "../assets/ps.png";
import ae from "../assets/ae.png";
import pr from "../assets/pr.png";

const services = [
  {
    name: "Adobe Photoshop",
    logo: ps,
  },
  {
    name: "UI/UX Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe After Effect",
    logo: ae,
  },
  {
    name: "Web Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Social Media Marketing",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Adobe Premiere Pro",
    logo: pr,
  },
];

export default function Service() {
  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${serviceimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Service</h2>
        <p className="text-xl text-center mb-8 text-gray-200">My Service</p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition-transform w-full"
            >
              <img src={service.logo} alt={service.name} className="w-16 h-16 mb-4" />
              <span className="text-lg font-medium text-center text-white">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
