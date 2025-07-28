import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section id='features' className='relative flex flex-col min-h-[145vh] 2xl:mb-10 md:mb-20 sm:mb-6 max-sm:mb-10 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className='font-bebas text-[58px] block tracking-[0.15em] w-[100vw] lg:mb-8 md:mb-8 sm:mb-6.5 max-sm:mb-6.5'>
          Meet the POTR team!
        </div>
        <div className='flex justify-center items-center w-[350px] lg:mt-65 lg:col-start-1 lg:col-end-5 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-3' >
          <p className="font-sans z-10 max-w-3xl leading-relaxed text-[#4F4F4F]">
            Andy and Martin are experienced product designers with a love of plants and the environment.
            They have over ten years combined industry experience in bringing products to market at some of the world’s largest consumer product companies.
            <br /><br />
            Having studied Product Design Engineering together at the Glasgow School of Art, they have a long history of working as a team on a variety of design projects.
          </p>
        </div>
        <div className='lg:col-start-6 lg:col-span-12 md:col-start-4 md:col-span-3 sm:col-start-4 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-2 flex flex-col items-end lg:justify-start 2xl:mt-12 lg:mt-20 max-sm:mt-6 max-sm:mb-7 md:relative  mr-0 z-10'>
          <Image
            src="/images/team_photo.svg"
            alt="pot title"
            width={677}
            height={508}
            className='object-cover 2xl:w-[720px] 2xl:h-[545px] lg:w-[677px] lg:h-[508px] md:w-[306px] md:h-[306px] max-sm:w-full max-sm:h-full'
          />
        </div>
        <div
          className="md:block sm:block max-sm:hidden
          absolute top-73 left-0 z-0
          border-t-[154px] border-l-[80vw] border-b-[176px]
          border-t-[#FFEC7A] border-l-[#FFEC7A] border-b-transparent

          2xl:border-l-[28vw] lg:border-l-[33vw] lg:border-b-[106px]
        "
        />

        <p className='block absolute top-58 left-19 z-50'>
          <span className="outline-text font-bebas font-normal tracking-[0.155em] leading-[100%] text-[278px]">Martin</span>
        </p>
        <p className='block absolute bottom-0 right-0 z-50 translate-x-5'>
          <span className="outline-text font-bebas font-normal tracking-[0.155em] leading-[100%] text-[278px]">Andy</span>
        </p>


      </div>
    </section>
  )
}

export default Team
