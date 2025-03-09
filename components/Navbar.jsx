import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

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

  const services = {
    "Graphic Design": [
      "Logo Design",
      "Brand Identity",
      "Custom Illustrations",
      "Business Card Design",
      "Flyer & Brochure Design",
      "Product Label Design",
      "Menu & Packaging Design",
      "Social Media Graphics",
      "Infographics",
      "UI/UX Design",
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
    "Branding & Identity": [
      "Signage & Banners",
      "Custom Apparel Printing",
      "Vehicle Wraps",
      "Promotional Merchandise",
      "Branded Packaging",
      "Point of Sale Displays",
      "Trade Show Displays",
      "Custom Stamps & Seals",
      "Event Branding",
      "Franchise Branding Packages",
    ],
    "Custom Packaging": [
      "Custom Box Design",
      "Luxury Packaging",
      "Eco-Friendly Packaging",
      "Product Labels & Tags",
      "Custom Inserts & Dividers",
      "Tamper-Proof Packaging",
      "Subscription Box Printing",
      "Retail Shelf Displays",
      "Branded Mailers",
      "Food-Grade Packaging Solutions",
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
    "Web & Digital Services": [
      "Website Design & Development",
      "E-commerce Store Setup",
      "SEO & Digital Marketing",
      "Social Media Branding",
      "Custom Email Signatures",
      "QR Code Generation",
      "Online Portfolio Setup",
      "Interactive PDF & Digital Brochures",
      "AR-Enabled Print Materials",
      "Business Email & Hosting",
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

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center rounded-[12px] relative w-full z-20">
      {/* Logo */}
      <div className="text-2xl font-black">PrintByW</div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden lg:flex relative container max-w-screen-xl z-[110]">
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

          {/* Products Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 right-0 lg:w-[80vw] bg-white shadow-lg grid gap-3 p-4 grid-cols-5">
              {Object.entries(products).map(([category, items], index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {category}
                  </h3>
                  {items.map((item, i) => (
                    <NavigationMenuLink
                      key={i}
                      href="#"
                      className="block text-gray-600 hover:text-teal whitespace-nowrap"
                    >
                      {item}
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Services Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0 right-0 lg:w-[80vw] bg-white shadow-lg grid gap-3 p-4 grid-cols-4">
              {Object.entries(services).map(([category, items], index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {category}
                  </h3>
                  {items.map((item, i) => (
                    <NavigationMenuLink
                      key={i}
                      href="#"
                      className="block text-gray-600 hover:text-teal whitespace-nowrap"
                    >
                      {item}
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
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
        <div className="absolute top-full left-0 w-full h-screen overflow-scroll bg-white shadow-md p-4 flex flex-col space-y-3 justify-between lg:hidden z-[110] -mt-3">
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
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(products).map(([category, items], index) => (
                <div key={index}>
                  {/* Category Title (Clickable) */}
                  <h4
                    className="text-gray-700 cursor-pointer font-semibold flex flex-row items-center gap-1 text-[14px]"
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
                          className="block text-gray-600 hover:text-teal text-sm"
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

          {/* Mobile Services Dropdown */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2 text-[20px]">
              Services
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(services).map(([category, items], index) => (
                <div key={index}>
                  {/* Category Title (Clickable) */}
                  <h4
                    className="text-gray-700 cursor-pointer font-semibold flex flex-row items-center gap-1 text-[14px]"
                    onClick={() => toggleServiceCategory(category)}
                  >
                    {category}{" "}
                    {expandedServices[category] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </h4>

                  {/* Show Items Only If Category is Expanded */}
                  {expandedServices[category] && (
                    <div className="pl-4">
                      {items.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-gray-600 hover:text-teal text-sm"
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
