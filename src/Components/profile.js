import React from "react";
import Instagram from "../assets/instagram.png"; 
import LinkedIn from "../assets/linkedin.png"; 
import GitHub from "../assets/github.jpeg";
import Gmail from "../assets/gmail.png";
const profile = [
  {
    name: "Instagram",
    URL: "https://www.instagram.com/itzme__pradeep__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: Instagram,
  },
  {
    name: "LinkedIn",
    URL: "https://www.linkedin.com/in/pradeep-sivalingam-27147a229/",
    logo: LinkedIn,
  },
  {
    name: "Github",
    URL: "https://github.com/pradeepsivalingam",
    logo: GitHub,
  },
  {
    name: "Gmail",
    URL: "mailto:pradeepsivalingam09@gmail.com",
    logo: Gmail,
  },
];

export default function Profile() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2">Profile</h2>
      <p className="text-xl text-center mb-8">My Profile</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {profile.map((profile) => (
          <div
            key={profile.name}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <a
              href={profile.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <img src={profile.logo} alt={profile.name} className="w-22 h-22" />
            </a>
            <span className="text-lg font-medium text-center">{profile.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}