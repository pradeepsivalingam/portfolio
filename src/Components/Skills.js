import React from "react";
import { useEffect, useState } from "react";
import bg from "../assets/Skillsimg.png"; // Save the provided image as Skills img.png in your assets folder
const skills = [
  {
    name: "HTML & CSS",
    percent: 60,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Full Stack Developer",
    percent: 40,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "ReactJS",
    percent: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Graphic Designer",
    percent: 60,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "UI/UX Design",
    percent: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Java",
    percent: 50,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Digital Marketing",
    percent: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Video Editing",
    percent: 90,
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  },
];



export default function Skills() {
  const [animatedPercents, setAnimatedPercents] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, idx) => {
      return setInterval(() => {
        setAnimatedPercents(prev => {
          const next = [...prev];
          if (next[idx] < skill.percent) {
            next[idx] = Math.min(next[idx] + 1, skill.percent);
          }
          return next;
        });
      }, 15);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{
        background: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated science/futuristic overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glowing grid */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.18 }}>
         
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
        {/* Animated particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="animate-pulse absolute left-1/4 top-1/3 w-16 h-16 bg-cyan-400 rounded-full blur-2xl opacity-40"></div>
          <div className="animate-ping absolute right-1/4 bottom-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-30"></div>
          <div className="animate-pulse absolute left-2/3 top-1/5 w-10 h-10 bg-indigo-400 rounded-full blur-lg opacity-30"></div>
        </div>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-white drop-shadow-lg">Skills</h2>
        <p className="text-xl text-center mb-8 text-cyan-100 drop-shadow">My Skills</p>
        <div className="max-w-xl mx-auto space-y-8">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-cyan-400/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <img src={skill.logo} alt={skill.name} className="w-14 h-14 drop-shadow-lg" />
                  <span className="font-medium text-lg text-white">{skill.name}</span>
                </div>
                <span className="font-medium text-lg text-cyan-200">
                  {animatedPercents[idx]}%
                </span>
              </div>
              <div className="w-full bg-cyan-900 bg-opacity-30 rounded-full h-5">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 h-5 rounded-full transition-all duration-700 shadow"
                  style={{ width: `${animatedPercents[idx]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
