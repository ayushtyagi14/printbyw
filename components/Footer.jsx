import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="w-[95%] lg:max-w-screen-xl mx-auto">
        {/* Contact Form */}
        <div className="w-[95%] lg:max-w-screen-lg mx-auto mb-10 p-6 bg-[#000000] rounded-lg">
          <h2 className="text-[28px] lg:text-[40px] font-black mb-4 text-center text-white">
            Get a Quote
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#252525] text-white border border-gray-700 placeholder-gray-400"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#252525] text-white border border-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Your Phone"
                required
                className="bg-[#252525] text-white border border-gray-700 placeholder-gray-400"
              />
              <Input
                type="text"
                placeholder="Service Required"
                required
                className="bg-[#252525] text-white border border-gray-700 placeholder-gray-400"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              required
              className="bg-[#252525] text-white border border-gray-700 placeholder-gray-400"
            />
            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold hover:bg-gray-300 transition"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="w-[95%] lg:max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold">PrintByW</h2>
            <p className="mt-2 text-sm text-gray-400">
              High-quality printing services for businesses and individuals.
              Fast, reliable, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-gray-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-gray-300 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300 transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="/services/business-cards"
                  className="hover:text-gray-300 transition"
                >
                  Business Cards
                </a>
              </li>
              <li>
                <a
                  href="/services/brochures"
                  className="hover:text-gray-300 transition"
                >
                  Stationery & Office
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Marketing Materials
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Signs & Banners
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Labels & Stickers
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Apparel & Accessories
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Packaging & Retail
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Promotional Products
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Home & Décor
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Event & Wedding
                </a>
              </li>
              <li>
                <a
                  href="/services/tshirt-printing"
                  className="hover:text-gray-300 transition"
                >
                  Technology & Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="/services/business-cards"
                  className="hover:text-gray-300 transition"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="/services/brochures"
                  className="hover:text-gray-300 transition"
                >
                  Printing Services
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Branding & Identity
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Custom Packaging
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Signage & Large Format
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Promotional Printing
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Photography & Print
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Web & Digital Services
                </a>
              </li>
              <li>
                <a
                  href="/services/posters"
                  className="hover:text-gray-300 transition"
                >
                  Corporate Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PrintByW. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
