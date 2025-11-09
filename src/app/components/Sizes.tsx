import Image from 'next/image'
import React from 'react'

const Sizes = () => {
  return (
    <section id='sizes' className='relative flex flex-col min-h-screen 2xl:mb-10 md:mb-20 sm:mb-6 max-sm:mb-10 lg:mt-15 md:mt-25 max-sm:pt-28 '>
      <div className='grid lg:grid-cols-12 2xl:gap-8 lg:gap-x-8 lg:gap-y-2 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 2xl:mt-[70px] lg:mt-[100px] lg:pr-[134px] lg:pl-[134px] md:pr-[34px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] max-sm:pl-[34px] max-sm:pr-[34px] md:w-auto md:mx-0 sm:w-full sm:mx-auto max-sm:mx-auto max-sm:justify-center max-sm:w-full max-sm:px-4 '>

        <div className='font-bebas text-[36px] block tracking-[0.15em] w-[700px] lg:mb-16 md:mb-10.5 sm:mb-6.5 max-sm:mb-6.5'>
          Which size POTR for my house plant ?
        </div>

        <div className="relative lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 md:block sm:hidden max-sm:hidden">
          <div className="flex items-start justify-between">
            <p className="font-sans text-[#4F4F4F] leading-[1.5] max-w-[90%] text-base">
              Pre potted plants come in fairly standard sized pots, and can be classified into one of two categories:
            </p>

            {/* Вертикальная линия справа от текста */}
            <div className="ml-4  flex-shrink-0">
              <Image
                src="/images/rect_5.svg"
                alt="rect_5"
                width={1}
                height={257}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative lg:col-start-4 lg:col-span-3 md:col-start-1 md:col-span-3 md:block sm:hidden max-sm:hidden">

          <div className='mb-10'>
            <p className="block mb-2.5 font-bebas text-[#000000] tracking-[0.155em] text-lg">
              Large
            </p>
            <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
              Large POTR Pot = 14cm diameter (1.5 litre) house plant pot or less
            </p>
          </div>

          <div>
            <p className="block mb-2.5 font-bebas text-[#000000] tracking-[0.155em] text-lg">
              Small
            </p>
            <p className="font-sans text-[#4F4F4F] leading-[1.5] text-base">
              Small POTR Pot = 10cm diameter (0.49 litre) house plant pot or less
            </p>
          </div>

        </div>

        <div className="relative lg:col-start-7 lg:col-span-6 md:col-start-4 md:col-span-3 md:block sm:hidden max-sm:hidden">

          <div>
            <Image
              src="/images/pots_sizes.svg"
              alt="pot title"
              width={568}
              height={460}
              className='object-cover object-center 2xl:w-[568px] 2xl:h-[460px] lg:w-[568px] lg:h-[428px] md:w-[220px] md:h-[220px] sm:w-[100vw] sm:h-[100vw] max-sm:w-[100vw] max-sm:h-[100hw]  md:mb-7.5 max-sm:mb-6'
            />
          </div>

        </div>


        <div className="relative lg:col-start-1 lg:col-span-6 md:col-start-1 md:col-span-3 md:block sm:hidden max-sm:hidden">
          <p className="font-sans text-[#4F4F4F] translate-y-[-10rem] leading-[1.5] text-base">
            * POTR Pots have a little bit of give around the top rim so can fit slightly larger sizes than the recommended sizes stated above if necessary.
          </p>
        </div>




      </div>
    </section >
  )
}

export default Sizes
