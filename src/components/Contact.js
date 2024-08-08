import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
