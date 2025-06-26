import { LucideInstagram, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpiceyO from "/public/spicey-o.png";

export const Header = () => {
  return (
    <header className="bg-[#F8F5F0] py-4">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-16">
          {/* Left Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-[#0A3A2A] cursor-pointer"
            >
              Our Story
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-gray-700 hover:text-[#0A3A2A] cursor-pointer"
            >
              Products
            </a>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <Image
              src={SpiceyO}
              alt="Spicey O logo"
              width={100}
              height={100}
            />
          </div>

          {/* Right Nav */}
          <div className="flex items-center space-x-6">
            <button 
              className="text-gray-800 hover:text-[#0A3A2A] cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/_spiceyo/', '_blank')}
            >
              <LucideInstagram className="h-5 w-5" />
            </button>
            {/* <button className="text-gray-800 hover:text-[#0A3A2A]">
              <LucideInstagram className="h-5 w-5" />
            </button> */}

            <button 
              className="relative text-gray-800 hover:text-[#0A3A2A] cursor-pointer"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0', '_blank')}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
