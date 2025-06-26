import { Button } from "../ui/button";
import Image from "next/image";
import SpiceyO from "/public/images/all_products.jpg";
import heroImage1 from "/public/images/motif/hero_image1.jpg";
import heroImage2 from "/public/images/motif/hero_images.jpg";


export const HeroSection = () => {
  return (
    <>
      <section className="bg-[#0A3A2A] pt-20 pb-20 overflow-hidden relative rounded-[3rem]">
        <div className="absolute top-20 left-10 opacity-30">
          <Image 
            src="/images/motif/chilli.png" 
            alt="Chilli" 
            width={128} 
            height={128} 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30 rotate-45">
          <Image 
            src="/images/motif/spices-leaf.png" 
            alt="Spices leaf" 
            width={192} 
            height={192} 
            className="w-48 h-48 object-contain"
          />
        </div>
        <div className="absolute top-1/4 right-20 opacity-30 -rotate-12">
          <Image 
            src="/images/motif/leafy-spice.png" 
            alt="Leafy spice" 
            width={96} 
            height={96} 
            className="w-24 h-24 object-contain"
          />
        </div>

        <div className="container mx-auto px-6 flex items-center justify-center relative">
          {/* Left Image */}
          <div className="hidden lg:block absolute left-0 -translate-x-1/3 top-1/2 -translate-y-1/2">
            <Image
              src={heroImage1}
              alt="Bowl of pasta"
              className="rounded-full w-80 h-80 object-cover border-8 border-[#F8F5F0]"
              width={320}
              height={320}
            />
            <div className="absolute bottom-10 -right-5 bg-[#F8F5F0] p-4 rounded-full shadow-lg">
              <Image 
                src="/images/motif/chilli.png" 
                alt="Chilli" 
                width={64} 
                height={64} 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center text-[#F8F5F0] max-w-lg z-10">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Unleash your passion for flavor with us
            </h1>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-[#E4A400] text-[#0A3A2A] hover:bg-[#E4A400]/90 font-bold rounded-full px-10 py-6 text-base cursor-pointer"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B254717996898&text&type=phone_number&app_absent=0', '_blank')}
              >
                SHOP NOW
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block absolute right-0 translate-x-1/3 top-1/2 -translate-y-1/2">
            <Image
              src={heroImage2}
              alt="Another bowl of pasta"
              className="rounded-full w-96 h-96 object-cover border-8 border-[#F8F5F0]"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};
