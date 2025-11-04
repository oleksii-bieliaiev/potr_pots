import Image from 'next/image'
import React from 'react'

import ToggleBottom_1 from './ToggleBottom_1'
import ToggleBottom_2 from './ToggleBottom_2'
import ToggleBottom_3 from './ToggleBottom_3'
import ToggleBottom_4 from './ToggleBottom_4'
import ToggleBottom_5 from './ToggleBottom_5'
import styles from '../styles/Materials.module.css'
import MobileCarousel from './MobileCarousel'

const Materials = () => {
  return (
    <section
      id='materials'
      className='relative flex flex-col lg:min-h-auto md:min-h-auto max-sm:min-h-auto 2xl:mb-0 lg:mb-0 md:mb-0 sm:mb-6 max-sm:mb-10 2xl:mt-15 lg:mt-10 '
    >
      <div className='font-bebas max-sm:font-extrabold z-50 2xl:translate-y-[8rem] lg:translate-y-[12rem] max-sm:translate-y-[6rem] 2xl:pt-25 lg:pt-0  lg:text-[138.81px] md:text-[80px] max-sm:text-[58px] block text-[#03839E] leading-[1.2] tracking-[0.10em] lg:pr-0 lg:pl-[134px] md:pl-[34px] sm:pl-[34px] sm:pr-[34px] md:w-[90vw] sm:w-[80vw] max-sm:w-[80vw] lg:mb-15 md:mb-10 sm:mb-6.5 max-sm:mb-4 max-sm:ml-[34px] max-sm:mr-[34px] '>
        Materials and <br></br>Features
      </div>
      <div className='flex max-sm:hidden font-sans flex-col absolute lg:w-[470px] md:w-[340px] 2xl:top-[400px] lg:right-[134px] lg:top-[350px] md:right-[34px] md:top-[150px] text-[#4F4F4F]'>
        <p className='text-[20px] pb-4 font-bold'>Environmentally friendly</p>
        <p className="z-10 max-w-3xl md:text-[16px] leading-[1.5] ">
          All materials used in our pots are made from 100% recycled materials and are 100% recyclable at the end of life <p className='lg:inline md:hidden'>(should you ever choose to get rid of your POTR!). All materials have been sourced from within Europe to reduce our carbon footprint when transporting the raw materials, and all manufacturing is carried out in the UK.</p>
        </p>
      </div>

      <div className={`${styles['hero-bg']}`} />

      <ToggleBottom_1 />
      <ToggleBottom_2 />
      <ToggleBottom_3 />
      <ToggleBottom_4 />
      <ToggleBottom_5 />
      <MobileCarousel />

    </section >
  )
}

export default Materials
