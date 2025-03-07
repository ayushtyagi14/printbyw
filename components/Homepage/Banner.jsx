import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[95%] lg:max-w-screen-xl mx-auto mt-28 mb-20 bg-[#718dff] rounded-[24px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="flex flex-col items-start gap-8 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[32px] md:text-[52px] font-black leading-tight"
        >
          Quality is what distinguishes us!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="md:text-[22px]"
        >
          Our mission is to provide high-quality prints that are tailored to
          your specific requirements, and to make the printing process as easy
          and seamless as possible.
        </motion.p>

        <div className="flex gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full transition ease-in-out cursor-pointer"
          >
            Browse all products
          </motion.button>

          <motion.button
            whileHover={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full transition ease-in-out cursor-pointer shadow"
          >
            Get in touch
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="/assets/banner.webp"
          alt="Banner Image"
          className="w-[350px] rounded-[24px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
