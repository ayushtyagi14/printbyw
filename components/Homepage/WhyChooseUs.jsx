import React from "react";
import { CheckCircle, Clock, Leaf, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <CheckCircle />, title: "High-Quality Printing", desc: "Crisp details & vibrant colors for professional prints." },
  { icon: <Clock />, title: "Fast Turnaround", desc: "Quick processing & delivery to meet tight deadlines." },
  { icon: <Leaf />, title: "Eco-Friendly Materials", desc: "Sustainable, high-quality printing solutions." },
  { icon: <Award />, title: "10+ Years of Expertise", desc: "Trusted by businesses for premium print solutions." },
];

const WhyChooseUs = () => {
  return (
    <div className="w-[95%] lg:max-w-screen-xl mx-auto my-28 text-center">
      <h1 className="text-[32px] md:text-[48px] font-black">Why Choose Us?</h1>
      <p className="text-gray-600 max-w-xl mx-auto mt-3">
        We deliver top-notch printing services tailored to your needs.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white shadow-lg border flex flex-col items-center text-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-[#718dff] bg-[#eaf0ff] p-4 rounded-full text-4xl">
              {feature.icon}
            </div>
            <h2 className="mt-4 text-lg font-semibold">{feature.title}</h2>
            <p className="text-gray-500 mt-2 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
