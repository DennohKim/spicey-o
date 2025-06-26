"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Our story", href: "#" },
  { label: "Discover", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-900 hover:text-orange-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-1 justify-center items-center">
            <Link href="/" className="flex flex-col items-center gap-1 select-none">
              <span className="font-black text-xl tracking-widest leading-none text-gray-900" >
                SPICEYO
              </span>
            </Link>
          </div>

          {/* Right: Log In, Search, Cart */}
          <div className="hidden md:flex gap-2 items-center">
            <Button variant="default" size="lg" className="text-base font-medium px-2">
              Shop
            </Button>
            <div className="p-2 rounded-full " aria-label="Cart">
              <ShoppingCart size={22} className="text-primary/60 hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fcf6ec] border-t border-[#f5e9d7] px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-900 hover:text-orange-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="text-base font-medium px-2 w-fit">
              Shop
            </Button>
            <div className="flex gap-4 mt-2">
             
              <div className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Cart">
                <ShoppingCart size={22} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
