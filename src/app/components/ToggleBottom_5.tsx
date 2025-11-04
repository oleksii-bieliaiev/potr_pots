'use client'

import { useState } from "react";
import Image from "next/image";

export default function ToggleBox_5() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute 2xl:bottom-14 2xl:left-160 lg:bottom-14 lg:left-130 md:bottom-14 md:right-40 max-sm:hidden">

      <button onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/images/minus.svg" : "/images/plus.svg"}
          alt="toggle"
          width={51}
          height={51}
          className="object-cover relative cursor-pointer"
        />
      </button>

      {open && (
        <div
          className="mt-2 absolute flex bottom-18 left-[-7rem] z-50 items-center justify-center text-center px-4 "
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
            Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.
          </p>
        </div>
      )}
    </div>
  );
}