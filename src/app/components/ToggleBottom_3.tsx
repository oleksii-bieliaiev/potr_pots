'use client'

import { useState } from "react";
import Image from "next/image";

export default function ToggleBox_3() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-34 left-190">

      <button onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/images/minus.svg" : "/images/plus.svg"}
          alt="toggle"
          width={51}
          height={51}
          className="object-cover relative z-50"
        />
      </button>

      {open && (
        <div
          className="mt-2 absolute flex bottom-22 left-[-7rem] items-center justify-center text-center px-4 z-10"
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
            Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. 
          </p>
        </div>
      )}
    </div>
  );
}