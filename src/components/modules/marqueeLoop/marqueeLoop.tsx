'use client';

import useMarqueeLoop from './useMarqueeLoop';

const MarqueeLoop = () => {
  useMarqueeLoop();
  return (
    <section aria-label="marquee" className="marquee-wrapper py-[4rem] md:py-[6rem] md:h-[220px]" id="marquee-container">
      <ul className="marquee md:gap-[2rem]" id="marquee">
        <li className="marquee-item">
          <img src="/realtys/ap_logo_.webp" className="w-full h-full bg-cover" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/realtys/assetwise_logo_.webp" className="w-full h-full bg-cover" alt=""/>
        </li>
        <li className="marquee-item">
          <img src="/realtys/origin_logo_.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/realtys/supalai_logo_.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/realtys/pruksa_logo_.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/realtys/sansiri_logo_.webp" className="w-full h-full" alt="" />
        </li>
      </ul>
    </section>
  );
};

export default MarqueeLoop;
