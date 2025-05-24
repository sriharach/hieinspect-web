'use client';

// components
import FadeUpOnScroll from '@/components/modules/fadeUponScroll';
import Container from '@/components/modules/container/container';
import BackgroundLanding from '@/components/modules/landing/backgroundLanding';
import CanvasWave from '@/components/modules/canvasWave';

// libs
import { Button } from '@heroui/react';
import React from 'react';

// assets
import { HouseRoofOutline } from '@/assets/svg/HouseRoofOutline';
import { OutlineArchitecture } from '@/assets/svg/OutlineArchitecture';
import { ElectricityOutline } from '@/assets/svg/ElectricityOutline';
import { OutlineWaterDamage } from '@/assets/svg/OutlineWaterDamage';

const Home = () => {
  return (
    <>
      <BackgroundLanding text="Wisdom Construction" />
      <Container>
        <FadeUpOnScroll>
          <div aria-label="preface wisdom" className="flex flex-col space-y-4 md:space-y-6">
            <div className="relative inline-block">
              <h3 className="font-medium text-lg md:text-3xl">Wisdom Construction</h3>
              <hr className="absolute left-0 -bottom-0.5 w-20 md:w-28 h-1 bg-main-color" />
            </div>
            <div className="flex flex-row flex-wrap gap-6">
              <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
                บริษัท Wisdom Construction ตรวจบ้านโดยวิศวกรมืออาชีพ
                ในการเลือกซื้อบ้านซึ่งถือเป็นการลงทุนที่สำคัญและมีมูลค่าสูง ผู้ซื้อส่วนใหญ่มักคำนึงถึงความสวยงาม
                ทำเลที่ตั้ง และราคาเป็นหลัก อย่างไรก็ตาม ปัจจัยที่ไม่ควรมองข้ามคือ ความมั่นคง แข็งแรง
                และความปลอดภัยของโครงสร้างบ้าน ซึ่งล้วนเป็นสิ่งที่ยากต่อการประเมินด้วยตาเปล่าสำหรับบุคคลทั่วไป
                การตรวจสอบบ้านโดยวิศวกรมืออาชีพจึงเป็นขั้นตอนสำคัญที่ช่วยให้ผู้ซื้อสามารถตัดสินใจได้อย่างมั่นใจมากยิ่งขึ้น
                วิศวกรมืออาชีพมีความรู้ ความเชี่ยวชาญ และประสบการณ์ในการประเมินสภาพบ้านทั้งในด้านโครงสร้าง ระบบไฟฟ้า
                ระบบประปา และองค์ประกอบอื่น ๆ ที่เกี่ยวข้อง
                เพื่อให้สามารถระบุข้อบกพร่องหรือความเสี่ยงที่อาจก่อให้เกิดปัญหาในอนาคตได้อย่างแม่นยำ
              </p>
              <img
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                src="/images/close-up-couple-taking-notes_.webp"
                className="w-full h-full lg:w-[600px] lg:h-[500px] rounded-xl"
                alt=""
              />
            </div>
          </div>
        </FadeUpOnScroll>
      </Container>
      {/* <CanvasWave /> */}
      <Container>
        <FadeUpOnScroll>
          <div aria-label="inspect wisdom" className="flex flex-col space-y-4 md:space-y-6">
            <div className="relative inline-block text-end w-full">
              <h3 className="font-medium text-lg md:text-3xl">ขั้นตอนการตรวจสอบ Wisdom Construction</h3>
              <hr className="absolute right-0 -bottom-0.5 w-20 md:w-28 h-1 bg-main-color" />
            </div>
            <div className="flex flex-col gap-4">
              <div aria-label='หมวดโครงสร้าง' className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 shadow-md">
                {/* Icon */}
                <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
                  <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <HouseRoofOutline className="size-6 md:size-10 text-blue-800" />
                  </i>
                </div>
                <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
                  <span className="font-medium text-md md:!text-xl">
                    หมวดโครงสร้าง WISDOM จะทำการตรวจสอบตั้งแต่จุดล่างสุดคือ
                  </span>
                  <li>
                    ในส่วนของพื้นอาทิเช่น การยุบตัวของพื้นลามิเนต SPC การร่อนตัวของกระเบื้อง ความหนาแน่นของปูน
                    รวมถึงระดับการวางแผ่นกระเบื้อง
                  </li>
                  <li>
                    ในส่วนตรงกลางอาทิเช่น การแตกร้าวของผนัง การบิ่นของขอบวงกบ พื้นผิวสีของผนังระนาบ และความแข็งแรง
                  </li>
                  <li>
                    ในส่วนตรงกลางอาทิเช่น การแตกร้าวของผนัง การบิ่นของขอบวงกบ พื้นผิวสีของผนังระนาบ และความแข็งแรง
                  </li>
                </ul>
              </div>

              <div aria-label='หมวดงานสถาปัตยกรรม' className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 shadow-md">
                {/* Icon */}
                <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
                  <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <OutlineArchitecture className="size-8 md:size-12 text-blue-800" />
                  </i>
                </div>
                <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
                  <span className="font-medium text-md md:!text-xl">
                    หมวดงานสถาปัตยกรรม WISDOM จะตรวจสอบความเรียบร้อยในอุปกรณ์ วัสดุส่วนควบตัวบ้าน อาทิเช่น
                  </span>
                  <li>ความลาดเอียงของราวจับบันได</li>
                  <li>ระนาบและระดับของกรอบปลั๊กไฟ</li>
                  <li>รอยต่อการเก็บขอบขั้นบันได</li>
                  <li>องศากรอบดวงไฟเพดาน</li>
                  <li>บานพับ วงกบ ประตูและหน้าต่าง รวมไปถึงสุขภัณฑ์ต่างๆ ทั้งหลัง</li>
                </ul>
              </div>

              <div aria-label='หมวดระบบไฟฟ้า' className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 shadow-md">
                {/* Icon */}
                <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
                  <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <ElectricityOutline className="size-8 md:size-12 text-blue-800" />
                  </i>
                </div>
                <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
                  <span className="font-medium text-md md:!text-xl">
                    หมวดระบบไฟฟ้า WISDOM ตรวจสอบระบบไฟฟ้าภายในที่พักอาศัยด้วยเครื่องมือเฉพาะทาง เพื่อประเมินค่าอาทิเช่น
                  </span>
                  <li>กำลังกระแสไฟฟ้าที่วิ่งเข้าเบรคเกอร์</li>
                  <li>การต่อสายไฟฟ้าถูกตามหลักวิศวกรรมไฟฟ้า</li>
                  <li>ตรวจเช็คกำลังไฟคล่อม กำลังไฟหลัก</li>
                  <li>ระบบเซฟตี้ป้องกันไฟฟ้าลัดวงจร</li>
                  <li>ระบบไฟฟ้าอำนวยความสะดวก ระบบ Lan ระบบ Cable ระบบกันขโมย</li>
                </ul>
              </div>

              <div aria-label='หมวดระบบไฟฟ้า' className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 shadow-md">
                {/* Icon */}
                <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
                  <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <OutlineWaterDamage className="size-8 md:size-12 text-blue-800" />
                  </i>
                </div>
                <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
                  <span className="font-medium text-md md:!text-xl">
                    หมวดระบบสุขาภิบาลและประปา WISDOM ตรวจสอบการระบายน้ำเสียครอบคลุมทั้งหลังในทุกส่วน อาทิเช่น
                  </span>
                  <li>การระบายน้ำเสียของซิงค์ห้องครัว</li>
                  <li>การระบายน้ำเสียของต่อเมนห้องน้ำ</li>
                  <li>การระบายน้ำของท่อรอบตัวบ้าน</li>
                  <li>การระบายน้ำของบ่อเกลอะ</li>
                  <li>การระบายของเสียจากโถสุขภัณฑ์</li>
                  <li>การบำบัดบ่อดักไขมัน</li>
                  <li>การติดตั้งอุปกรณ์ส่วนควบท่อน้ำ</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeUpOnScroll>
      </Container>
    </>
  );
};

export default Home;
