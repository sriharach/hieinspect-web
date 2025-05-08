'use client';

// libs
import React from 'react';
import clsx from 'clsx';
import { Card, Select, SelectItem, Divider, Button } from '@heroui/react';
import Link from 'next/link';

// components
import BackgroundLanding from '@/components/modules//landing/backgroundLanding';
import Container from '@/components/modules//container/container';
import InputHeroUi from '@/components/modules//inputHeroUi';
import SearchIcon from '@/components/modules//icons/SearchIcon';
import ErrorMessageComponent from '@/components/modules//errorMessageComponent';
import ContainerContent from '@/components/modules//container/containerContent';
import Badge from '@/components/modules//badge/badge';

// hook
import useOurAchievements from '@/hooks/pages/useOurAchievements';

// style
import styles from './ourAchievements.module.scss';
import Loading from '@/components/modules//loading/loading';
import Img from '@/components/modules//img/img';

const OurAchievements = () => {
  const {
    categoriesData,
    housesData,
    realtysData,
    isLoading,
    isLoadingContent,
    isError,
    categoryID,
    toolsResearch,
    onSetSearch,
    onCategoryModelHouse,
    onHandleSubmitSearch,
    onClickHouseAchievements,
    onMorePage,
  } = useOurAchievements();

  return (
    <section id="our-achievements" aria-label="Our Achievements Section">
      <BackgroundLanding text="Hieinspect (Wisdom)" secondText="ผลงานของเรา" />
      <Container loading={isLoading}>
        {isError ? (
          <ErrorMessageComponent />
        ) : (
          <ContainerContent>
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
                      'lg:group-hover:scale-95 lg:group-hover:opacity-60',
                      {
                        'lg:opacity-100 lg:group-hover:!opacity-100 lg:group-hover:!scale-100':
                          categoryID && category.id === categoryID,
                        [styles['our-achievements-outline']]: categoryID && category.id === categoryID,

                        'lg:opacity-60 lg:scale-95': categoryID && category.id !== categoryID,
                      },
                    )}
                  >
                    <Card radius="lg">
                      <Img
                        onContextMenu
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
                    maxLength={40}
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
                    className="grid grid-cols-2 lg:grid-cols-3 gap-3"
                  >
                    {housesData.data.length === 0 ? (
                      <span>ไม่มีรายการตรวจสอบของโครงการ</span>
                    ) : (
                      housesData.data.map((house) => {
                        return (
                          <Link
                            key={house.id}
                            className="rounded-bl-none rounded-br-none flex flex-col shadow-md cursor-pointer"
                            href={onClickHouseAchievements(house.id)}
                            passHref
                          >
                            <Card radius="lg" className="rounded-bl-none rounded-br-none">
                              <Img
                                alt={`image-preview`}
                                className={styles['our-achievements-card-img-houses']}
                                src={house.cover_image_house}
                              />
                              <div className="p-4 min-h-8 h-full flex flex-col">
                                {house.category_house && <Badge text={house.category_house.name} />}
                                <span>{house.name}</span>
                              </div>
                            </Card>
                          </Link>
                        );
                      })
                    )}
                  </div>

                  {housesData.meta.totalPages > toolsResearch.page && (
                    <div
                      id="section-onload-more-data"
                      aria-label="section-onload-more-data"
                      className="flex justify-center flex-1"
                    >
                      <Button
                        onPress={onMorePage}
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
          </ContainerContent>
        )}
      </Container>
    </section>
  );
};

export default OurAchievements;
