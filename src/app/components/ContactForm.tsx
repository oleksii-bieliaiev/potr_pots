import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full max-w-md ml-0 flex flex-col gap-6">
      {/* Name Field */}
      <div className="relative font-sans ">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b-2 placeholder:text-black border-[rgba(0,0,0,0.29)] focus:border-[#03839E] outline-none py-2 transition-colors duration-300"
        />
      </div>

      {/* Email Field */}
      <div className="relative font-sans ">
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b-2 placeholder:text-black  border-[rgba(0,0,0,0.29)] focus:border-[#03839E] outline-none py-2 transition-colors duration-300"
        />
      </div>

      {/* Message Field */}
      <div className="relative font-sans ">
        <textarea
          placeholder="Message"
          className="w-full placeholder:text-black border-b-2 border-[rgba(0,0,0,0.29)] focus:border-[#03839E] outline-none py-2 transition-colors duration-300 resize-none mb-7"
          rows={1}
        />
      </div>

      {/* Submit Button */}
      <button className="lg:w-[238px] md:w-[240px] sm:w-[240px] max-sm:w-full h-[48px] bg-[#03839E] hover:bg-[rgba(3,131,158,0.7)] text-white tracking-[0] font-sans cursor-pointer font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors duration-300 ml-0">
        Submit <span className="ml-2">⟶</span>
      </button>
    </form>
  );
};

export default ContactForm;
