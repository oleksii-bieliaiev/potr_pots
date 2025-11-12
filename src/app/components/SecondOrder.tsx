import Image from 'next/image'
import React from 'react'

const SecondOrder = () => {
  return (
    <section id='second_order' className='relative flex flex-col lg:min-h-auto md:min-h-auto 2xl:mb-10 md:mb-20 sm:mb-6 max-sm:mb-10 lg:mt-0'>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:gap-x-8 sm:gap-x-8 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 lg:mt-0 lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>
        <div className="relative lg:col-start-1 lg:col-span-6 ">

          <div>
            <Image
              src="/images/Photos.svg"
              alt="pot title"
              width={568}
              height={460}
              className='object-cover lg:object-center 2xl:w-[100%] 2xl:h-[100%] lg:w-[100%] lg:h-[100%] md:mb-7.5 max-sm:mb-6'
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default SecondOrder
