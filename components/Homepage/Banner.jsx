import React from "react";

const Banner = () => {
  return (
    <div className="w-[95%] lg:max-w-screen-xl mx-auto mt-28 mb-20 bg-[#718dff] rounded-[24px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-start gap-8 text-white">
        <h1 className="text-[32px] md:text-[52px] font-black">
          Quality is what distinguishes us!
        </h1>
        <p className="md:text-[22px]">
          Our mission is to provide high-quality prints that are tailored to
          your specific requirements, and to make the printing process as easy
          and seamless as possible.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer">
            Browse all products
          </button>
          <button className="px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer shadow">
            Get in touch
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/assets/banner.webp"
          alt="Banner Image"
          className="w-[350px] rounded-[24px]"
        />
      </div>
    </div>
  );
};

export default Banner;
