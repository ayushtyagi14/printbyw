import React, { useState } from "react";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-[95%] lg:max-w-screen-xl mx-auto mb-16 text-center">
      <h1 className="text-[32px] md:text-[48px] font-black">Our Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Main Large Image */}
        <img
          src="/assets/gallery1.jpg"
          alt="Gallery"
          className={`rounded-[24px] cursor-pointer hover:scale-105 transition ease-in-out ${
            hoveredIndex !== null && hoveredIndex !== 0 ? "blur-xs" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center gap-10">
            <img
              src="/assets/gallery2.jpg"
              alt="Gallery"
              className={`rounded-[24px] cursor-pointer hover:scale-105 transition ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== 1 ? "blur-xs" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
            <img
              src="/assets/gallery3.jpg"
              alt="Gallery"
              className={`rounded-[24px] cursor-pointer hover:scale-105 transition ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== 2 ? "blur-xs" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
          <div className="flex flex-col items-center gap-10">
            <img
              src="/assets/gallery4.jpg"
              alt="Gallery"
              className={`rounded-[24px] cursor-pointer hover:scale-105 transition ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== 3 ? "blur-xs" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
            <img
              src="/assets/gallery5.jpg"
              alt="Gallery"
              className={`rounded-[24px] cursor-pointer hover:scale-105 transition ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== 4 ? "blur-xs" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
