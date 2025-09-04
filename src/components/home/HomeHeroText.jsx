import React from 'react';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center relative depth-4 px-4 flex-1 flex items-center justify-center">
      <div className="w-full">
        <div className="text-[12vw] sm:text-[9vw] lg:text-[7vw] xl:text-[6vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[6vw] xl:leading-[5vw] text-layer-3 mb-2 sm:mb-0">
          You do the work
        </div>
        <div className="text-[12vw] sm:text-[9vw] lg:text-[7vw] xl:text-[6vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[6vw] xl:leading-[5vw] text-layer-3 flex-wrap justify-center mb-2 sm:mb-0">
          <span>we</span>
          <div className="h-[8vw] w-[20vw] sm:h-[7vw] sm:w-[16vw] lg:h-[5vw] lg:w-[12vw] xl:h-[4vw] xl:w-[10vw] rounded-full overflow-hidden mx-2 sm:mx-2 glass glow-accent flex-shrink-0 my-1 sm:my-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <span>do the</span>
        </div>
        <div className="text-[12vw] sm:text-[9vw] lg:text-[7vw] xl:text-[6vw] justify-center flex items-center uppercase leading-[10vw] sm:leading-[7.5vw] lg:leading-[6vw] xl:leading-[5vw] text-layer-3">
          stitches
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;