import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = React.useRef<HTMLElement>(null);
  // Get current time of day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]" ref={heroRef}>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 h-full relative z-10">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-xl">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-200 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                {getGreeting()} • We're live on air
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Swahilipot FM
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                A community radio station that brings you the latest news, music, and cultural programs. Our mission is to entertain, inform, and connect the youth and community at large.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full font-medium bg-[#271d73] text-white hover:bg-[#2295e2] h-12 px-8">
                  <Link to="/about">About Swahilipot FM</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full font-medium border-gray-300 h-12 px-8" asChild>
                  <Link to="/schedule">View Schedule</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Live Video Stream */}
          <div className="w-full md:w-1/2">
            <div className="bg-black rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                <div className="relative w-full h-full flex items-center justify-center">
                <iframe 
                  src="https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287&autoplay=1" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allow="autoplay" 
                  title="Swahilipot FM Live Stream"
                ></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;