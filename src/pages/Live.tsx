import React, { useRef } from 'react';
import { ArrowLeft, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Video = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className='container md:min-h-screen mb-12 mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Button variant='ghost' className='rounded-full pl-3' asChild>
          <Link to='/'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Home
          </Link>
        </Button>
      </div>

      <h1 className='text-2xl md:text-3xl font-bold mb-4'>Livestream</h1>

      <div
        ref={videoContainerRef}
        className='aspect-video w-full overflow-hidden rounded-lg bg-black relative'
      >
        <iframe
          src='https://player.restream.io/?token=68d2f8a7eac34f1c849a452c55ac1287&autoplay=1'
          className='w-full h-full border-0'
          allow='autoplay'
          title='Swahilipot FM Live Stream'
        ></iframe>
        <button
          onClick={handleFullscreen}
          className='absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700'
          aria-label='Fullscreen'
        >
          <Maximize2 className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
};

export default Video;
