'use client'

import { useState } from "react";
import Image from "next/image";

export default function ToggleBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-35 left-35">
      {/* Кнопка */}
      <button onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/images/minus.svg" : "/images/plus.svg"}
          alt="toggle"
          width={51}
          height={51}
          className="object-cover relative z-50"
        />
      </button>

      {/* Плашка появляется при open === true */}
      {open && (
        <div
          className="mt-2 flex translate-y-[-8rem] items-center justify-center text-center px-4 z-10"
          style={{
            width: "303px",
            height: "237px",
            backgroundColor: "#00000069",
            backdropFilter: "blur(34px)",
            color: "#F8F8F8",
          }}
        >
          <p>
            We have chosen Bobbiny recycled cotton cord to use as our draw
            string and wicking cord. Not only is it 100% recycled, it looks
            great and works really well at wicking water.
          </p>
        </div>
      )}
    </div>
  );
}