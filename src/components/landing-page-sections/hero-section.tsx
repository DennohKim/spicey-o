import { Button } from "../ui/button";
import Image from "next/image";
import heroImage1 from "/public/images/motif/hero_image1.jpg";
import heroImage2 from "/public/images/motif/hero_images.jpg";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-[#0A3A2A] p-20 overflow-hidden relative rounded-[3rem]">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 opacity-30"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1, 
            rotate: 0,
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image 
            src="/images/motif/chilli.png" 
            alt="Chilli" 
            width={128} 
            height={128} 
            className="w-32 h-32 object-contain"
          />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 right-10 opacity-30 rotate-45"
          initial={{ opacity: 0, scale: 0, rotate: 225 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1, 
            rotate: [45, 55, 45]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 1,
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image 
            src="/images/motif/spices-leaf.png" 
            alt="Spices leaf" 
            width={192} 
            height={192} 
            className="w-48 h-48 object-contain"
          />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 right-20 opacity-30 -rotate-12"
          initial={{ opacity: 0, x: 100, rotate: -192 }}
          animate={{ 
            opacity: 0.3, 
            x: 0, 
            rotate: [-12, -22, -12]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.8,
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image 
            src="/images/motif/leafy-spice.png" 
            alt="Leafy spice" 
            width={96} 
            height={96} 
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-6 flex items-center justify-center relative">
          {/* Left Image */}
          <motion.div 
            className="hidden lg:block absolute left-0 -translate-x-1/3 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={heroImage1}
                alt="Bowl of pasta"
                className="rounded-full w-80 h-80 object-cover border-8 border-[#F8F5F0]"
                width={320}
                height={320}
              />
            </motion.div>
            <motion.div 
              className="absolute bottom-10 -right-5 bg-[#F8F5F0] p-4 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.5, type: "spring", bounce: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Image 
                src="/images/motif/chilli.png" 
                alt="Chilli" 
                width={64} 
                height={64} 
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
            className="text-center text-[#F8F5F0] max-w-lg z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-serif leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              Unleash your passion for flavor with us
            </motion.h1>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#E4A400] text-[#0A3A2A] hover:bg-[#E4A400]/90 font-bold rounded-full px-10 py-6 text-base cursor-pointer"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0', '_blank')}
                >
                  SHOP NOW
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="hidden lg:block absolute right-0 translate-x-1/3 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: 200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={heroImage2}
                alt="Another bowl of pasta"
                className="rounded-full w-96 h-96 object-cover border-8 border-[#F8F5F0]"
                width={400}
                height={400}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
