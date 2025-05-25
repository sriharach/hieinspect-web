'use client';

// components
import Container from '@/components/modules/container/container';
import BackgroundLanding from '@/components/modules/landing/backgroundLanding';
import CanvasWave from '@/components/modules/canvasWave';
import Preface from './Preface';
import Reviewer from './Reviewer';
import ReportInspect from './ReportInspect';

// libs
import React from 'react';
import MarqueeLoop from '@/components/modules/marqueeLoop/marqueeLoop';

const Home = () => {
  return (
    <>
      <BackgroundLanding text="Wisdom construction assistants" />
      {/* Preface wisdom */}
      <Preface />

      <CanvasWave />

      <Container className="flex flex-col md:py-8 space-y-8">
        {/* Report Inspect */}
        <ReportInspect />

        <div className='pt-4 md:pt-8'>
          <div className="relative inline-block text-center md:w-full">
            <h3 className="font-medium text-lg md:text-3xl">โครงการที่ได้รับการตรวจ</h3>
            <hr className="absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] w-20 md:w-32 h-1 bg-main-color" />
          </div>
          <MarqueeLoop />
        </div>

        {/* Reviewer customer  */}
        <Reviewer />
      </Container>
    </>
  );
};

export default Home;
