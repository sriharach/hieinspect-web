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
        {/* Reviewer customer  */}
        <Reviewer />
      </Container>
    </>
  );
};

export default Home;
