import React from 'react'

const Section = ({children, styles}) => {
  return (
    <>
      <section className={`container h-[610px] w-full px-20 ${styles}`}>{children}</section>
    </>
  )
}

export default Section