import React from 'react';
import FadeUpOnScroll from '@/components/modules/fadeUponScroll';

const Reviewer = () => {
  return (
    <FadeUpOnScroll>
      <div aria-label="reviewer customer" className="flex flex-col space-y-4 md:space-y-6 md:pt-6">
        <div className="relative inline-block">
          <h3 className="font-medium text-lg md:text-3xl">รีวิวจากลูกค้า</h3>
          <hr className="absolute left-0 -bottom-0.5 w-20 h-1 bg-main-color" />
        </div>
        <div className="relative flex flex-row flex-wrap justify-center gap-4 md:gap-12 md:px-12">
          <img
            draggable={false}
            src="/S__38232068_.webp"
            className=" md:h-[560px] w-full md:w-[400px] rounded-xl object-cover"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
          />
          <img
            draggable={false}
            src="/S__38232070_.webp"
            className=" md:h-[560px] w-full md:w-[400px] rounded-xl object-cover"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </FadeUpOnScroll>
  );
};

export default Reviewer;
