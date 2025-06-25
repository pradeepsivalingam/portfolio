import React from "react";

const services = [

  {
    name: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "UI/UX Design",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe After Effect",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
  },
  {
    name: "Full Stack Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Social Media Marketing",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  
  {
    name: "Video Editing",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  },
];

export default function Service() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2">Service</h2>
      <p className="text-xl text-center mb-8">My Service</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <img src={service.logo} alt={service.name} className="w-16 h-16 mb-4" />
            <span className="text-lg font-medium text-center">{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}