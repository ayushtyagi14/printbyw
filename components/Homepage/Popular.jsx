import { ArrowUpRight } from "lucide-react";
import React from "react";

const Popular = () => {
  const solutions = [
    { image: "/assets/postcards.png", title: "Postcards" },
    { image: "/assets/apparel.jpg", title: "Apparel" },
    { image: "/assets/gifts.jpg", title: "Gifts" },
    { image: "/assets/stickers.jpg", title: "Branding Stickers" },
    { image: "/assets/boxes.jpg", title: "Boxes" },
    { image: "/assets/menu.jpg", title: "Menus" },
    { image: "/assets/brochures.jpg", title: "Brochures" },
    { image: "/assets/banner.jpg", title: "Banners" },
  ];

  return (
    <div className="w-[95%] lg:max-w-screen-xl mx-auto mb-16 text-center">
      <h1 className="text-[32px] md:text-[48px] font-black">
        Popular Printing Solutions
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto mt-16">
        {solutions.map((service, index) => (
          <div
            key={index}
            className="relative h-[300px] md:h-[400px] overflow-hidden rounded-[24px] cursor-pointer group shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[24px]"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] hover:bg-black bg-white shadow transition rounded-full bg-opacity-60 hover:text-white text-center py-2 flex flex-row items-center justify-between px-5">
              <h1 className="text-lg font-semibold">{service.title}</h1>
              <ArrowUpRight className="ml-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <button className="bg-[#1e1e24] text-white px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer">
          Browse all products
        </button>
        <button className="text-[#1e1e24] px-6 py-3 rounded-full hover:scale-95 transition ease-in-out cursor-pointer shadow">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Popular;
