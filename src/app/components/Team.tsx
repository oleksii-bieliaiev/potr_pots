import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section id='features' className='relative flex flex-col lg:min-h-screen md:min-h-auto 2xl:mb-10 lg:mb-60 md:mb-40 sm:mb-6 max-sm:mb-10 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className='font-bebas text-[58px] block text-[#333333] tracking-[0.15em] w-[100vw] lg:mb-8 md:mb-40 sm:mb-6.5 max-sm:mb-6.5'>
          Meet the POTR team!
        </div>
        <div className='flex justify-center items-center lg:w-[350px] md:w-[320px] lg:mt-65 md:mt-17 lg:col-start-1 lg:col-end-5 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-3' >
          <p className="font-sans z-10 max-w-3xl md:text-[16px] leading-relaxed text-[#4F4F4F]">
            Andy and Martin are experienced product designers with a love of plants and the environment.
            They have over ten years combined industry experience in bringing products to market at some of the world’s largest consumer product companies.
            <br /><br />
            Having studied Product Design Engineering together at the Glasgow School of Art, they have a long history of working as a team on a variety of design projects.
          </p>
        </div>
        <div className='lg:col-start-6 lg:col-span-12 md:col-start-4 md:col-span-3 sm:col-start-4 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-2 flex flex-col items-end lg:justify-start 2xl:mt-12 lg:mt-20 md:mt-10 max-sm:mt-6 max-sm:mb-7 md:relative  mr-0 z-10'>
          <Image
            src="/images/team_photo.svg"
            alt="pot title"
            width={677}
            height={508}
            className='object-cover 2xl:w-[720px] 2xl:h-[545px] lg:w-[677px] lg:h-[508px] md:w-[340px] md:h-[255px] max-sm:w-full max-sm:h-full'
          />
        </div>
        <div
          className="md:block sm:block max-sm:hidden
          absolute lg:top-73 md:top-49 left-0 z-0
          border-t-[154px] border-l-[80vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent

          2xl:border-l-[28vw] lg:border-l-[33vw] md:border-l-[33vw] lg:border-b-[106px] md:border-b-[106px] 
        "
        />

        <p className='block absolute lg:top-58 md:top-32 lg:left-19 md:left-[-2.5rem] z-50'>
          <span className="outline-text font-bebas font-normal tracking-[0.155em] leading-[100%] lg:text-[278px] md:text-[232px]">Martin</span>
        </p>
        <p className='block absolute lg:bottom-[-16rem] md:bottom-[-9.2rem] lg:right-0 md:right-[-1rem] z-50 translate-x-5'>
          <span className="outline-text font-bebas font-normal tracking-[0.155em] leading-[100%] lg:text-[278px] md:text-[220px]">Andy</span>
        </p>


      </div>
    </section>
  )
}

export default Team
