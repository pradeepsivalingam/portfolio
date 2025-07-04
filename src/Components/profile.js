import React from 'react';
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.jpeg";
import Gmail from "../assets/gmail.png";
import BgImage from "../assets/int.jpg"; // Background image

// ----------------------------
// Profile Data
// ----------------------------
const profile = [
  {
    name: "Instagram",
    URL: "https://www.instagram.com/itzme__pradeep__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    logo: Instagram,
  },
  {
    name: "LinkedIn",
    URL: "https://www.linkedin.com/in/pradeep-s-27147a229/",
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

// ----------------------------
// Profile Component
// ----------------------------
export function Profile() {
  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h2 className="text-3xl text-white font-bold text-center mb-2">Profile</h2>
      <p className="text-xl text-white text-center mb-8">My Profile</p>

      <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
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
              <img
                src={profile.logo}
                alt={`${profile.name} logo`}
                className="w-20 h-20"
              />
            </a>
            <span className="text-lg font-medium text-center">{profile.name}</span>
          </div>
          
        ))}
      </div>
    </section>
  );
}
export default Profile;
