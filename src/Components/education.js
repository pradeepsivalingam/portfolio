import React from 'react';
import bgImage from '../assets/educ.png'; // ✅ Adjust path as needed

const educationData = [
    {
        institution: 'V.S.B College of engineering Technical Campus',
        degree: 'Bachelor of Engineering',
        stream: 'Computer Science and Engineering',
        year: '2021 - 2025',
        details: 'Graduated with honors. Relevant coursework: Algorithms, Data Structures, Web Development.'
    },
    {
        institution: 'Govt Higher Secondary School, Krishnapuram',
        degree: 'HSC',
        year: '2020 - 2021',
        details: 'BIO-Maths Stream'
    },
    {
        institution: 'Sri Ram Matric Higher Secondary School',
        degree: 'SSLC',
        year: '2019 - 2020',
    },
];

const Education = () => (
    <section
        className="py-12 bg-cover bg-center"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: 'fixed', // optional parallax effect
        }}
    >
        <div className="bg-white bg-opacity-80 max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
            <p className="text-xl text-center mb-8">My Academic Journey</p>
            <div className="space-y-6">
                {educationData.map((edu, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                        <p className="text-md font-medium mb-1">
                            {edu.degree}<br />
                            {edu.stream && (
                                <span className="text-gray-600">{edu.stream}</span>
                            )}{' '}
                            <span className="text-gray-500">| {edu.year}</span>
                        </p>
                        {edu.details && (
                            <p className="text-gray-700">{edu.details}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
