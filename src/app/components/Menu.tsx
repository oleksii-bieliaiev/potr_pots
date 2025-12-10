import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: '-100%',
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
          className='fixed flex flex-col lg:h-screen md:h-screen sm:h-screen max-sm:h-screen w-full z-50'>
          <div className='grid lg:grid-cols-12 md:gap-8 sm:gap-x-4 max-sm:gap-x-4 bg-[#03839E] lg:h-[233px] md:h-[225px] sm:h-[459px] max-sm:h-[459px] md:grid-cols-11 sm:grid-cols-3 max-sm:grid-cols-3 lg:pt-[40px] lg:pr-[55px] md:pt-[40px] sm:pt-[30px] max-sm:pt-[30px] md:pr-[39px] max-sm:pr-[20px] sm:pr-[20px] lg:pl-[55px] md:pl-[39px] max-sm:pl-[20px] sm:pl-[20px] md:w-auto lg:pb-[40px] md:pb-[40px] sm:pb-[30px] max-sm:pb-[30px] md:mx-0 sm:w-full sm:mx-auto max-sm:w-full max-sm:mx-auto '>
            <div className='lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-1 max-sm:col-start-1 max-sm:col-span-1 mt-0 mb-auto flex md:flex-col sm:flex-row max-sm:flex-row lg:items-start md:justify-center sm:justify-start max-sm:justify-start max-sm:items-center'>
              <a
                className="flex cursor-pointer pl-[4px] pt-[4px]"
                onClick={handleClose}
              >
                <img
                  src="/cross.svg"
                  alt="Facebook"
                  className="w-[13px] h-[13px] object-contain transition-all duration-300 hover:opacity-0"
                />
                <img
                  src="/cross_hover.svg"
                  alt="Facebook Hover"
                  className="w-[13px] h-[13px] object-contain transition-all duration-300 absolute opacity-0 hover:opacity-100"
                />
              </a>
            </div>

            <div className='lg:col-start-2 lg:col-span-2 md:col-start-2 md:col-span-1 sm:col-start-2 sm:col-span-1 max-sm:col-start-2 max-sm:col-span-1  flex flex-col items-center mt-0 md:pb-0 sm:pb-2 max-sm:pb-2 mb-auto lg:justify-center md:justify-start sm:justify-start max-sm:justify-start max-sm:translate-x-[-2rem] lg:ml-[25%]'>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#gallery"
                  className='self-start lg:text-[22px] md:text-[16px] md:leading-[22px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
      hover:text-[#F14A27] hover:font-medium  transition-all duration-500'
                >
                  Галерея
                </a>
              </div>
              <div className='flex flex-col w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#current-events"
                  className='self-start lg:text-[22px] md:text-[16px] md:leading-[22px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
      hover:text-[#F14A27] hover:font-medium  transition-all duration-500'
                >
                  Виставки та події
                </a>
              </div>
            </div>

            <div className='lg:col-start-4 lg:col-span-2 md:col-start-4 md:col-span-1 sm:col-start-3 sm:col-span-1 max-sm:col-start-3 max-sm:col-span-1 flex flex-col items-end mt-0 md:pb-0 sm:pb-2 max-sm:pb-2 mb-auto lg:justify-center  lg:ml-[25%] '>
              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#page-top"
                  className='lg:text-[22px] md:leading-[22px] md:text-[16px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
    hover:text-[#F14A27] hover:font-medium transition-all duration-500 whitespace-nowrap'
                >
                  Про Нас
                </a>
              </div>
              <div className='flex flex-row w-full pb-[20px]'>
                <a
                  onClick={onClose}
                  href="#subscription"
                  className=' lg:text-[22px] md:leading-[22px] md:text-[16px] max-sm:text-[14px] font-medium max-sm:leading-[21px] text-[#FFFFFF] font-flexsans 
    hover:text-[#F14A27] hover:font-medium transition-all duration-500'
                >
                  Контакти
                </a>
              </div>
            </div>


          </div>
          <div className='bg-[#2f2f2f] opacity-65 w-full h-full' />


        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
