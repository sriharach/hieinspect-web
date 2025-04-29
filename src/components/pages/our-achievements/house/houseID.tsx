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
import { useQueryClient } from '@tanstack/react-query'

// hooks
import useHouseAchievements from '@/hooks/pages/useHouseAchievements';
import querykeys from '@/hooks/querykeys';

const HouseID = () => {
  const { houseDataOnce, isLoading, isError, showGallery, openShowGallery, setShowGallery, setOpenShowGallery } =
    useHouseAchievements();

    const queryClient = useQueryClient()

    const neDate = queryClient.getQueryData([querykeys.PATH_GET_HOUSE])
    console.log('neDate', neDate)

  return (
    <section id="our-achievements-house" aria-label="Our Achievements Section">
      <BackgroundLanding text={houseDataOnce?.name} />
      <Container loading={isLoading}>
        {isError ? (
          <ErrorMessageComponent />
        ) : (
          <ContainerContent>
            <div aria-label="cover-image-content" className="flex-1 flex justify-center">
              <Card radius="none" shadow="sm" className="lg:h-[620px] w-full">
                <Img onContextMenu src={houseDataOnce?.cover_image_house} className="w-auto h-full object-cover" />
              </Card>
            </div>
            <div aria-label="badge-categories" className="flex flex-col space-y-2 items-start">
              {houseDataOnce?.category_house && <Badge text={houseDataOnce?.category_house.name} classNameText="text-md md:text-xl" />} 
              <strong className="text-lg md:text-2xl font-medium">ชื่อโครงการ: {houseDataOnce?.name}</strong>
            </div>
            <Divider />
            <div aria-label="house-image" className="flex-1 space-y-4">
              {(houseDataOnce?.house_images || []).length === 0 ? (
                <span>ไม่มีรูปประกอบการ</span>
              ) : (
                <>
                  <p className="text-lg">รูปผลประกอบการ</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
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
                          <Card radius="sm" shadow="sm" className="h-[140px] md:h-[260px]">
                            <Img onContextMenu src={house_image.image} className="w-full h-full object-cover" />
                          </Card>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 rounded-md bg-black/40 transition-opacity">
                            <span className="text-white text-xl">ดูรูปภาพ</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
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
