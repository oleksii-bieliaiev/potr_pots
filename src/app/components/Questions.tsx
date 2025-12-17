import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

const Questions = () => {
  return (
    <section id='message_us' className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-10 md:mb-20 sm:mb-6 md:mt-0 sm:mt-0 max-sm:mt-25 max-sm:mb-10 lg:mt-0'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] max-sm:pl-[34px] sm:pr-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto  '>
        <div
          className="md:block sm:block 
          absolute top-0 left-0 z-0
          border-t-[474px] border-l-[89.5vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent
          lg:border-l-[calc(100vw-134px)] md:border-l-[100vw] sm:border-l-[100vw] max-sm:border-l-[100vw] lg:border-b-[166px] md:border-b-[106px] max-sm:border-b-[106px] lg:border-t-[474px] md:border-t-[424px] max-sm:border-t-[850px]
        "
        />

        <div className='md:block z-100 lg:col-start-1 lg:col-span-5 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-2 leading-[1.5] lg:w-[700px] lg:mt-10.5 md:mt-5 sm:mt-10 max-sm:mt-15 lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
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

        <div className='md:block z-100 lg:col-start-7 lg:col-span-4 md:col-start-5 md:col-span-2 sm:col-start-5 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2 leading-[1.5] md:w-[700px] lg:mt-25 md:mt-20 sm:mt-20 lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          <div className='lg:mb-6 md:mb-6 sm:mb-6 max-sm:mb-6 max-sm:mt-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our phone
            </p>
            <p className='text-[16px] font-sans'>
              (270) 555-0117
            </p>
          </div>
          <div className='lg:mb-6 mb-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our email
            </p>
            <p className='text-[16px] font-sans'>
              potrpots@gmail.com
            </p>
          </div>
          <div className='lg:mb-6 mb-6'>
            <p className='text-[24px] font-sans font-medium text-[rgba(0,0,0,0.29)]'>
              Our office
            </p>
            <p className='text-[16px] font-sans md:w-[200px]'>
              United Kingdom 99 Staple Hill Road,<br className='lg:inline md:hidden max-sm:hidden'></br> Bristol, BS16 5AD
            </p>
          </div>

        </div>

        <div className='lg:col-start-11 lg:col-span-2 md:absolute sm:absolute max-sm:absolute z-20 right-1'>
          <div className='2xl:translate-x-[-4rem] 2xl:translate-y-[-5rem] lg:translate-x-[-4rem] lg:translate-y-[-4rem] md:translate-x-[4rem] md:translate-y-[-4rem] sm:translate-x-[4rem] sm:translate-y-[-5rem] max-sm:translate-x-[4rem] max-sm:translate-y-[-5rem]'>
            <Image
              src="/images/Circle.svg"
              alt="Circle"
              width={161}
              height={164}
              className="object-contain w-[161px] h-[164px] z-20"
            />
          </div>
        </div>

        <div className='lg:col-start-1 lg:col-span-2  md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-2 z-20 max-sm:hidden'>
          <div className='mb-6 mt-30'>
            <p className='text-[24px] font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium'>
              Adrress
            </p>
            <p className='text-[16px] leading-[1.5] font-sans'>
              United Kingdom <br></br> 99 Staple Hill Road,<br></br> Bristol, BS16 5AD
            </p>
          </div>
        </div>

        <div className='lg:col-start-5 lg:col-span-4 md:col-start-3 md:col-span-2 sm:col-start-3 sm:col-span-2 max-sm:col-start-1 max-sm:col-span-2'>
          <div className="flex justify-center">
            <div className='z-20 flex justify-between w-[218px] mb-19 mt-30 max-sm:mt-20'>
              <div>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/twit.svg"
                    alt="twit"
                    width={30}
                    height={30}
                    className="object-contain lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] sm:w-[20px] sm:h-[20px] max-sm:w-[20px] max-sm:h-[20px] z-20 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  />
                </a>
              </div>

              <div>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/insta.svg"
                    alt="insta"
                    width={30}
                    height={30}
                    className="object-contain lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] sm:w-[20px] sm:h-[20px] max-sm:w-[20px] max-sm:h-[20px] z-20 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  />
                </a>
              </div>

              <div>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/fb.svg"
                    alt="fb"
                    width={30}
                    height={30}
                    className="object-contain lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] sm:w-[20px] sm:h-[20px] max-sm:w-[20px] max-sm:h-[20px] z-20 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  />
                </a>
              </div>

            </div>
          </div>

          <div >
            <p className='text-[36px] md:flex sm:flex max-sm:flex justify-center font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium'>
              potrpots
            </p>
          </div>
        </div>

        <div className='lg:col-start-11 lg:col-span-2 md:col-start-5 md:col-span-2 sm:col-start-5 sm:col-span-2 ml-auto mr-0 max-sm:hidden '>
          <div className='mb-6 mt-30 w-[128px]'>
            <a 
            href='#about_us'
            className='flex justify-start text-[24px] font-bebas leading-[24px] tracking-[0.155em] mb-2.5 font-medium hover:opacity-50 transition-opacity duration-300 cursor-pointer'>
              aBOUT uS
            </a>
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
