import * as React from 'react'
import { Link,useLocation  } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { ProviderContext } from '../../context/Provider';





const Footer = () => {

  const {name, setName} = React.useContext(ProviderContext)
  const menuStyle = 'px-10 py-5 text-center text-white'
  const location = useLocation();
  const currentPath = location.pathname;
  
  const menuList = [
    {
      url: '/',
      label: 'Home'
    },
    {
      url: '/events',
      label: 'Events'
    },
    {
      url: '/aboutUs',
      label: 'About Us'
    },
    {
      url: '/contactUs',
      label: 'Contact Us'
    },
    {
      url: '/Login',
      label: 'Login'
    },

  ]

  return (
      <footer className='px-20 py-10 border-t-2	bg-white'>
        <div className='flex justify-between px-4'>
          <div className='w-[30%]'>
            <img src="../public/images/logo.png" alt="logo ng barangay" className='block size-36 ml-28' />
            <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, dolor. Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
            <p className='mt-5'><span>&copy;</span>2024 Your Company. All rights reserved. Terms of service * Privacy Policy</p>  
          </div>
          <div className='w-[20%]'>
            <h1 className='uppercase text-xl text-center font-semibold'>Lorem Ipsum</h1>
            <div className='mt-10 uppercase pl-2'>
            <input type="button" value="Lorem Ipsum" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            <input type="button" value="Lorem" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            <input type="button" value="Lorem" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            <input type="button" value="Lorem" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            <input type="button" value="Lorem Ipsum" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            <input type="button" value="Lorem" className="bg-white-300 rounded-full px-3 py-2 mr-2 text-sm break-normal mt-1" />
            </div>
          </div>
          <div className='flex flex-col w-[20%]'>
          <h1 className='uppercase mb-10 text-xl text-center font-semibold'>Social</h1>
            <div className='flex items-center'>
              <span className='mr-3'><FaXTwitter /></span>
              <p>Twitter</p>
            </div>
            <div className="flex items-center">
              <span className="mr-3"><FaFacebookSquare /></span>
              <p>Facebook</p>
            </div>
            <div className="flex items-center">
              <span className="mr-3"><FaInstagram /></span>
              <p>Instagram</p>
            </div>
            <div className="flex items-center">
              <span className="mr-3"><FaYoutube /></span>
              <p>Youtube</p>
            </div>
          </div>

          <div className='w-[20%]'>
            <h1 className='font-semibold uppercase text-xl text-center'>About</h1>
            <div className='mt-10'>
              <p>Home</p>
              <p>Events</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Login</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer