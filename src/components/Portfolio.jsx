import React from 'react';

const projects = [
    {
        name: 'Project 1',
        screenshot: 'https://via.placeholder.com/300',
        stack: ['ReactJS', 'Node.js'],
        description: 'A brief description of Project 1.',
        link: '#'
    },
    {
        name: 'Project 2',
        screenshot: 'https://via.placeholder.com/300',
        stack: ['Java', 'Spring Boot'],
        description: 'A brief description of Project 2.',
        link: '#'
    },
    // Add 3 more projects
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                <div className="overflow-x-scroll whitespace-nowrap">
                    {projects.map(project => (
                        <div key={project.name} className="inline-block w-80 p-4 bg-white rounded-lg shadow-md mx-2 hover:shadow-lg transition-shadow duration-300">
                            <img src={project.screenshot} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 mb-2">
                                {project.stack.join(', ')}
                            </p>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
