import { Button } from "../ui/button";
import Image from "next/image";

// Helper: Pasta Icon SVG
const PastaIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M85.4167 29.1667C85.4167 29.1667 89.5833 41.6667 75 54.1667C60.4167 66.6667 41.6667 66.6667 33.3333 58.3333C25 50 25 37.5 37.5 29.1667C50 20.8333 62.5 20.8333 70.8333 29.1667"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M70.8333 70.8333C70.8333 70.8333 66.6667 58.3333 81.25 45.8333C95.8333 33.3333 114.583 33.3333 122.917 41.6667C131.25 50 131.25 62.5 118.75 70.8333C106.25 79.1667 93.75 79.1667 85.4167 70.8333"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(-40, 0)"
    />
  </svg>
);

export const HeroSection = () => {
  return (
    <>
      <section className="bg-[#0A3A2A] pt-20 pb-20 overflow-hidden relative rounded-[3rem]">
        <div className="absolute top-20 left-10 text-[#F8F5F0]/10">
          <PastaIcon className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#F8F5F0]/10 rotate-45">
          <PastaIcon className="w-48 h-48" />
        </div>
        <div className="absolute top-1/4 right-20 text-[#F8F5F0]/10 -rotate-12">
          <PastaIcon className="w-24 h-24" />
        </div>

        <div className="container mx-auto px-6 flex items-center justify-center relative">
          {/* Left Image */}
          <div className="hidden lg:block absolute left-0 -translate-x-1/3 top-1/2 -translate-y-1/2">
            <Image
              src="https://placehold.co/400x400/F8F5F0/333?text=Pasta+Bowl"
              alt="Bowl of pasta"
              className="rounded-full w-80 h-80 object-cover border-8 border-[#F8F5F0]"
            />
            <div className="absolute bottom-10 -right-5 bg-[#F8F5F0] p-4 rounded-full shadow-lg">
              <PastaIcon className="w-16 h-16 text-[#0A3A2A]" />
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
                className="bg-[#E4A400] text-[#0A3A2A] hover:bg-[#E4A400]/90 font-bold rounded-full px-10 py-6 text-base"
              >
                SHOP NOW
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block absolute right-0 translate-x-1/3 top-1/2 -translate-y-1/2">
            <Image
              src="https://placehold.co/400x400/F8F5F0/333?text=Fresh+Pasta"
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
