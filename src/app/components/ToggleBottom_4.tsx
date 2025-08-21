'use client'

import { useState } from "react";
import Image from "next/image";

export default function ToggleBox_4() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-74 right-50">

      <button onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/images/minus.svg" : "/images/plus.svg"}
          alt="toggle"
          width={51}
          height={51}
          className="object-cover relative  cursor-pointer"
        />
      </button>

      {open && (
        <div
          className="mt-2 absolute flex bottom-18 z-50 left-[-7rem] items-center justify-center text-center px-4"
          style={{
            width: "303px",
            height: "auto",
            padding: "30px",
            backgroundColor: "#00000069",
            backdropFilter: "blur(34px)",
            color: "#F8F8F8",
          }}
        >
          <p>
            We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water.
          </p>
        </div>
      )}
    </div>
  );
}