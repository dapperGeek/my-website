import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
