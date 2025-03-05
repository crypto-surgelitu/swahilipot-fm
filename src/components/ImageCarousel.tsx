
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
  autoPlayInterval?: number;
  className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ 
  images, 
  autoPlayInterval = 5000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Move to the next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval <= 0 || images.length <= 1) return;
    
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval, images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Main carousel */}
      <div className="w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              
              {images[currentIndex].title && (
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-xl md:text-2xl font-bold">{images[currentIndex].title}</h3>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
