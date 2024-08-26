import React from 'react';
import { FaReact, FaJava, FaPhp, FaHtml5, FaCss3 } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:flex-nowrap">
                    {/* Left Column */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-lg leading-relaxed">
                            I am a full-stack software engineer with extensive experience in developing scalable web applications.
                            My expertise lies in leveraging modern technologies such as ReactJS, Java Spring Boot, and various other tools
                            to deliver high-quality solutions. I am passionate about continuous learning and staying updated with the latest trends in technology.
                        </p>
                    </div>
                    {/* Right Column */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Key Skills</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="flex items-center space-x-2">
                                <FaReact className="text-blue-500 text-2xl" />
                                <span>ReactJS</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaJava className="text-red-600 text-2xl" />
                                <span>Java</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaPhp className="text-blue-700 text-2xl" />
                                <span>PHP</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaHtml5 className="text-orange-500 text-2xl" />
                                <span>HTML5</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaCss3 className="text-blue-500 text-2xl" />
                                <span>CSS3</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
