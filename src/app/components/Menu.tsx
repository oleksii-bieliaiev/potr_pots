import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    x: '100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  visible: {
    x: '0%',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
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
          className='fixed flex flex-col top-0 right-0 h-screen cursor-pointer w-[50vw] z-50'>
          <div className='grid lg:grid-cols-12 md:grid-cols-6 md:gap-8 sm:gap-x-4 max-sm:gap-x-4 bg-[#03839E] md:h-full sm:h-full max-sm:h-full sm:grid-cols-3 max-sm:grid-cols-3 lg:pt-[40px] lg:pr-[55px] md:pt-[40px] sm:pt-[30px] max-sm:pt-[30px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-[50vw] lg:pb-[40px] md:pb-[40px] sm:pb-[30px] max-sm:pb-[30px] md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto '>
            

            <div className='flex md:col-start-3 md:col-span-3 flex-col justify-center items-center pt-40 max-sm:pb-2 mb-auto '>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#gallery"
                  className=' font-sans md:text-[26px] leading-[150%] tracking-[0] max-sm:text-[16px] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Basket
                </a>
              </div>

              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#current-events"
                  className=' font-sans md:text-[26px] leading-[150%] tracking-[0] max-sm:text-[16px] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Features
                </a>
              </div>

              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#page-top"
                  className=' font-sans md:text-[26px] leading-[150%] tracking-[0] max-sm:text-[16px] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  Materials
                </a>
              </div>

              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#subscription"
                  className=' font-sans md:text-[26px] leading-[150%] tracking-[0] max-sm:text-[16px] font-normal text-[#F8F8F8] 
      hover:text-[#F14A27] transition-all duration-500'
                >
                  About us
                </a>
              </div>
            </div>
            <div className=' md:col-start-6 md:col-span-1 max-sm:col-start-1 max-sm:col-span-1 mt-0 mb-auto flex md:flex-col sm:flex-row max-sm:flex-row lg:items-start md:justify-end sm:justify-start max-sm:justify-start max-sm:items-center'>
              <a
                className="flex cursor-pointer pl-[4px] pt-[4px]"
                onClick={handleClose}
              >
                <img
                  src="/cross.svg"
                  alt="Facebook"
                  className="w-[13px] h-[13px] object-contain transition-all duration-300 hover:opacity-0"
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
