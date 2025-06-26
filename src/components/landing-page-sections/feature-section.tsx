import { Play, Pause, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export const FeatureSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="features" className="bg-[#F8F5F0] py-24" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-[#0A3A2A]"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl font-serif"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Celebrate life with a spoonful of spice
          </motion.h2>
          <motion.p 
            className="mt-6 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Spicey-O began with dull office lunches and a jar of homemade
            chutney. One of our founders, who had spent years making chutney for
            friends and family, brought some to work and everything changed. The
            jars were passed around, lunches got louder, and food suddenly had
            flavour, excitement, and attitude.{" "}
          </motion.p>
          <motion.p 
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We saw an opportunity to elevate everyday meals for more people in
            Kenya. Our approach? Source every ingredient locally. Work with
            trusted Kenyan suppliers. Cook in small batches to preserve quality.
            Every jar is a celebration of flavour, tradition, and the hustle of
            Kenyan food lovers.{" "}
          </motion.p>
          <motion.a
            href="#"
            className="mt-6 inline-flex items-center font-bold text-[#0A3A2A] group"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ x: 10 }}
          >
            Our Story
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white p-2 rounded-2xl shadow-xl w-full max-w-[300px]">
              <div className="relative">
                <motion.video
                  ref={videoRef}
                  className="rounded-xl w-full h-[500px]"
                  width={600}
                  height={400}
                  poster="/images/all_products.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  animate={isPlaying ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <source src="/videos/SpiceyO.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.button 
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isPlaying ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-[#0A3A2A] fill-[#0A3A2A]" />
                  ) : (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Play className="h-8 w-8 text-[#0A3A2A] fill-[#0A3A2A]" />
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
