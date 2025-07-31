import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import ProductInfoBlock from './ProductInfoBlock'

const Header = () => {
  return (
    <section id='header' className='relative flex flex-col lg:min-h-auto md:max-h-[125vh] max-sm:min-h-auto w-[100vw] lg:mb-10 md:mb-30 sm:mb-20 max-sm:mb-40'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-0 sm:pr-[34px] max-sm:pr-0  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <div
          className="md:block sm:block max-sm:hidden
          absolute top-0 left-0 z-0
          border-t-[184px] border-l-[80vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent

          lg:border-l-[73vw] lg:border-b-[306px]
        "
        />
        <Navbar />
        <div className="group lg:col-start-1 lg:col-span-1 md:col-start-1 cursor-pointer md:col-span-1 flex flex-col items-start lg:justify-end md:justify-end sm:justify-end max-sm:bottom-[-2rem] max-sm:z-50 max-sm:right-3 lg:mt-10 lg:relative md:absolute sm:absolute max-sm:absolute ml-0 gap-2 mr-auto z-10 2xl:pb-10
         lg:pb-20 2xl:bottom-[-3rem] lg:bottom-[-5rem] md:bottom-[-1rem] sm:bottom-0 transition-all duration-300">
          <div className="transition-transform duration-300 group-hover:translate-y-1 group-hover:opacity-80">
            <Image
              src="/images/more_about.svg"
              alt="more about"
              width={10}
              height={132}
              className="object-cover"
            />
          </div>

          <div className="transition-transform duration-300 group-hover:translate-y-1 group-hover:opacity-80">
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              width={10}
              height={44}
              className="object-cover"
            />
          </div>
        </div>
        <div className='max-sm:hidden lg:col-start-2 lg:col-end-6 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-3' >
          <ProductInfoBlock />
        </div>

        <div className='lg:col-start-[7] lg:col-span-6 md:col-start-4 md:col-span-3 sm:col-start-4 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-2 flex flex-col items-end lg:justify-start 2xl:mt-12 lg:mt-15 max-sm:mt-6 max-sm:mb-7 md:relative  mr-0 z-10'>
          <Image
            src="/images/pot_title.svg"
            alt="pot title"
            width={450}
            height={450}
            className='object-contain 2xl:w-[500px] 2xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[306px] md:h-[306px] max-sm:w-full max-sm:h-full'
          />
        </div>

        <div className='hidden max-sm:block max-sm:col-start-1 max-sm:col-span-2 '>
          <ProductInfoBlock />
        </div>

      </div>
    </section>
  )
}

export default Header
