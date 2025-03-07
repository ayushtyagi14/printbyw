import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Exceptional print quality and timely delivery. It really exceeded my expectations, I highly recommend it.",
    name: "John Carter",
    company: "American Soda",
    image: "/assets/john.jpg",
  },
  {
    quote:
      "They transformed our creative ideas into stunning printed materials that truly capture our brand's essence.",
    name: "Sahara Smith",
    company: "Trappi Card",
    image: "/assets/sahara.jpg",
  },
  {
    quote:
      "Outstanding customer service, quick turnaround times, and prints that always exceed our high expectations.",
    name: "Sophie Moore",
    company: "Mistery Box",
    image: "/assets/sophie.jpg",
  },
  {
    quote:
      "Not just a printing service; they're true partners in bringing our visual concepts to life.",
    name: "Billy Brown",
    company: "Happy Meal",
    image: "/assets/billy.jpg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="bg-white py-10 mt-28 mb-16"
    >
      <motion.div
        className="w-[95%] lg:max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={fadeInUp}
      >
        <motion.div
          className="flex flex-col gap-6 md:mt-[7rem]"
          variants={fadeInUp}
        >
          <h1 className="text-[24px] text-center md:text-left md:text-[32px] font-black leading-tight">
            Printing Excellence, Proven by Experience.
          </h1>
          <p className="text-center md:text-left text-gray-600">
            Turning Ideas into Prints, and Customers into Fans.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-[#1e1e24] text-white px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer">
              Browse all products
            </button>
            <button className="text-[#1e1e24] px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer shadow">
              Get in touch
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6"
          variants={fadeInUp}
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between gap-6 p-5 rounded-[24px] shadow h-[300px] transition-transform hover:scale-105"
              whileHover={{ scale: 1.02 }}
              variants={fadeInUp}
            >
              <p className="text-[22px] font-bold">
                "&nbsp;{testimonial.quote}&nbsp;"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-[18px] font-semibold">
                    {testimonial.name}
                  </h1>
                  <h2 className="text-gray-600 text-sm">
                    {testimonial.company}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6 md:mt-16"
          variants={fadeInUp}
        >
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between gap-6 p-5 rounded-[24px] shadow h-[300px] transition-transform hover:scale-105"
              whileHover={{ scale: 1.02 }}
              variants={fadeInUp}
            >
              <p className="text-[22px] font-bold">
                "&nbsp;{testimonial.quote}&nbsp;"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-[18px] font-semibold">
                    {testimonial.name}
                  </h1>
                  <h2 className="text-gray-600 text-sm">
                    {testimonial.company}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
