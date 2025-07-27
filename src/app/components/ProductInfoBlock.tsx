// components/ProductInfoBlock.tsx
import React from 'react';

const ProductInfoBlock = () => {
  return (
    <div className='font-bebas md:text-[64px] sm:text-[42px] max-sm:text-4xl md:leading-[64px] sm:leading-[54px] md:tracking-[0.15em] sm:tracking-[0.15em] max-sm:tracking-[0.15em] max-sm:leading-[44px] uppercase font-normal  flex flex-col items-start lg:justify-start md:justify-start sm:justify-start 2xl:mt-12 lg:mt-15 md:mt-0 md:relative sm:relative max-sm:relative max-sm:mt-3 max-sm:mb-auto max-sm:left-1/2 max-sm:-translate-x-1/2 md:w-[450px] md:h-[450px] sm:h-[450px] max-sm:pr-[34px] max-sm:pl-[34px] max-sm:w-full max-sm:h-[172px] z-20 2xl:translate-x-0 lg:translate-x-[-2rem]'>
      <p >
        <span className="outline-text ">POTR ~ Eco,</span>
      </p>
      <p>
        <span className="outline-text ">self-</span>
        <span className="turquoise-text">watering,</span>
      </p>
      <p>
        <span className="turquoise-text ">origami </span>
        <span className="outline-text ">plant</span>
      </p>
      <p className="turquoise-text ">pots</p>

      <div className="w-full flex flex-col md:items-end sm:items-end justify-end max-sm:items-start lg:mt-[20px] lg:translate-y-0 md:translate-y-[-1rem] sm:translate-y-[-1rem] md:mt-0 sm:mt-5 max-sm:mt-7 z-10">
        <p className="text-[#333333] font-sans font-bold text-[26px] lg:pr-20 2xl:pr-20 md:pr-34 sm:pr-34 leading-[100%] tracking-[0]">
          $ 7.50
        </p>
        <p className="pt-1 text-[#4F4F4F] font-sans font-normal text-[14px] leading-[150%] tracking-[0] lg:pr-5 2xl:pr-5 md:pr-19 sm:pr-19 align-bottom normal-case">
          Get the second order <br /> in half price
        </p>
      </div>

      <div className="w-full flex flex-col items-end justify-end 2xl:mt-[50px] lg:mt-[20px] md:mt-[50px] sm:mt-[50px] max-sm:mt-[20px] max-sm:pb-5 lg:pr-0 md:pr-[90px] z-10">
        <button className="lg:w-[270px] md:w-[240px] sm:w-[240px] max-sm:w-full h-[48px] bg-[#FFE339] hover:bg-[#FFEC7A] tracking-[0] font-sans cursor-pointer font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors duration-300">
          BUY NOW  <span className=" ml-2">⟶</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfoBlock;
