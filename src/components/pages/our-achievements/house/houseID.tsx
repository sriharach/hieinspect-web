'use client';

// libs
import React from 'react';
import { Card, Divider } from '@heroui/react';

// components
import BackgroundLanding from '@/components/modules//landing/backgroundLanding';
import Container from '@/components/modules//container/container';
import ContainerContent from '@/components/modules//container/containerContent';
import Badge from '@/components/modules//badge/badge';
import ErrorMessageComponent from '@/components/modules//errorMessageComponent';
import Img from '@/components/modules/img/img';
import Gallery from '@/components/modules/gallery/gallery';

// hooks
import useHouseAchievements from '@/hooks/pages/useHouseAchievements';

const HouseID = () => {
  const { houseDataOnce, isLoading, isError, showGallery, openShowGallery, setShowGallery, setOpenShowGallery } =
    useHouseAchievements();

  return (
    <section id="our-achievements-house" aria-label="Our Achievements Section">
      <BackgroundLanding text={houseDataOnce?.name} />
      <Container loading={isLoading}>
        {isError ? (
          <ErrorMessageComponent />
        ) : (
          <ContainerContent>
            <div aria-label="cover-image-content" className="flex-1 flex justify-center">
              <Card radius="none" shadow="sm" className="lg:h-[640px]">
                <Img onContextMenu src="/images/twinhome_preview.webp" className="w-auto h-full object-cover" />
              </Card>
            </div>
            <div aria-label="badge-categories" className="flex flex-col space-y-2 items-start">
              <Badge text={houseDataOnce?.category_house.name} classNameText="text-xl" />
              <strong className="text-2xl font-medium">ชื่อโครงการ: {houseDataOnce?.name}</strong>
            </div>
            <Divider />
            <div aria-label="house-image" className="flex-1 space-y-4">
              <p className="text-lg">รูปผลประกอบการ</p>
              <div className="grid grid-cols-4 gap-3">
                {(houseDataOnce?.house_images || []).map((house_image, index) => {
                  return (
                    <div
                      key={house_image.id}
                      onClick={() => {
                        setShowGallery(index);
                        setOpenShowGallery((prev) => !prev);
                      }}
                      className="relative cursor-pointer overflow-hidden"
                    >
                      <Card radius="sm" shadow="sm" className="h-[260px]">
                        <Img onContextMenu src={house_image.image} className="w-full h-full object-cover" />
                      </Card>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-black/40 transition-opacity">
                        <span className="text-white text-xl">ดูรูปภาพ</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ContainerContent>
        )}
      </Container>

      {/* aria-label:: the gallery image */}
      {openShowGallery && (
        <Gallery
          index={showGallery}
          open={openShowGallery}
          slides={(houseDataOnce?.house_images || []).map((house_image) => ({
            src: house_image.image,
          }))}
          close={() => {
            setShowGallery(0);
            setOpenShowGallery((prev) => !prev);
          }}
          isAllPlugins
        />
      )}
    </section>
  );
};

export default HouseID;
