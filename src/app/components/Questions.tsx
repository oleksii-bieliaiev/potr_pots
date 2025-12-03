import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

const Questions = () => {
  return (
    <section id='second_order' className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-10 md:mb-20 sm:mb-6 md:mt-0 sm:mt-25 max-sm:mt-25 max-sm:mb-10 lg:mt-0'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-0 sm:pr-[34px] max-sm:pr-0  md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <div
          className="md:block sm:block max-sm:hidden
          absolute top-0 left-0 z-0
          border-t-[474px] border-l-[89.5vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent
          lg:border-l-[calc(100vw-134px)] lg:border-b-[166px]
        "
        />

        <div className='md:block z-100 lg:col-start-1 lg:col-span-5 max-sm:col-start-1 max-sm:col-span-2 leading-[1.5] md:w-[700px] lg:mt-10.5 lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          <div className='text-[36px] font-bebas tracking-[0.15em]'>
            have any questions?
          </div>
          <p className='text-[16px] font-sans font-medium mb-7.5'>
            Here few ways to get in touch with us:
          </p>

          <p className='text-[24px] font-sans font-medium mb-10'>
            Message us
          </p>

          <ContactForm />
        </div>

        <div className='md:block z-100 lg:col-start-7 lg:col-span-4 max-sm:col-start-1 max-sm:col-span-2 leading-[1.5] md:w-[700px] lg:mt-20 lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          <div className='mb-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our phone
            </p>
            <p className='text-[16px] font-sans'>
              (270) 555-0117
            </p>
          </div>
          <div className='mb-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our email
            </p>
            <p className='text-[16px] font-sans'>
              potrpots@gmail.com
            </p>
          </div>
          <div className='mb-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our office
            </p>
            <p className='text-[16px] font-sans'>
              United Kingdom  99 Staple Hill Road,<br></br> Bristol, BS16 5AD
            </p>
          </div>

        </div>

        <div className='lg:col-start-11 lg:col-span-2 z-20'>
          <div className='2xl:translate-x-[8.5rem] 2xl:translate-y-[-5rem] lg:translate-x-[4rem] lg:translate-y-[-4rem]'>
            <Image
              src="/images/Circle.svg"
              alt="Circle"
              width={161}
              height={164}
              className="object-contain w-[161px] h-[164px] z-20"
            />
          </div>
        </div>

        <div className='lg:col-start-1 lg:col-span-2 '>
          <div className='mb-6 mt-30'>
            <p className='text-[24px] font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium'>
              Adrress
            </p>
            <p className='text-[16px] leading-[1.5] font-sans'>
              United Kingdom <br></br> 99 Staple Hill Road,<br></br> Bristol, BS16 5AD
            </p>
          </div>
        </div>

        <div className='lg:col-start-5 lg:col-span-4'>
          <div className="flex justify-center">
            <div className='flex justify-between w-[218px] mb-19 mt-30'>
              <div>
                <Image
                  src="/images/twit.svg"
                  alt="twit"
                  width={30}
                  height={30}
                  className="object-contain w-[30px] h-[30px] z-20"
                />
              </div>

              <div>
                <Image
                  src="/images/insta.svg"
                  alt="insta"
                  width={30}
                  height={30}
                  className="object-contain w-[30px] h-[30px] z-20"
                />
              </div>

              <div>
                <Image
                  src="/images/fb.svg"
                  alt="fb"
                  width={30}
                  height={30}
                  className="object-contain w-[30px] h-[30px] z-20"
                />
              </div>

            </div>
          </div>

          <div >
            <p className='text-[36px] lg:flex justify-center font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium'>
              potrpots
            </p>
          </div>
        </div>

        <div className='lg:col-start-11 lg:col-span-2 ml-auto mr-0 '>
          <div className='mb-6 mt-30 w-[128px]'>
            <p className='flex justify-start text-[24px] font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium'>
              aBOUT uS
            </p>
            <p className='text-[16px] leading-[1.5] font-sans flex justify-start'>
              Copyright © 2019
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Questions
