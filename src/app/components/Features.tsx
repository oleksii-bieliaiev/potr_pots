import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id='features' className='relative flex flex-col min-h-[50vw] 2xl:mb-10 md:mb-20 sm:mb-6 max-sm:mb-10 lg:mt-0 md:mt-20 max-sm:pt-12 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className='font-bebas md:text-[58px] sm:text-[56px] max-sm:text-[56px] flex tracking-[0.15em] md:w-[800px] lg:mb-12 md:mb-10.5 sm:mb-6.5 max-sm:mb-4 '>
          <p>
            <span className="turquoise-text ">potr&nbsp;pots </span>
            <span className="outline-text ">features</span>
          </p>
        </div>
        <div className='lg:col-start-1 lg:col-span-12 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-6 max-sm:col-start-1 max-sm:col-span-2 md:flex justify-between w-full'>
          <div >
            <Image
              src="/images/Feature_1.svg"
              alt="pot title"
              width={370}
              height={370}
              className='object-contain 2xl:w-[390px] 2xl:h-[390px] lg:w-[330px] lg:h-[330px] md:w-[220px] md:h-[220px] sm:w-[100vw] sm:h-[100vw] max-sm:w-[100vw] max-sm:h-[100hw] md:mb-7.5 max-sm:mb-6'
            />
            <div className='flex items-center flex-col justify-center 2xl:w-[370px] lg:w-[330px] md:w-[220px]'>
              <p className="font-bebas text-center text-[24px] tracking-[0.15em] md:after-icon pb-2.5 ">
                Flat pack postage
              </p>
              <p className="font-sans text-center text-[#4F4F4F] text-[16px] leading-[1.5] md:pb-2.5 sm:pb-15 max-sm:pb-15 ">
                The pots will be shipped flat packed so they can be slipped through your letter box
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/Feature_2.svg"
              alt="pot title"
              width={370}
              height={370}
              className='object-contain 2xl:w-[390px] 2xl:h-[390px] lg:w-[330px] lg:h-[330px] md:w-[220px] md:h-[220px] sm:w-[100vw] sm:h-[100vw] max-sm:w-[100vw] max-sm:h-[100hw] md:mb-7.5 max-sm:mb-6'
            />
            <div className='flex items-center flex-col justify-center 2xl:w-[370px] lg:w-[330px] md:w-[220px]'>
              <p className="font-bebas text-center text-[24px] tracking-[0.15em] md:after-icon pb-2.5 ">
                Easy assembly
              </p>
              <p className="font-sans text-center text-[#4F4F4F] text-[16px] leading-[1.5] md:pb-2.5 sm:pb-15 max-sm:pb-15">
                POTR Pots are super easy (and super satisfying) to assemble using the quick draw cotton cord
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/Feature_3.svg"
              alt="pot title"
              width={370}
              height={370}
              className='object-contain 2xl:w-[390px] 2xl:h-[390px] lg:w-[330px] lg:h-[330px] md:w-[220px] md:h-[220px] sm:w-[100vw] sm:h-[100vw] max-sm:w-[100vw] max-sm:h-[100hw] md:mb-7.5 max-sm:mb-6'
            />
            <div className='flex items-center flex-col justify-center 2xl:w-[370px] lg:w-[330px] md:w-[220px]'>
              <p className="font-bebas text-center text-[24px] tracking-[0.15em] md:after-icon pb-2.5 ">
                Self-watering
              </p>
              <p className="font-sans text-center text-[#4F4F4F] text-[16px] leading-[1.5] md:pb-2.5 sm:pb-15 max-sm:pb-15 ">
                Simply add water into the pot — if your plant is thirsty it will automatically start drinking the water through the cotton cord. Magic!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features
