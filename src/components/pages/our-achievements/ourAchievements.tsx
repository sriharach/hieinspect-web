'use client';

// libs
import React from 'react';
import clsx from 'clsx';
import { Card, Select, SelectItem, Divider, Button } from '@heroui/react';

// components
import BackgroundLanding from '@/components/components/landing/backgroundLanding';
import Container from '@/components/components/container/container';
import InputHeroUi from '@/components/components/inputHeroUi';
import LoadingSkeleton from '@/components/components/loadingSkeleton/loadingSkeleton';
import SearchIcon from '@/components/components/icons/SearchIcon';

// hook
import useOurAchievements from '@/hooks/pages/useOurAchievements';

// style
import styles from './ourAchievements.module.scss';
import Loading from '@/components/components/loading/loading';

const OurAchievements = () => {
  const {
    categoriesData,
    housesData,
    realtysData,
    isLoading,
    isLoadingContent,
    isError,
    categoryID,
    onSetSearch,
    onCategoryModelHouse,
    onHandleSubmitSearch,
    onClickHouseAchievements,
  } = useOurAchievements();

  return (
    <section id="our-achievements" aria-label="Our Achievements Section">
      <BackgroundLanding text="ผลงานของเรา" />
      <Container>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <span className="text-red-600 uppercase font-normal">Unable to connect</span>
        ) : (
          <div className="flex flex-col space-y-8 shrink-0">
            {/* categories-section */}
            <div
              id="categories-section"
              aria-label="Categories Section"
              className={clsx(styles['our-achievements'], 'group')}
            >
              {categoriesData.map((category, index) => {
                return (
                  <div
                    key={category.id}
                    onClick={() => onCategoryModelHouse(category)}
                    className={clsx(
                      styles['our-achievements-layout-categories'],
                      'group-hover:scale-95 group-hover:opacity-60',
                      {
                        'lg:opacity-100 lg:group-hover:!opacity-100 lg:group-hover:!scale-100':
                          categoryID && category.id === categoryID,
                        [styles['our-achievements-outline']]: categoryID && category.id === categoryID,

                        'lg:opacity-60 lg:scale-95': categoryID && category.id !== categoryID,
                      },
                    )}
                  >
                    <Card radius="lg">
                      <img
                        draggable={false}
                        alt={`image-preview-${index + 1}`}
                        className={styles['our-achievements-card-img-categories']}
                        src={category.img_preview}
                      />
                      <div className={styles['our-achievements-desc']}>
                        <span className="text-lg text-white">{category.name}</span>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* content-section-house */}
            <div id="content-section-house" className="grid space-y-10" aria-label="Content Section House">
              <div aria-label="Filter Section" className="flex w-full flex-row-reverse flex-wrap gap-4">
                <div id="content-search" className="flex w-full md:w-[360px]">
                  {/* content-search */}
                  <InputHeroUi
                    size="sm"
                    startContent={<SearchIcon className="text-black/70 shrink-0 mb-1 h-3 w-3" />}
                    label="ค้นหาชื่อบ้าน"
                    placeholder="ค้นหา..."
                    classNames={{
                      inputWrapper: 'rounded-tr-none rounded-br-none',
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') onHandleSubmitSearch();
                    }}
                    onChange={(e) => onSetSearch(e.target.value)}
                  />

                  <div className={styles['our-achievements-icon-search']} onClick={onHandleSubmitSearch}>
                    <div className={styles['our-achievements-icon-layout']}>
                      <SearchIcon className="shrink-0 mb-1 h-4.5 w-4.5" />
                    </div>
                  </div>
                </div>
                {/* <Select
                  id="content-select-realtys"
                  variant="bordered"
                  size="sm"
                  className="w-full md:w-[360px]"
                  label="ค้นหาอสังหาริมทรัพย์"
                >
                  {realtysData.map((animal) => (
                    <SelectItem key={animal.id}>{animal.name}</SelectItem>
                  ))}
                </Select> */}
              </div>

              {isLoadingContent ? (
                <Loading />
              ) : (
                <>
                  <Divider />
                  <div
                    id="section-content-house"
                    aria-label="section-content-house"
                    className="grid grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {housesData.data.map((house) => {
                      return (
                        <div
                          key={house.id}
                          className="rounded-bl-none rounded-br-none flex flex-col shadow-md cursor-pointer"
                          onClick={() => onClickHouseAchievements(house.id)}
                        >
                          <Card radius="lg" className="rounded-bl-none rounded-br-none">
                            <img
                              draggable={false}
                              alt={`image-preview`}
                              className={styles['our-achievements-card-img-houses']}
                              src={'/images/twinhome_preview.webp'}
                            />
                            <div className="p-4 min-h-min flex flex-col">
                              <div className="border rounded-md p-1 max-w-max bg-main-color">
                                <span className="text-sm text-white">{house.realty.name}</span>
                              </div>
                              <span>{house.name}</span>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>

                  {housesData.meta.totalPages > 1 && (
                    <div
                      id="section-onload-more-data"
                      aria-label="section-onload-more-data"
                      className="flex justify-center flex-1"
                    >
                      <Button
                        variant="bordered"
                        className="w-full md:w-72 h-12 md:h-[70px] md:text-base"
                        color="primary"
                      >
                        ดูเพิ่มเติม
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default OurAchievements;
