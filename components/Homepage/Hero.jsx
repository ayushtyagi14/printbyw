import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between px-6 md:px-16 py-5 mt-8 min-h-[70vh] border bg-white rounded-[24px] w-[95%] lg:max-w-screen-xl mx-auto"
      >
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left relative z-20"
        >
          <h1 className="text-[36px] md:text-[58px] font-black text-gray-900 leading-tight">
            Elevate Your Brand with Stunning Prints
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            High-quality printing solutions for your business, designed to make
            a lasting impression.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.9 }}
              className="bg-[#1e1e24] text-white px-6 py-3 rounded-full transition ease-in-out cursor-pointer"
            >
              Browse all products
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.9 }}
              className="text-[#1e1e24] px-6 py-3 rounded-full transition ease-in-out cursor-pointer shadow"
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image Animation */}
        <div className="relative w-full flex justify-end mt-12 md:mt-0 mx-auto">
          <div className="w-[400px] h-[400px] relative">
            <AnimatePresence>
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="Hero"
                className="absolute w-full h-full object-cover rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Blue Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative bg-[#718dff] w-full py-16 -mt-60 flex flex-col items-center text-center text-white"
      >
        <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 mt-60">
          {[
            "/assets/quality.png",
            "/assets/same-day.png",
            "/assets/custom.png",
            "/assets/shipping.png",
          ].map((img, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * i }}
              className="text-lg font-semibold flex flex-row items-center gap-3"
            >
              <img src={img} alt="feature" />{" "}
              {
                [
                  "Premium Quality",
                  "Same Day Print",
                  "Custom Designs",
                  "Nationwide Delivery",
                ][i]
              }
            </motion.h2>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
