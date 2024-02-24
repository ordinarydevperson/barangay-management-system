import React from 'react'

const Modal = ({children, handleOnClick}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70' onClick={handleOnClick}>
      <div className='bg-white w-[50%] h-[50%] translate-x-[50%] translate-y-[50%] overflow-auto'>
      {children}
      </div>
      
    </div>
  )
}

export default Modal