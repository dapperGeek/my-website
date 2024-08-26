import React from 'react';

const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'ReactJS', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map(skill => (
                        <div key={skill.name} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <div className="relative pt-1">
                                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold inline-block py-1 px-2 rounded-full text-teal-600 bg-teal-200">
                    {skill.level}%
                  </span>
                                </div>
                                <div className="relative flex mb-6">
                                    <div className="w-full bg-gray-300 rounded-full">
                                        <div className="w-[skill.level%] bg-teal-500 text-xs leading-none py-1 text-center text-white rounded-full">
                                            &nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
