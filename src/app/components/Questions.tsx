import React from 'react'

const Questions = () => {
  return (
    <section id='second_order' className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-10 md:mb-20 sm:mb-6 md:mt-0 sm:mt-25 max-sm:mt-25 max-sm:mb-10 lg:mt-0'>
       <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-0 sm:pr-[34px] max-sm:pr-0  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <div
          className="md:block sm:block max-sm:hidden
          absolute top-0 left-0 z-0
          border-t-[554px] border-l-[88vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent

          lg:border-l-[89vw] lg:border-b-[206px]
        "
        />

        <div className='md:block z-100 font-bebas text-[36px] sm:col-start-1 sm:col-span-5 max-sm:col-start-1 max-sm:col-span-2 leading-[1.5] tracking-[0.15em] md:w-[700px] lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          have any questions?
        </div>
      </div>
    </section>
  )
}

export default Questions
