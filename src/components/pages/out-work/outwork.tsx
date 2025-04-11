'use client';

// libs
import React from 'react';
import clsx from 'clsx';
import { Card } from '@heroui/react';

// components
import BackgroundLanding from '@/components/components/landing/backgroundLanding';
import Container from '@/components/components/container/container';
import InputHeroUi from '@/components/components/inputHeroUi';
import LoadingSkeleton from '@/components/components/loadingSkeleton/loadingSkeleton';
import SearchIcon from '@/components/components/icons/SearchIcon';

// hook
import useOurwork from '@/hooks/pages/useOurwork';

// style
import styles from './outwork.module.scss';

const Ourwork = () => {
  const { categoriesData, housesData, isLoading, isError, categoryID, onCategoryModelHouse } = useOurwork();

  return (
    <section id="out-work" aria-label="Out Work Section">
      <BackgroundLanding text="ผลงานของเรา" />
      <Container>
        {isLoading ? (
          <LoadingSkeleton counts={3} />
        ) : isError ? (
          <span className="text-red-600 uppercase font-normal">Unable to connect</span>
        ) : (
          <div className="flex flex-col space-y-8 shrink-0">
            {/* categories-section */}
            <div id="categories-section" aria-label="Categories Section" className={clsx(styles['outwork'], 'group')}>
              {categoriesData.map((category, index) => {
                return (
                  <div
                    key={category.id}
                    onClick={() => onCategoryModelHouse(category)}
                    className={clsx(
                      styles['outwork-layout-categories'],
                      'group-hover:scale-95 group-hover:opacity-60',
                      {
                        'opacity-100 group-hover:!opacity-100 group-hover:!scale-100':
                          categoryID && category.id === categoryID,
                        'opacity-60 scale-95 ': categoryID && category.id !== categoryID,
                      },
                    )}
                  >
                    <Card radius="lg">
                      <img
                        draggable={false}
                        alt={`image-preview-${index + 1}`}
                        className="w-[220px] md:w-[340px] lg:w-[420px] xl:w-[560px] h-36 md:h-56 xl:h-64 object-cover"
                        src={category.img_preview}
                      />
                      <div className={styles['outwork-desc']}>
                        <span className="text-lg text-white">{category.name}</span>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* content-section-house */}
            <div id="content-section-house" className="grid space-y-10" aria-label="Content Section House">
              <div id="content-search" aria-label="Search Section" className="flex justify-end">
                <InputHeroUi
                  size="sm"
                  startContent={<SearchIcon className="text-black/70 shrink-0 mb-1 h-3 w-3" />}
                  label="ค้นหาชื่อบ้าน"
                  placeholder="ค้นหา..."
                  className="w-full md:w-[360px]"
                  classNames={{
                    inputWrapper: 'rounded-tr-none rounded-br-none',
                  }}
                />

                {/* content-search */}
                <div className={styles['outwork-icon-search']}>
                  <div className="flex justify-center m-auto items-center h-full hover:text-white text-black/70">
                    <SearchIcon className="shrink-0 mb-1 h-4.5 w-4.5" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {housesData.map((house) => {
                  return (
                    <div key={house.id}>
                      <Card radius="lg" className="rounded-bl-none rounded-br-none flex flex-col">
                        <img
                          draggable={false}
                          alt={`image-preview`}
                          className="w-auto h-36 md:h-56 xl:h-64 object-cover"
                          src={'/images/twinhome_preview.webp'}
                        />
                        <div className="px-4">{house.name}</div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Ourwork;
