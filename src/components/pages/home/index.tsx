'use client';

import BackgroundLanding from '@/components/modules/landing/backgroundLanding';
import { Button } from '@heroui/react';
import React from 'react';

const Home = () => {

  return (
    <>
      <BackgroundLanding text='Wisdom Construction' />
      <div className="xl:container mx-auto h-screen">
        {/* <Button
          className="mt-4"
          color="primary"
          onPress={() => {
            fetch('Car Mechanic Simulator 2021.zip').then((res) => {
              res.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Car Mechanic Simulator 2021';
                alink.click();
              });
            });
          }}
        >
          Download Save Game ของแพรวสุดมั่ว
        </Button> */}
      </div>
    </>
  );
};

export default Home;
