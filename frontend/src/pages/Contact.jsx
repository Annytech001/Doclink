import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + feedback);
    setFeedback('');
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>64, Lekki Phase 1 <br />Lagos, Nigeria</p>
          <p className=' text-gray-500'>Tel: (802) 788-01<br /> Email: doclink@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT DOCLINK</p>
          <p className=' text-gray-500'>Come Work With Us!.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Search Jobs</button>
        </div>
      </div>
      
      {/* Feedback Form */}
      <div className='max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg'>
        <h2 className='text-lg font-semibold text-gray-700 mb-4'>We value your feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
            rows='4'
            placeholder='Write your feedback here...'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <button
            type='submit'
            className='mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-300'
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
