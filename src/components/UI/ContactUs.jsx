import React from 'react'

const ContactUs = () => {
  return (
    <div className='mt-10 mb-10 bg-white h-[300px] flex items-center justify-center rounded-xl'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-3'>Contact Us</h1>
        <span className='font-light'>Get the latest product updates, news, and special offers delivered right to your inbox</span>
        <form className='flex items-center justify-center mt-5'>
          <input
          type="email" 
          name="email"
          placeholder='Enter your email'
          required
          className='bg-white border border-2 mr-2 rounded-md px-3 py-2'
          />
            <button className='border border-2 rounded-md px-7 py-2 bg-gray-700 text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs