import React from 'react'
import { testimonialsData } from '../assets/assets'
import star_icon from '../assets/star_icon.svg'
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    className=' flex flex-col justify-center items-center md:px-20 lg:px-32 p-16 container w-full mx-auto overflow-hidden' id='#Projects'>
        <h1 className='text-2xl text-gray-950 sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-6 decoration-1 under text-gray-700 font-light'>Testimonials</span></h1>
        <p className=' text-gray-500 text-center max-w-80 mb-8'>Feels Stories From Those Who Found Some With Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className='max-w-96 border-white rounded shadow-lg px-8 py-12 text-center '>
                    <img className='w-24 h-28 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                    <h2 className='text-2xl text-gray-700 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 text-sm mb-4'>{testimonial.title}</p>
                    <div className='flex justify-center gap-2 mb-3 text-red-600'>
                        {Array.from({length: testimonial.rating},(item,index)=>(
                            
                           <img key={index} src={star_icon} alt="" />
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials