import React, { useState } from 'react'
import { motion } from "framer-motion";

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  }
  return (
   <motion.div
   initial={{ opacity: 0, x:-200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
   className='flex flex-col items-center justify-center md:px-20 lg:px-32 p-16 container w-full mx-auto overflow-hidden' id='#Projects'>
        <h1 className='text-2xl text-gray-950 sm:text-4xl font-extrabold mb-2 text-center'>Contact <span className='underline underline-offset-6 decoration-1 under text-gray-700 font-light'>With Us</span> </h1>
        <p className=' text-gray-500 text-center max-w-80 mb-8'>Ready to Make a Move?Let's Biuld Your Future Together</p>
    <div className="w-3/4 mx-auto p-8 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 h-44 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
      </form>
    </div>
     <button
          type="submit"
          className="bg-blue-600 text-white px-14 py-3 mt-5 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
    </motion.div>
  )
}

export default Contact