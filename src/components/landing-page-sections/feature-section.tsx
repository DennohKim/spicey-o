import { Play, Pause, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { useState, useRef } from "react";

export const FeatureSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="features" className="bg-[#F8F5F0] py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-[#0A3A2A]">
          <h2 className="text-5xl font-serif">
            Celebrate life with a spoonful of spice
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Spicey-O began with dull office lunches and a jar of homemade
            chutney. One of our founders, who had spent years making chutney for
            friends and family, brought some to work and everything changed. The
            jars were passed around, lunches got louder, and food suddenly had
            flavour, excitement, and attitude.{" "}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We saw an opportunity to elevate everyday meals for more people in
            Kenya. Our approach? Source every ingredient locally. Work with
            trusted Kenyan suppliers. Cook in small batches to preserve quality.
            Every jar is a celebration of flavour, tradition, and the hustle of
            Kenyan food lovers.{" "}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center font-bold text-[#0A3A2A] group"
          >
            Our Story
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Card className="bg-white p-2 rounded-2xl shadow-xl w-full max-w-[300px]">
            <div className="relative">
              <video
                ref={videoRef}
                className="rounded-xl w-full h-[500px]"
                width={600}
                height={400}
                poster="/images/all_products.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/SpiceyO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button 
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-transform hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-[#0A3A2A] fill-[#0A3A2A]" />
                ) : (
                  <Play className="h-8 w-8 text-[#0A3A2A] fill-[#0A3A2A]" />
                )}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
