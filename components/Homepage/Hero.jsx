import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar";
import RollingGallery from "../bits/Components/RollingGallery/RollingGallery";

const videoSrc = "/assets/hero-video.mp4"; // Make sure the video path is correct

const Hero = () => {
  const images = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
    "/assets/hero4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden pt-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to Improve Text & Navbar Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex text-white items-center justify-center min-h-[80vh] text-center px-6 lg:px-16 w-[95%] lg:max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[32px] lg:text-[48px] xl:text-[58px] font-black leading-tight">
            Elevate Your Brand with Stunning Prints
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            High-quality printing solutions for your business, designed to make
            a lasting impression.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.9 }}
              className="bg-white text-black px-6 py-3 rounded-full transition ease-in-out cursor-pointer"
            >
              Browse all products
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.95, opacity: 0.9 }}
              className="border border-white px-6 py-3 rounded-full transition ease-in-out cursor-pointer text-white"
            >
              Get in touch
            </motion.button>
          </div>

          {/* <div className="relative w-full flex justify-center mx-auto"> */}
            {/* <div className="w-[400px] h-[400px] relative">
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
            </div> */}
            {/* <RollingGallery autoplay={true} pauseOnHover={false} /> */}
          {/* </div> */}
        </motion.div>
      </div>

      {/* Blue Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative bg-teal w-full py-12 flex flex-col items-center text-center text-white"
      >
        <div className="max-w-6xl w-full grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
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
              <img src={img} alt="feature" className="w-8 h-8" />{" "}
              {
                [
                  "Premium Quality",
                  "Same Day Print",
                  "Custom Designs",
                  "Nationwide Shipping",
                ][i]
              }
            </motion.h2>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
