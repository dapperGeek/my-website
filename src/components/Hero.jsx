import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h2>
            <p className="text-xl mb-6">Full Stack Software Engineer</p>
            <a href="#portfolio" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">View My Work</a>
        </section>
    );
};

export default Hero;
