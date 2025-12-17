import Image from 'next/image'
import React from 'react'

const SecondOrder = () => {
  return (
    <section id='second_order' className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-10 md:mb-0 sm:mb-6 md:mt-0 sm:mt-25 max-sm:mt-25 max-sm:mb-10 lg:mt-0'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-4 lg:gap-y-2 md:gap-x-8 sm:gap-x-8 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:mt-0 lg:pr-[134px] lg:pl-0 md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className="lg:block md:hidden sm:hidden relative lg:col-start-1 lg:col-span-6 max-sm:hidden">

          <div>
            <Image
              src="/images/Photos.svg"
              alt="pot title"
              width={663}
              height={460}
              className='object-cover 2xl:w-[40vw] md:mb-7.5 max-sm:mb-6'
            />
          </div>

        </div>


        <div className="relative 2xl:mt-46 lg:mt-32 md:mt-20 lg:col-start-7 lg:col-span-3 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 md:block md:mb-0 sm:mb-12 max-sm:mb-4">
          <div className='flex w-[290px] max-sm:w-[80vw] gap-2.5 items-start mb-10'>
            <Image
              src="/images/Dot.svg"
              alt="pot title"
              width={7}
              height={7}
              className='object-cover lg:w-[8px] lg:h-[8px] mt-6'
            />
            <div>
              <p className="mb-2.5 font-bold font-sans text-[#333333] leading-[1.5] 2xl:text-[36px] text-[32px]">
                Easy assembly
              </p>
              <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
                Pull the draw string to assemble!
              </p>
            </div>
          </div>



          <div className='flex w-[290px] max-sm:w-[80vw] gap-2.5 items-start lg:mb-15 md:mb-10 sm:mb-10 max-sm:mb-10'>
            <Image
              src="/images/Dot.svg"
              alt="pot title"
              width={7}
              height={7}
              className='object-cover lg:w-[8px] lg:h-[8px] mt-6'
            />
            <div>
              <p className="mb-2.5 font-bold font-sans text-[#333333] leading-[1.5] 2xl:text-[36px] text-[32px]">
                Self-watering
              </p>
              <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
                Add water to POTR and watch your plant drink!
              </p>
            </div>
          </div>

          <div className='lg:hidden flex w-[290px] max-sm:w-[80vw] gap-2.5 items-start mb-15'>
            <Image
              src="/images/Dot.svg"
              alt="pot title"
              width={7}
              height={7}
              className='object-cover lg:w-[8px] lg:h-[8px] mt-6'
            />
            <div>
              <p className="mb-2.5 font-bold font-sans text-[#333333] leading-[1.5] 2xl:text-[36px] text-[32px]">
                Flat pack <br className='md:hidden lg:hidden sm:hidden max-sm:flex'></br> postage
              </p>
              <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
                POTR pots arrive flat packed in an envelope!
              </p>
            </div>
          </div>

          <div className="w-full lg:flex md:hidden sm:hidden max-sm:flex max-sm:justify-center flex-col items-start max-sm:items-center lg:mt-[20px] md:mt-[50px] sm:mt-[50px] max-sm:mt-[20px] max-sm:pb-5 lg:pr-0 md:pr-[90px] z-10">
            <button className="lg:w-[238px] md:w-[240px] sm:w-[240px] max-sm:w-full h-[48px] border max-sm:bg-[#FFE339] border-[#03839E] max-sm:border-[#FFE339] max-sm:hover:bg-[#FFEC7A] hover:bg-[#03839E] tracking-[0] font-sans cursor-pointer font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors duration-300">
              BUY NOW  <span className=" ml-2">⟶</span>
            </button>
          </div>

          <div className='items-end justify-end lg:flex md:hidden sm:hidden w-[490px] max-sm:w-[80vw] gap-2.5 mt-12 max-sm:mt-5'>
            <div>
              <p className="mb-2.5 font-bebas text-[#EB5757] tracking-[0.155em] leading-[150%] text-[36px]">
                50% off
              </p>
              <p className="font-bebas text-[#03839E] tracking-[0.155em] leading-[24px] text-[24px] ">
                Get the second order in half price
              </p>
            </div>
          </div>

        </div>

        <div className="relative lg:block md:hidden sm:hidden 2xl:mt-46 mt-32 2xl:translate-x-[0]  lg:translate-x-[-1rem] 2xl:ml-auto lg:col-start-10 lg:col-span-3 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-2 max-sm:hidden md:mb-0 sm:mb-12 max-sm:mb-4">
          <div className='flex 2xl:w-[390px] w-[320px] gap-2.5 2xl:justify-start'>
            <Image
              src="/images/Dot.svg"
              alt="pot title"
              width={7}
              height={7}
              className='object-cover lg:w-[8px] lg:h-[8px] mt-6'
            />
            <div>
              <p className="mb-2.5 font-bold font-sans text-[#333333] leading-[1.5] 2xl:text-[36px] text-[32px]">
                Flat pack postage
              </p>
              <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
                POTR pots arrive flat packed in an envelope!
              </p>
            </div>
          </div>
        </div>


        <div className="relative mt-32 lg:hidden md:block max-sm:hidden md:col-start-4 md:col-span-2 sm:col-start-4 sm:col-span-3 ">
          <div className="w-full lg:hidden md:flex flex-col md:items-start lg:mt-[20px] md:mt-[70px] sm:mt-[20px] max-sm:mt-[20px] max-sm:pb-5 lg:pr-0 md:pr-[90px] z-10">
            <button className="lg:w-[238px] md:w-[240px] sm:w-[240px] max-sm:w-full h-[48px] border border-[#03839E] hover:bg-[#03839E] tracking-[0] font-sans cursor-pointer font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors duration-300 sm:ml-auto">
              BUY NOW  <span className=" ml-2">⟶</span>
            </button>
          </div>

          <div className='items-end justify-end flex w-[240px] gap-2.5 mt-12 sm:ml-auto'>
            <div>
              <p className="mb-2.5 font-bebas text-[#EB5757] tracking-[0.155em] leading-[150%] text-[24px]">
                50% off
              </p>
              <p className="font-bebas text-[#03839E] tracking-[0.155em] leading-[24px] text-[18px]">
                Get the second order in half price
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative mt-22 lg:hidden md:flex sm:hidden  max-sm:hidden justify-end md:col-start-6 md:col-span-1">
          <a 
          href='#features'
          className="block cursor-pointer transition-transform duration-300 hover:translate-y-1 hover:opacity-80">
            <Image
              src="/images/Line_2.svg"
              alt="line_2"
              width={14}
              height={211}
              className="object-cover w-[14px] h-[211px]"
            />
          </a>

        </div>

      </div>
    </section>
  )
}

export default SecondOrder
