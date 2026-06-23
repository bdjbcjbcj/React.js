import React from 'react'
import brand_img from '../assets/brand_img.png';
import { motion } from "framer-motion"
function About() {
  return (
    <motion.div
     initial={{ opacity: 0, x: 200}}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    
    className='flex flex-col items-center justify-center container mx-auto w-full p-14 md:px-20 lg:px-32 overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span 
        className='underline underline-offset-4 decoration-1 under font-light'>
            Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate our properties,dedicated to his vision.</p>
        <div className='flex flex-col items-center gap-30 sm:flex-row md:items-start md:gap-20'>
            <img src={brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 p-4 text-gray-500 shadow-md '>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full'>
                    <div>
                        <h1 className='text-4xl font- text-gray-800'>10+</h1>
                        <p>Years Of Exellence</p>
                    </div>
                      <div>
                        <h1 className='text-4xl font- text-gray-800'>20+</h1>
                        <p>Projects Completed</p>
                    </div>
                      <div>
                        <h1 className='text-4xl font- text-gray-800'>30+</h1>
                        <p>Years Of Exellence</p>
                    </div>
                      <div>
                        <h1 className='text-4xl font- text-gray-800'>40+</h1>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus eligendi iure itaque ipsum suscipit culpa magni blanditiis, sequi earum facilis quasi, cumque saepe, accusantium velit perferendis eum laudantium explicabo!</p>
                <button className='bg-blue-500 text-white px-8 py-3 rounded cursor-pointer'>Learn more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About