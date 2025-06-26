import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-wider text-white fonte-serif mb-4">
          Spicey-O
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Handcrafted Kenyan condiments with bold, unforgettable flavour.
        </p>
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-gray-300">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-gray-400">
          © 2025 Spicey-O. All rights reserved. Proudly Kenyan.
        </p>
      </div>
    </footer>
  );
};

