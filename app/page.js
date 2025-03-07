"use client";

import Footer from "@/components/Footer";
import Banner from "@/components/Homepage/Banner";
import Features from "@/components/Homepage/Features";
import Gallery from "@/components/Homepage/Gallery";
import Hero from "@/components/Homepage/Hero";
import Popular from "@/components/Homepage/Popular";
import Testimonials from "@/components/Homepage/Testimonials";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-3 w-full ">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Popular />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
}
