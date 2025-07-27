import Image from 'next/image'
import React from 'react'

const ForWhomSecond = () => {
  return (
    <section id='header' className='relative flex flex-col min-h-[80vw] md:mb-8 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[0px] lg:mt-[0px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-[34px] sm:pr-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto'>

        <div className="hidden lg:block group absolute bottom-[44px] left-[135px] z-50 cursor-pointer transition-all duration-300">
          <div className="transition-transform duration-300 group-hover:translate-y-1 group-hover:opacity-80">
            <Image
              src="/images/helper_2.svg"
              alt="more about"
              width={14}
              height={144}
              className="object-cover"
            />
          </div>
        </div>

        <div className='lg:col-start-2 lg:col-span-3 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-6 max-sm:col-start-1 max-sm:col-span-2 flex lg:flex-col md:flex-row-reverse lg:justify-normal md:justify-between 2xl:mt-[7.5rem] lg:mt-40 lg:mb-0 md:mb-18 '>
          <Image
            src="/images/pot2.svg"
            alt="pot title"
            width={300}
            height={417}
            className='object-contain 2xl:w-[300px] 2xl:h-[400px] lg:w-[300px] lg:h-[400px] md:w-[300px] md:h-[417px] max-sm:w-[100vw] max-sm:h-[320px] md:block sm:hidden max-sm:hidden '
          />

          <div className=" font-sans flex flex-col items-start justify-start text-start ">
            <div className="flex lg:items-start 2xl:mt-10 lg:mt-0 md:mt-5 lg:gap-[40px] md:gap-[20px] lg:justify-start md:justify-end lg:translate-x-[-3rem] md:translate-x-[-5rem] md:w-full md:flex sm:hidden max-sm:hidden">
              <p className='translate-y-1'>*</p>
              <p className="pb-10">Beautiful</p>
            </div>
            <Image
              src="/images/2.svg"
              alt="1"
              width={33}
              height={60}
              className='mb-7'
            />
            <p className="font-bebas md:text-[36px] sm:text-[36px] max-sm:text-[36px] md:min-w-[330px] tracking-[0.15em] md:after-icon pb-2.5 ">
              For those who love<br className='md:inline sm:hidden max-sm:hidden'></br>modern design
            </p>
            <p className='font-sans text-[#4F4F4F] md:min-w-[400px] lg:text-[16px] md:text-[15px] sm:text-[16px] max-sm:text-[16px] leading-[1.5] pb-10'>
              We strived to achieve something that would look <br className='md:inline sm:hidden max-sm:hidden'></br>
              beautiful in your home while being incredibly <br className='md:inline sm:hidden max-sm:hidden'></br>
              functional and intuitive to use.
            </p>
          </div>
        </div>

        <div className='lg:col-start-7 lg:col-span-6 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-6 max-sm:col-start-1 max-sm:col-span-2 flex lg:flex-col md:flex-row lg:items-end md:items-center '>
          <Image
            src="/images/pot3.svg"
            alt="pot title"
            width={470}
            height={670}
            className='object-contain 2xl:w-[540px] 2xl:h-[670px] lg:w-[470px] lg:h-[670px] md:w-[284px] md:h-[405px] max-sm:w-[100vw] max-sm:h-[320px] md:block sm:hidden max-sm:hidden'
          />

          <div className=" font-sans flex flex-col items-start justify-start text-start ">
            <div className="hidden lg:flex items-start mt-10 gap-[40px] 2xl:translate-x-[-3rem] lg:translate-x-[-3rem] ">
              <p className='translate-y-1'>*</p>
              <p className="pb-10">Saves time</p>
            </div>
            <div className="flex md:flex-row sm:flex-col max-sm:flex-col items-start 2xl:gap-[70px] lg:gap-[40px] md:gap-[20px] lg:translate-x-0 md:translate-x-6 ">
              <Image
                src="/images/3.svg"
                alt="1"
                width={33}
                height={60}
                className='lg:translate-y-[-0.3rem] md:translate-y-[4.8rem] mb-7'
              />
              <div className='2xl:translate-x-0 lg:translate-x-6 '>
                <div className="lg:hidden md:flex items-start mt-10 gap-[20px] md:translate-x-[-2rem] sm:hidden max-sm:hidden">
                  <p className='translate-y-1'>*</p>
                  <p className="pb-4">Saves time</p>
                </div>
                <p className="hidden lg:block font-bebas md:text-[36px] min-w-[330px] tracking-[0.15em] after-icon-second pb-2.5 ">
                  For those who don't<br></br>
                  have enough time to<br></br>
                  regular water indoor<br></br>
                  plants
                </p>
                <p className="lg:hidden md:block font-bebas md:text-[36px] sm:text-[36px] max-sm:text-[36px] min-w-[330px] tracking-[0.15em] md:after-icon-second pb-2.5 ">
                  For those who<br className='md:inline sm:hidden max-sm:hidden'></br>
                  don't have enough<br className='md:inline sm:hidden max-sm:hidden'></br>
                  time to regular <br className='md:inline sm:hidden max-sm:hidden'></br>
                  water indoor<br className='md:inline sm:hidden max-sm:hidden'></br>
                  plants
                </p>
                <p className='font-sans text-[#4F4F4F] md:min-w-[400px] max-sm:w-[calc(100vw-68px)] lg:text-[16px] md:text-[15px] sm:text-[16px] max-sm:text-[16px] leading-[1.5] pb-10'>
                  Water is drawn up through the cotton by the plant <br className='md:inline sm:hidden max-sm:hidden'></br>
                  using tried and tested wicking technology. It’s <br className='md:inline sm:hidden max-sm:hidden'></br>
                  particularly useful if you aren’t able to water them <br className='md:inline sm:hidden max-sm:hidden'></br>
                  yourself on a regular basis!
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default ForWhomSecond
