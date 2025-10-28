import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onTakePledge: () => void;
  heroImage: string;
}

export function HeroSection({ onTakePledge, heroImage }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <ImageWithFallback
          src={heroImage}
          alt="Climate Action"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content with fade animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        style={{
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6"
        >
          Cool Enough to Care!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 opacity-90"
        >
          Join the global movement to fight climate change. Take your pledge today and inspire others to act.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={onTakePledge}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg hover:scale-105 transition-transform"
          >
            Take the Pledge
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
