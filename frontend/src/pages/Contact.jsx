
import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm px-5'>
        <img
          className='w-full md:max-w-[400px] object-cover'
          src={assets.contact_image}
          alt='Contact'
        />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold'>OUR OFFICE</p>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132 <br />
            Email: doctorscripto@gmail.com
          </p>
          <p className='font-semibold'>Careers at PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
