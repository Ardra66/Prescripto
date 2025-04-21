// import React from 'react'
// import {assets} from '../assets/assets'

// const HeaderSection = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-0'>
//         {/*------------Leftside---------*/}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[-30]'>
//             <p className='text-3xl md:text-4xl lg:text-5xl text-white front-semibond leading-tight md:leading-tight lg:leading-tight'>
//                 Book Appointment<br/> With Trusted Doctors
//             </p>

//             <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                 <img className='w-28' src ={assets.group_profiles} alt=''/>

//                 <p>
//                     Simply browse through our extensive list of trusted doctors, <br/>schedule your appointment hassle-free.
//                 </p>
//             </div>
//             <a href ="">Book Appointment <img src={assets.arrow_icon} alt="" />

//             </a>
//         </div>

//         {/*----------right side-------------*/}

//         <div className='md:w-1/2 flex justify-center items-center'>
//             <img className='w-[90%] max-w-md md:w-full h-auto rounded-lg object-contain' src={assets.header_img} alt="" />

//         </div>
//     </div>
//   )
// }

// export default HeaderSection


import React from 'react'
import { assets } from '../assets/assets'

const HeaderSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between bg-primary rounded-lg px-6 md:px-16 py-12'>

      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-white'>
        <p className='text-4xl md:text-5xl font-semibold leading-tight'>
          Book Appointment<br />With Trusted Doctors
        </p>

        <div className='flex items-center gap-4 text-sm'>
          <img className='w-28' src={assets.group_profiles} alt='group profiles' />
          <p className='font-light'>
            Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
          Book Appointment 
          <img className='w-3' src={assets.arrow_icon} alt='arrow icon' />
        </a>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 flex justify-center mt-10 md:mt-0'>
        <img 
          className='w-full max-w-md object-contain' 
          src={assets.header_img} 
          alt='header'
        />
      </div>
    </div>
  )
}

export default HeaderSection
