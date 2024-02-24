import React from 'react'
import ContactUs from './ContactUs'

const LoadMorePost = () => {
  return (
    <>
        <h1 className='text-2xl font-bold mb-5'>Newest from Brgy Events</h1>
        <div className='flex align-center justify-center gap-2'>
          <div>
            <img src="../public/images/bg-hero.png" alt="" className='h-72 w-72 rounded'/>
            <span className='font-light'>Health Care &#9702; 19 min read </span>
            <h1 className='text-xl font-bold uppercase mt-2 mb-6'>Lorem ipsum</h1>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, aperiam.</p>
            <span className='font-light'>John Doe &#9702; Apr,22 2022 </span>
          </div>
          <div>
            <img src="../public/images/bg-hero.png" alt="" className='h-72 w-72 rounded'/>
            <span className='font-light'>Wellness &#9702; 9 min read </span>
            <h1 className='text-xl font-bold uppercase mt-2 mb-6'>Lorem ipsum</h1>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, aperiam.</p>
            <span className='font-light'>John Doe &#9702; Apr,22 2022 </span>
          </div>
          <div>
            <img src="../public/images/bg-hero.png" alt="" className='h-72 w-72 rounded'/>
            <span className='font-light'>Food &#9702; 20 min read </span>
            <h1 className='text-xl font-bold uppercase mt-2 mb-6'>Lorem ipsum</h1>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, aperiam.</p>
            <span className='font-light'>John Doe &#9702; Apr,22 2022 </span>
          </div>
          <div>
            <img src="../public/images/bg-hero.png" alt="" className='h-72 w-72 rounded'/>
            <span className='font-light'>Lifestyle &#9702; 25 min read </span>
            <h1 className='text-xl font-bold uppercase mt-2 mb-6'>Lorem ipsum</h1>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, aperiam.</p>
            <span className='font-light'>John Doe &#9702; Apr,22 2022 </span>
          </div>
        </div>
        <ContactUs />
    </>
  )
}

export default LoadMorePost