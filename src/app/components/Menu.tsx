import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import Image from 'next/image';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    x: '100%',
    transition: { duration: 0.5, ease: easeInOut },
  },
  visible: {
    x: '0%',
    transition: { duration: 0.5, ease: easeOut },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.5, ease: easeInOut },
  },
};

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
  };


  return (
    <AnimatePresence onExitComplete={onClose}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          key="menu"
          variants={menuVariants}
          transition={{ duration: 0.5 }}
          id="menu"
          className='fixed flex flex-col top-0 right-0 h-screen w-[80vw] z-150'>
          <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 max-sm:grid-cols-2 md:gap-8 sm:gap-x-4 max-sm:gap-x-4 bg-[#03839E] md:h-full sm:h-full max-sm:h-full lg:pt-[40px] lg:pr-[55px] md:pt-[40px] sm:pt-[30px] max-sm:pt-[30px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] lg:pb-[40px] md:pb-[40px] sm:pb-[30px] max-sm:pb-[30px]  '>


            <div className='flex md:col-start-3 md:col-span-3 sm:col-start-3 sm:col-span-3 max-sm:col-start-1 max-sm:col-span-2 max-sm:h-[70vh] flex-col justify-center items-center max-sm:mx-auto'>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#gallery"
                  className=' font-sans md:text-[26px] sm:text-[26px] max-sm:text-[20px] leading-[150%] tracking-[0] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Basket
                </a>
              </div>

              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#features"
                  className=' font-sans md:text-[26px] sm:text-[26px] max-sm:text-[20px] leading-[150%] tracking-[0]  font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Features
                </a>
              </div>

              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#materials"
                  className=' font-sans md:text-[26px] sm:text-[26px] max-sm:text-[20px] leading-[150%] tracking-[0] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Materials
                </a>
              </div>

              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#about_us"
                  className=' font-sans md:text-[26px] sm:text-[26px] max-sm:text-[20px] leading-[150%] tracking-[0] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  About us
                </a>
              </div>

              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#message_us"
                  className=' font-sans md:text-[26px] sm:text-[26px] max-sm:text-[20px] leading-[150%] tracking-[0] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Message us
                </a>
              </div>
            </div>
            <div className='md:col-start-6 md:col-span-1 sm:col-start-6 sm:col-span-1 max-sm:col-start-2 max-sm:col-span-1 mt-0 mb-auto mr-0 flex flex-col h-full'>
              <a
                className="flex items-end justify-end flex-col  gap-2 pl-[4px] mt-auto mb-[4px] hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                onClick={handleClose}
              >
                <Image
                  src="/images/close.svg"
                  alt="menu"
                  width={18}
                  height={42}
                  className='pl-0 w-[18px] h-[46px] flex '
                />
                <Image
                  src="/images/small_line.svg"
                  alt="menu"
                  width={18}
                  height={42}
                  className='pl-0 w-[18px] h-[44px] flex'
                />
                <Image
                  src="/images/cross.svg"
                  alt="menu"
                  width={18}
                  height={42}
                  className='pl-0 w-[18px] h-[18px] flex'
                />
              </a>
            </div>

          </div>


        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
