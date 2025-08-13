import Image from 'next/image'
import React from 'react'
import ToggleBox from './ToggleBottom'

const Materials = () => {
  return (
    <section
      id='materials'
      className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-0 lg:mb-0 md:mb-40 sm:mb-6 max-sm:mb-10 2xl:mt-15 lg:mt-10'
    >
      <div className='font-bebas z-50 2xl:translate-y-[8rem] lg:translate-y-[12rem] 2xl:pt-25 lg:pt-0 text-[138.81px] block text-[#03839E] leading-[1.2] tracking-[0.10em] lg:pr-0 lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-[90vw] sm:w-[80vw] max-sm:w-[80vw] lg:mb-8 md:mb-40 sm:mb-6.5 max-sm:mb-4 max-sm:ml-[34px] max-sm:mr-[34px] '>
        Materials and <br></br>Features
      </div>
      <div className='flex font-sans flex-col absolute w-[470px]  2xl:top-[400px] lg:right-[134px] lg:top-[350px] text-[#4F4F4F]'>
        <p className='text-[20px] pb-4 font-bold'>Environmentally friendly</p>
        <p className="z-10 max-w-3xl md:text-[16px] leading-[1.5] ">
          All materials used in our pots are made from 100% recycled materials and are 100% recyclable at the end of life (should you ever choose to get rid of your POTR!). All materials have been sourced from within Europe to reduce our carbon footprint when transporting the raw materials, and all manufacturing is carried out in the UK.
        </p>
      </div>

      <div className='bg-cover bg-center min-h-[120vh] bg-no-repeat' style={{
        backgroundImage: "url('/images/Hero.png')",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #F8F8F8 7%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, #F8F8F8 7%)"
      }}>
        <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full '>

        </div>
      </div>
      <ToggleBox />
    </section >
  )
}

export default Materials
