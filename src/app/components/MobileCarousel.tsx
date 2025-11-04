'use client';
import React, { useState, useEffect } from 'react';

const mobileTexts = [
  "We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ",
  "Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit.",
  "Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.",
  "POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.",
  "POTR Pots are constructed using recycled polypropylene which can be fully recycled."
];

const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Автопрокрутка каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mobileTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-sm:flex hidden absolute bottom-0 left-0 w-full translate-y-[12rem] h-63 z-50 items-center justify-center">
      <div className="relative w-[90%] mx-auto h-full flex flex-col items-center justify-start pt-7 px-11 bg-black/40 backdrop-blur-[34px] text-[#F8F8F8] ">
        <p className="text-start text-base leading-[1.5] tracking-0 mb-4 font-sans">
          {mobileTexts[current]}
        </p>

        {/* Индикаторы */}
        <div className="absolute bottom-9 flex gap-2">
          {mobileTexts.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rotate-45 block ${
                index === current ? 'bg-[#0000004D]' : 'bg-[#F8F8F8]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;

