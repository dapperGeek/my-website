import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 mb-4 border rounded-lg"/>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-2 mb-4 border rounded-lg"/>
                    <textarea placeholder="Your Message" className="w-full px-4 py-2 mb-4 border rounded-lg"></textarea>
                    <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
