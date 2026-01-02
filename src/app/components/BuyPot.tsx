import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useViews } from "../context/ViewsContext";


type SizeType = "small" | "large";

const PRICES = {
  small: 15,
  large: 15,
};

const BuyPot: React.FC = () => {
  const { cart, updateCart, clearCart, closeBuy } = useViews();
  const [quantities, setQuantities] = useState(() => ({
    small: cart.small,
    large: cart.large,
  }));

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setQuantities(cart);
  }, [cart]);

  const calcPrice = (quantity: number, price: number) => {
    const full = Math.ceil(quantity / 2);
    const half = Math.floor(quantity / 2);
    return full * price + half * price * 0.5;
  };

  const totalSmall = useMemo(
    () => calcPrice(quantities.small, PRICES.small),
    [quantities.small]
  );

  const totalLarge = useMemo(
    () => calcPrice(quantities.large, PRICES.large),
    [quantities.large]
  );

  const totalPrice = totalSmall + totalLarge;

  const isDisabled = quantities.small === 0 && quantities.large === 0;

  const handleSubmit = () => {
    updateCart(quantities);
    setIsSubmitted(true);
  };

  const handleClear = () => {
    clearCart();
    setQuantities({ small: 0, large: 0 });
    setIsSubmitted(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-white/40 backdrop-blur-sm font-bebas leading-[150%] tracking-[0.15em]"
    >
      <motion.aside
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="
    bg-white
    border-2
    shadow-2xl
    max-h-[90vh]
    w-[90vw]
    max-w-[700px]
    p-8
    relative
    flex flex-col gap-6
    overflow-y-auto
  "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeBuy}
          className="absolute top-4 right-4 text-x hover:opacity-50 transition-opacity duration-300 cursor-pointer"
        >
          ✖
        </button>

        {isSubmitted ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold mb-2">
              Order confirmed
            </h2>
            <p className="text-gray-600">
              Your POTR pots have been added to the order.
            </p>
          </div>
        ) : (
          <>
            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/pots_sizes.svg"
                alt="pot sizes"
                width={300}
                height={200}
              />
            </div>

            <h2 className="text-2xl font-semibold text-center">
              Choose your POTR Pots
            </h2>

            {/* LARGE */}
            <div className="flex items-center justify-between border p-4">
              <div>
                <p className="font-semibold">Large POTR Pot</p>
                <p className="text-sm text-gray-600">
                  14cm diameter (1.5 litre)
                </p>
                <p className="text-sm mt-1">
                  ${PRICES.large} each
                </p>
              </div>

              <input
                type="number"
                min={0}
                value={quantities.large}
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    large: Number(e.target.value),
                  })
                }
                className="border w-20 px-3 py-1"
              />
            </div>

            {/* SMALL */}
            <div className="flex items-center justify-between border p-4">
              <div>
                <p className="font-semibold">Small POTR Pot</p>
                <p className="text-sm text-gray-600">
                  10cm diameter (0.49 litre)
                </p>
                <p className="text-sm mt-1">
                  ${PRICES.small} each
                </p>
              </div>

              <input
                type="number"
                min={0}
                value={quantities.small}
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    small: Number(e.target.value),
                  })
                }
                className="border w-20 px-3 py-1"
              />
            </div>

            {/* DISCOUNT INFO */}
            <div className="bg-gray-100 p-3 text-sm">
              <strong>50% off</strong> — every second pot is half price
            </div>

            {/* PRICE BREAKDOWN */}
            <div className="bg-gray-50 p-4 text-sm space-y-2">
              {quantities.large > 0 && (
                <div className="flex justify-between">
                  <span>Large × {quantities.large}</span>
                  <span>${totalLarge.toFixed(2)}</span>
                </div>
              )}

              {quantities.small > 0 && (
                <div className="flex justify-between">
                  <span>Small × {quantities.small}</span>
                  <span>${totalSmall.toFixed(2)}</span>
                </div>
              )}

              <div className="border-t pt-2 font-semibold flex justify-between text-base">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              disabled={isDisabled}
              onClick={handleSubmit}
              className={`py-3 transition tracking-[0] font-sans cursor-pointer font-semibold text-[14px] ${isDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#1A5A4C] text-white hover:bg-[#154a3e]"
                }`}
            >
              BUY NOW
            </button>
            {(cart.small > 0 || cart.large > 0) && (
              <button
                onClick={handleClear}
                className="
                py-2
                text-sm
                font-sans
                font-semibold
                cursor-pointer
               text-red-600
                border border-red-300
                hover:bg-red-50
                tracking-[0]
                transition
              "
              >
                CLEAR CART
              </button>
            )}
          </>
        )}
      </motion.aside>
    </div>
  );
};

export default BuyPot;
