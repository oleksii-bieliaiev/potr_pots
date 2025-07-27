import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex col-start-1 col-span-12 lg:h-[80px] max-sm:justify-center max-sm:w-full max-sm:px-[30px] '>
      <div className='flex w-full h-full justify-between items-center z-20 lg:pt-0 2xl:pb-0 2xl:mt-0 lg:pb-0 md:pt-6 sm:pt-6 md:pb-12 sm:pb-12 max-sm:pb-0 max-sm:pt-6 max-sm:w-full '>
        <Image
          src="/images/Logo.svg"
          alt="Company Logo"
          width={134}
          height={43}
          className='object-contain'
        />

        <div className='text-[#4F4F4F] lg:gap-15 lg:flex hidden items-center'>
          <a href='#features' className='relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px] font-sans text-base font-normal leading-[150%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Features
          </a>
          <a href='#about_us' className='relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px] font-sans text-base font-normal leading-[150%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            About us
          </a>
          <a href='#materials' className='relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px] font-sans text-base font-normal leading-[150%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Materials
          </a>
          <a href='#message_us' className='relative cursor-pointer hover:text-[#03839E] before:absolute before:left-0 before:bottom-0 before:h-[1px] font-sans text-base font-normal leading-[150%] before:w-full before:bg-[#03839E] before:scale-x-0 before:origin-bottom-left before:transition-transform before:duration-300 hover:before:scale-x-100'>
            Message us
          </a>
        </div>

        <Image
          src="/images/bag.svg"
          alt="bag"
          width={48}
          height={48}
          className='pl-0 lg:flex hidden'
        />

        <Image
          src="/images/menu.svg"
          alt="menu"
          width={48}
          height={48}
          className='pl-0 flex lg:hidden'
        />
      </div>
    </div>
  )
}

export default Navbar
