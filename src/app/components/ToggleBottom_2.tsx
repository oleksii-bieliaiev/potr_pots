'use client'

import { useState } from "react";
import Image from "next/image";

export default function ToggleBox_2() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute lg:bottom-88 lg:left-120 md:bottom-50 md:left-60">

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
          className="mt-2 absolute flex bottom-18 left-[-7rem] items-center justify-center text-center px-4 z-50"
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
            POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.
          </p>
        </div>
      )}
    </div>
  );
}