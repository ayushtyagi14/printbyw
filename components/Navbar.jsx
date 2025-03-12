import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = {
    "Business Cards": [
      "Standard",
      "Premium",
      "Glossy",
      "Matte",
      "Rounded Corners",
      "Embossed",
      "Foil-Stamped",
      "Plastic",
      "Magnetic",
      "Spot UV",
    ],
    "Stationery & Office": [
      "Letterheads",
      "Envelopes",
      "Notebooks & Journals",
      "Sticky Notes",
      "Presentation Folders",
      "Appointment Cards",
      "Invoices & Receipts",
      "Pens & Writing Instruments",
      "Business Notepads",
      "Custom Stamps",
    ],
    "Marketing Materials": [
      "Flyers",
      "Posters",
      "Brochures",
      "Rack Cards",
      "Door Hangers",
      "Menus",
      "Postcards",
      "Table Tents",
      "Newsletters",
      "Event Tickets",
    ],
    "Signs & Banners": [
      "Vinyl Banners",
      "Mesh Banners",
      "Retractable Banners",
      "Yard Signs",
      "Foam Board Signs",
      "Window Decals",
      "Floor Graphics",
      "Acrylic Signs",
      "Metal & Aluminum Signs",
      "LED Signs",
    ],
    "Labels & Stickers": [
      "Die-Cut Stickers",
      "Roll Labels",
      "Waterproof Stickers",
      "Foil Stickers",
      "Holographic Stickers",
      "Clear Stickers",
      "Embossed Labels",
      "Product Labels",
      "Custom Decals",
      "Vinyl Lettering",
    ],
    "Apparel & Accessories": [
      "T-Shirts",
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "Caps & Hats",
      "Jackets",
      "Bags & Totes",
      "Socks",
      "Aprons",
      "Scarves & Beanies",
      "Face Masks",
    ],
    "Packaging & Retail": [
      "Custom Boxes",
      "Shopping Bags",
      "Hang Tags",
      "Gift Wrap & Tissue Paper",
      "Shipping Labels",
      "Custom Tape",
      "Food & Beverage Packaging",
      "Mailing Envelopes",
      "Wine & Bottle Packaging",
      "Product Sleeves",
    ],
    "Promotional Products": [
      "Mugs & Drinkware",
      "USB Drives",
      "Keychains",
      "Lanyards",
      "Magnets",
      "Tech Accessories",
      "Tote Bags",
      "Umbrellas",
      "Phone Cases",
      "Mouse Pads",
    ],
    "Home & Décor": [
      "Canvas Prints",
      "Photo Prints",
      "Custom Wall Art",
      "Wall Calendars",
      "Tabletop Photo Prints",
      "Pillows & Blankets",
      "Framed Posters",
      "Car Magnets",
      "Door Mats",
      "Custom Coasters",
    ],
    "Event & Wedding": [
      "Wedding Invitations",
      "Save the Dates",
      "Thank You Cards",
      "Event Programs",
      "Custom Napkins",
      "Table Numbers",
      "Place Cards",
      "Gift Tags",
      "Event Backdrops",
      "Guest Books",
    ],
    "Printing Services": [
      "Digital Printing",
      "Offset Printing",
      "Screen Printing",
      "Letterpress Printing",
      "3D Printing",
      "Foil Stamping",
      "Embossing & Debossing",
      "UV Coating",
      "Large Format Printing",
      "Custom Printing Solutions",
    ],
    "Signage & Large Format": [
      "Billboards & Outdoor Signage",
      "Building Wraps",
      "Acrylic & Metal Signs",
      "LED & Neon Signs",
      "Retail & Storefront Signage",
      "Wayfinding Signage",
      "Exhibition & Trade Show Displays",
      "Vehicle Graphics & Wraps",
      "Window Graphics & Clings",
      "Directional & Safety Signage",
    ],
    "Promotional Printing": [
      "Custom Merchandise Printing",
      "Event Swag & Giveaways",
      "Branded Corporate Gifts",
      "Personalized Office Supplies",
      "Employee Uniforms & Accessories",
      "Customer Loyalty Cards",
      "Direct Mail Campaigns",
      "Custom Packaging Inserts",
      "Personalized Holiday Gifts",
      "Limited Edition Print Runs",
    ],
    "Photography & Print": [
      "Photo Editing & Retouching",
      "Professional Photo Printing",
      "Canvas Printing",
      "Metal & Acrylic Prints",
      "Wall Art & Décor",
      "Photo Books & Albums",
      "Event & Wedding Photography Prints",
      "Fine Art Printing",
      "Custom Photo Calendars",
      "Passport & ID Printing",
    ],
    "Corporate Solutions": [
      "Bulk Printing Services",
      "Enterprise-Level Print Management",
      "On-Demand Printing",
      "Corporate Merchandise Fulfillment",
      "Custom CRM & Branding Packages",
      "Franchise Print Solutions",
      "Employee Swag Kits",
      "VIP & Executive Gifting",
      "Corporate Identity Design",
      "Subscription-Based Printing Services",
    ],
    "Technology & Digital": [
      "QR Code Stickers",
      "Digital Business Cards",
      "Smart NFC Cards",
      "Branded USB Sticks",
      "AR-Enhanced Prints",
      "Interactive Print Materials",
      "E-Gift Cards",
      "Branded Website Templates",
    ],
  };

  const [expandedProducts, setExpandedProducts] = useState({});
  const [expandedServices, setExpandedServices] = useState({});

  // Toggle function for Products
  const toggleProductCategory = (category) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle current category
    }));
  };

  // Toggle function for Services
  const toggleServiceCategory = (category) => {
    setExpandedServices((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle current category
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState("Business Cards");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Standard");

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center rounded-[12px] relative w-full z-20">
      {/* Logo */}
      <div className="text-2xl text-[#7f001e] font-black flex flex-row item-center cursor-pointer">
        PrintBy
        <img
          src="/assets/logo2.png"
          alt="PrintByW Logo"
          className="w-[68px] -mt-3 -ml-1"
        />
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden lg:flex relative container max-w-screen-3xl z-[110]">
        <NavigationMenuList className="flex space-x-3 font-medium">
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:text-teal">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:text-teal">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationMenuLink href="#" className="hover:text-teal">
                We Offer
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            {/* Full-Width Container */}
            <NavigationMenuContent className="absolute left-0 right-0 lg:w-[50vw] bg-white shadow-lg grid gap-3 p-4 grid-cols-2">
              {/* Left Column: Product Categories */}
              <div className="flex flex-col border-r pr-6">
                {Object.keys(products).map((category) => (
                  <button
                    key={category}
                    className={`text-left font-bold py-2 px-3 rounded-md cursor-pointer hover:bg-gray-200 flex flex-row items-center justify-between ${
                      selectedCategory === category ? "bg-gray-300" : ""
                    }`}
                    onMouseEnter={() => setSelectedCategory(category)}
                  >
                    {category} <ChevronRight />
                  </button>
                ))}
              </div>

              {/* Right Column: Products List */}
              <div className="pl-6">
                {products[selectedCategory].map((item, index) => (
                  <p
                    key={index}
                    className={`text-left font-light py-2 px-3 rounded-md cursor-pointer hover:bg-gray-200 ${
                      selectedSubCategory === item ? "bg-gray-200" : ""
                    }`}
                    onMouseEnter={() => setSelectedSubCategory(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="hover:text-teal">
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <button className="bg-[#1e1e24] text-white px-4 py-2 rounded-full hover:scale-95 cursor-pointer transition ease-in-out hidden lg:flex">
        Get In Touch
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-max overflow-scroll bg-white shadow-md p-4 flex flex-col space-y-3 justify-between lg:hidden z-[110] -mt-3 rounded-b-[12px]">
          <a href="#" className="hover:text-teal text-[20px]">
            Home
          </a>
          <a href="#" className="hover:text-teal text-[20px]">
            About
          </a>

          {/* Mobile Products Dropdown */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2 text-[20px]">
              Products
            </h3>
            <div className="grid grid-cols-1 gap-3 ml-3">
              {Object.entries(products).map(([category, items], index) => (
                <div key={index}>
                  {/* Category Title (Clickable) */}
                  <h4
                    className="text-gray-700 cursor-pointer font-semibold flex flex-row items-center w-full justify-between gap-1 text-[14px]"
                    onClick={() => toggleProductCategory(category)}
                  >
                    {category}{" "}
                    {expandedProducts[category] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </h4>

                  {/* Show Items Only If Category is Expanded */}
                  {expandedProducts[category] && (
                    <div className="pl-4">
                      {items.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-gray-600 hover:text-teal text-sm my-2"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="hover:text-teal text-[20px]">
            Contact Us
          </a>

          <button className="bg-[#1e1e24] text-white px-4 py-2 rounded-full hover:scale-95 cursor-pointer transition">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
