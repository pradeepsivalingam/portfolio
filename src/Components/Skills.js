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
  
  return (
    
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
      <p className="text-xl text-center mb-8">My Skills</p>
      <div className="max-w-xl mx-auto space-y-8">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <img src={skill.logo} alt={skill.name} className="w-14 h-14" />
                <span className="font-medium text-lg">{skill.name}</span>
              </div>
              <span className="font-medium text-lg">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-5">
              <div
                className="bg-blue-600 h-5 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}