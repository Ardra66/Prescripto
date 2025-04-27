
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      {/* Flex Container */}
      <div className='my-10 flex flex-col md:flex-row gap-12 px-6 md:px-12'>
        {/* Image */}
        <img className='md:w-1/2' src={assets.about_image} alt="about" />

        {/* Text Content */}
        <div className='md:w-1/2 text-gray-700 space-y-4'>
          <p>
            Welcome To Prescripto. Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently. At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className='block mt-4 text-lg'>Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE</span> US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Efficiency:</b>
          <p>Streamilned Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Convenience</b>
          <p>Access To A Network Of Trusted Healthcare Professionals In Your Area</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Personalization</b>
          <p>Tailored Recommnedations And Reminders To Help You Stay On Top Of Your Health</p>
        </div>

      </div>
    </div>
  )
}

export default About
