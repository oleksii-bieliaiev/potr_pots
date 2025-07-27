import Image from 'next/image'
import React from 'react'

const ForWhom = () => {
  return (
    <section id='for_whom' className='relative flex flex-col min-h-[50vw] 2xl:mb-10 md:mb-20 sm:mb-6 max-sm:mb-10 lg:mt-0 md:mt-20 max-sm:pt-28 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className='font-bebas text-[36px] block tracking-[0.15em] w-[500px] lg:mb-8 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          For Whom?
        </div>

        <div className="hidden lg:block group absolute 2xl:top-[80px] lg:top-[100px] 2xl:right-[110px] lg:right-[130px] z-50 cursor-pointer transition-all duration-300">
          <div className="transition-transform duration-300 group-hover:translate-y-1 group-hover:opacity-80">
            <Image
              src="/images/helper.svg"
              alt="more about"
              width={14}
              height={144}
              className="object-cover"
            />
          </div>
        </div>

        <div className='lg:col-start-1 lg:col-span-5 md:col-start-1 md:col-span-3 md:block sm:hidden max-sm:hidden'>
          <Image
            src="/images/pot1.svg"
            alt="pot title"
            width={450}
            height={450}
            className='object-contain 2xl:w-[500px] 2xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[284px] md:h-[284px] max-sm:w-[100vw] max-sm:h-[320px]'
          />
        </div>
        <div className='hidden lg:flex lg:col-start-7 lg:col-span-1 font-sans flex-col items-center justify-center text-start gap-2'>
          <p className='translate-x-8 translate-y-[-5.8rem]'>
            *
          </p>
          <Image
            src="/images/1.svg"
            alt="1"
            width={33}
            height={60}
            className='translate-y-[-3.8rem]'
          />
        </div>
        <div className="lg:col-start-8 lg:col-span-5 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-6 max-sm:col-start-1 max-sm:col-span-2 font-sans flex flex-col items-start justify-center text-start gap-2">
          <p className='lg:pb-10 md:inline sm:hidden max-sm:hidden'>
            <p className='lg:hidden md:inline-block translate-x-[-1rem]'>*</p>
            Robust
          </p>
          <Image
            src="/images/1.svg"
            alt="1"
            width={33}
            height={60}
            className='lg:hidden md:flex max-sm:flex md:translate-x-[-3.2rem] md:translate-y-[3.1rem] md:mb-0 sm:mb-6.5 max-sm:mb-6.5'
          />
          <p className="font-bebas md:text-[36px] sm:text-[36px] max-sm:text-[36px] tracking-[0.15em] md:after-icon pb-2.5 ">
            For those who value <br className='max-sm:hidden'></br>durable things
          </p>
          <p className='font-sans text-[#4F4F4F] lg:text-[16px] md:text-[15px] sm:text-[16px] max-sm:text-[16px] leading-[1.5]'>
            Don’t worry if you happen to knock your POTR on <br className='md:inline sm:hidden max-sm:hidden'></br>
            the floor, unlike a traditional ceramic pot it will take
            <br className='md:inline sm:hidden max-sm:hidden'></br>the fall in its stride.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ForWhom
