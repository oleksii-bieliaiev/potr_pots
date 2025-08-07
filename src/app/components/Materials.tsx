import React from 'react'

const Materials = () => {
  return (
    <section
      id='materials'
      className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-0 lg:mb-0 md:mb-40 sm:mb-6 max-sm:mb-10 2xl:mt-15 lg:mt-10'
    >
      <div className='font-bebas z-50 translate-y-[12rem] 2xl:pt-25 lg:pt-0 text-[138.81px] block text-[#03839E] tracking-[0.15em] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-[100vw] sm:w-[80vw] max-sm:w-[80vw] lg:mb-8 md:mb-40 sm:mb-6.5 max-sm:mb-4 max-sm:ml-[34px] max-sm:mr-[34px] '>
        Materials and Features
      </div>
      <div className='bg-cover bg-center min-h-[120vh] bg-no-repeat' style={{
        backgroundImage: "url('/images/Hero.png')",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #F8F8F8 5%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, #F8F8F8 5%)"
      }}>
        <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full '>

        </div>
      </div>
    </section >
  )
}

export default Materials
