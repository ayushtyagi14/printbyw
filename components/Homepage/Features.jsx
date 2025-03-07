import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { image: "/assets/cards.jpg", title: "Business Cards" },
  { image: "/assets/packaging.jpg", title: "Packaging" },
  { image: "/assets/tshirt.webp", title: "Custom T-shirt Printing" },
];

const Features = () => {
  return (
    <motion.div
      className="w-[95%] lg:max-w-screen-xl mx-auto my-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-center text-[32px] md:text-[48px] font-black"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Featured Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mt-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] cursor-pointer group shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[24px]"
            />
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] hover:bg-black bg-white shadow transition rounded-full bg-opacity-60 hover:text-white text-center py-2 flex flex-row items-center justify-between px-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-lg font-semibold">{service.title}</h1>
              <ArrowUpRight className="ml-2" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="bg-[#1e1e24] text-white cursor-pointer my-8 text-center flex justify-center w-max rounded-full py-2 px-6 shadow mx-auto hover:scale-95 transition ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 0.95 }}
      >
        Browse all services
      </motion.button>
    </motion.div>
  );
};

export default Features;
