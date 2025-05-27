import React from 'react';

// components
import FadeUpOnScroll from '@/components/modules/fadeUponScroll';

// assets
import { HouseRoofOutline } from '@/assets/svg/HouseRoofOutline';
import { OutlineArchitecture } from '@/assets/svg/OutlineArchitecture';
import { ElectricityOutline } from '@/assets/svg/ElectricityOutline';
import { OutlineWaterDamage } from '@/assets/svg/OutlineWaterDamage';
import { PipeLeak } from '@/assets/svg/PipeLeak';

const ReportInspect = () => {
  return (
    <div
      aria-label="inspect wisdom"
      className="relative bg-black w-full h-full flex flex-col md:flex-row justify-center items-center py-12 px-12 shrink"
    >
      <img
        src="/images/inspect-board.webp"
        className="absolute opacity-35 z-10 top-0 left-0 w-full h-full object-cover"
        alt=""
      />

      <FadeUpOnScroll className="flex flex-col gap-6 md:gap-8 z-20 w-full md:w-[1200px]">
        {/* topic */}
        <div className="relative inline-block text-center md:w-full">
          <h3 className="font-medium text-lg md:text-3xl text-white">
            ขั้นตอนการตรวจสอบ Wisdom construction assistants
          </h3>
          <hr className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] w-20 md:w-32 h-1 bg-main-color" />
        </div>

        <section aria-label="หมวดโครงสร้าง" className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-12">
          {/* Icon */}
          <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full md:mr-6">
            <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <HouseRoofOutline className="size-6 md:size-10 text-[#F7B519]" />
            </i>
          </div>
          <div className="grid text-white">
            <span className="font-medium text-md md:!text-xl">
              หมวดโครงสร้าง WISDOM จะทำการตรวจสอบตั้งแต่จุดล่างสุดคือ
            </span>
            <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
              <li>
                ในส่วนของพื้นอาทิเช่น การยุบตัวของพื้นลามิเนต SPC การร่อนตัวของกระเบื้อง ความหนาแน่นของปูน
                รวมถึงระดับการวางแผ่นกระเบื้อง
              </li>
              <li>ในส่วนตรงกลางอาทิเช่น การแตกร้าวของผนัง การบิ่นของขอบวงกบ พื้นผิวสีของผนังระนาบ และความแข็งแรง</li>
              <li>ในส่วนตรงกลางอาทิเช่น การแตกร้าวของผนัง การบิ่นของขอบวงกบ พื้นผิวสีของผนังระนาบ และความแข็งแรง</li>
            </ul>
          </div>
        </section>

        <section
          aria-label="หมวดงานสถาปัตยกรรม"
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-12"
        >
          {/* Icon */}
          <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full md:md:mr-6">
            <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <OutlineArchitecture className="size-8 md:size-12 text-[#F7B519]" />
            </i>
          </div>
          <div className="grid text-white">
            <span className="font-medium text-md md:!text-xl">
              หมวดงานสถาปัตยกรรม WISDOM จะตรวจสอบความเรียบร้อยในอุปกรณ์ วัสดุส่วนควบตัวบ้าน อาทิเช่น
            </span>
            <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
              <li>ความลาดเอียงของราวจับบันได</li>
              <li>ระนาบและระดับของกรอบปลั๊กไฟ</li>
              <li>รอยต่อการเก็บขอบขั้นบันได</li>
              <li>องศากรอบดวงไฟเพดาน</li>
              <li>บานพับ วงกบ ประตูและหน้าต่าง รวมไปถึงสุขภัณฑ์ต่างๆ ทั้งหลัง</li>
            </ul>
          </div>
        </section>

        <section aria-label="หมวดระบบไฟฟ้า" className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-12">
          {/* Icon */}
          <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full md:mr-6">
            <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <ElectricityOutline className="size-8 md:size-12 text-[#F7B519]" />
            </i>
          </div>
          <div className="grid text-white">
            <span className="font-medium text-md md:!text-xl">
              หมวดระบบไฟฟ้า WISDOM ตรวจสอบระบบไฟฟ้าภายในที่พักอาศัยด้วยเครื่องมือเฉพาะทาง เพื่อประเมินค่าอาทิเช่น
            </span>
            <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
              <li>กำลังกระแสไฟฟ้าที่วิ่งเข้าเบรคเกอร์</li>
              <li>การต่อสายไฟฟ้าถูกตามหลักวิศวกรรมไฟฟ้า</li>
              <li>ตรวจเช็คกำลังไฟคล่อม กำลังไฟหลัก</li>
              <li>ระบบเซฟตี้ป้องกันไฟฟ้าลัดวงจร</li>
              <li>ระบบไฟฟ้าอำนวยความสะดวก ระบบ Lan ระบบ Cable ระบบกันขโมย</li>
            </ul>
          </div>
        </section>

        <section aria-label="หมวดระบบประปา" className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-12">
          {/* Icon */}
          <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full md:mr-6">
            <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <OutlineWaterDamage className="size-8 md:size-12 text-[#F7B519]" />
            </i>
          </div>
          <div className="grid text-white">
            <span className="font-medium text-md md:!text-xl">
              หมวดระบบสุขาภิบาลและประปา WISDOM ตรวจสอบการระบายน้ำเสียครอบคลุมทั้งหลังในทุกส่วน อาทิเช่น
            </span>
            <ul className="flex flex-col grow text-sm md:text-lg gap-1 list-disc">
              <li>การระบายน้ำเสียของซิงค์ห้องครัว</li>
              <li>การระบายน้ำเสียของต่อเมนห้องน้ำ</li>
              <li>การระบายน้ำของท่อรอบตัวบ้าน</li>
              <li>การระบายน้ำของบ่อเกลอะ</li>
              <li>การระบายของเสียจากโถสุขภัณฑ์</li>
              <li>การบำบัดบ่อดักไขมัน</li>
              <li>การติดตั้งอุปกรณ์ส่วนควบท่อน้ำ</li>
            </ul>
          </div>
        </section>

        <section
          aria-label="หมวดงานตรวจสอบรั่วซึม"
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-12"
        >
          {/* Icon */}
          <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full md:mr-6">
            <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <PipeLeak className="size-8 md:size-12 text-[#F7B519]" />
            </i>
          </div>
          <div className="flex flex-col grow text-sm md:text-lg gap-1 text-white">
            <span className="font-medium">
              WISDOM ใช้อุปกรณ์อินฟาเรดความละเอียดสูง เพื่อแสกนหาจุดรั่วซึม
              ซึ่งอุปกรณ์ของเราสามารถตรวจสอบได้ลึกและเข้าถึงความชื้นได้อย่างชัดเจน
              สามารถทำให้พบการรั่วซึมถึงแม้รอยคราบน้ำจะไม่สามารถมองเห็นด้วยตาเปล่าได้
            </span>
          </div>
        </section>
      </FadeUpOnScroll>
    </div>
  );
};

export default ReportInspect;
