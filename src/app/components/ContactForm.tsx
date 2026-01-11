'use client'

import React, { useState } from "react";
import SubmitModal from "./SubmitModal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // очищаем ошибку при вводе
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md ml-0 flex flex-col lg:gap-6 md:gap-4 sm:gap-4 max-sm:gap-4"
        >
          {/* Name */}
          <div className="relative font-sans">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="md:w-[370px] sm:w-[270px] max-sm:w-[calc(100vw-68px)]
              border-b-2 placeholder:text-black border-[rgba(0,0,0,0.29)]
              focus:border-[#03839E] outline-none py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative font-sans">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="md:w-[370px] sm:w-[270px] max-sm:w-[calc(100vw-68px)]
              border-b-2 placeholder:text-black border-[rgba(0,0,0,0.29)]
              focus:border-[#03839E] outline-none py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative font-sans pb-4">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={1}
              className="md:w-[370px] sm:w-[270px] max-sm:w-[calc(100vw-68px)]
              placeholder:text-black border-b-2 border-[rgba(0,0,0,0.29)]
              focus:border-[#03839E] outline-none py-2 resize-none mb-2"
            />
            {errors.message && (
              <p className="text-red-500 text-xs">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="lg:w-[238px] md:w-[240px] sm:w-[240px]
            max-sm:w-[calc(100vw-68px)] h-[48px]
            bg-[#03839E] hover:bg-[rgba(3,131,158,0.7)]
            text-white font-semibold text-[14px]
            flex items-center justify-center gap-2 transition-colors"
          >
            Submit <span>⟶</span>
          </button>
        </form>
        {isSubmitted && (
        <SubmitModal close={() => setIsSubmitted(false)} />
      )}
    </>
  );
};

export default ContactForm;
