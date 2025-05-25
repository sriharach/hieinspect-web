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
    <FadeUpOnScroll>
      <section aria-label="inspect wisdom" className="flex flex-col space-y-4 md:space-y-6">
        <div className="relative inline-block md:text-end md:w-full">
          <h3 className="font-medium text-lg md:text-3xl">ขั้นตอนการตรวจสอบ Wisdom construction assistants</h3>
          <hr className="absolute md:right-0 -bottom-0.5 w-20 md:w-32 h-1 bg-main-color" />
        </div>
        {/* <div className="flex flex-row items-center shrink-0 space-x-2">
          <span className="font-medium text-md md:text-3xl">4 Step </span>
          <span className="font-medium text-sm md:text-xl">ขั้นตอนการตรวจบ้านกับ Wisdom</span>
          <div>
            TO DO
          </div>
        </div> */}
        <div className="flex flex-col gap-4">
          <div
            aria-label="หมวดโครงสร้าง"
            className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 px-12 shadow-md"
          >
            {/* Icon */}
            <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
              <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <HouseRoofOutline className="size-6 md:size-10 text-blue-800" />
              </i>
            </div>
            <div className="grid">
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
          </div>

          <section
            aria-label="หมวดงานสถาปัตยกรรม"
            className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 px-12 shadow-md"
          >
            {/* Icon */}
            <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
              <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <OutlineArchitecture className="size-8 md:size-12 text-blue-800" />
              </i>
            </div>
            <div className="grid">
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

          <section
            aria-label="หมวดระบบไฟฟ้า"
            className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 px-12 shadow-md"
          >
            {/* Icon */}
            <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
              <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <ElectricityOutline className="size-8 md:size-12 text-blue-800" />
              </i>
            </div>
            <div className="grid">
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

          <div
            aria-label="หมวดระบบประปา"
            className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 px-12 shadow-md"
          >
            {/* Icon */}
            <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
              <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <OutlineWaterDamage className="size-8 md:size-12 text-blue-800" />
              </i>
            </div>
            <div className="grid">
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
          </div>

          <div
            aria-label="หมวดงานตรวจสอบรั่วซึม"
            className="bg-gradient-main-color-fade w-full min-h-[240px] rounded-xl flex flex-col md:flex-row gap-8 items-center p-6 px-12 shadow-md"
          >
            {/* Icon */}
            <div className="relative size-16 md:size-24 shrink-0 bg-white rounded-full mr-6">
              <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <PipeLeak className="size-8 md:size-12 text-blue-800" />
              </i>
            </div>
            <div className="flex flex-col grow text-sm md:text-lg gap-1">
              <span className="font-medium">
                WISDOM ใช้อุปกรณ์อินฟาเรดความละเอียดสูง เพื่อแสกนหาจุดรั่วซึม
                ซึ่งอุปกรณ์ของเราสามารถตรวจสอบได้ลึกและเข้าถึงความชื้นได้อย่างชัดเจน
                สามารถทำให้พบการรั่วซึมถึงแม้รอยคราบน้ำจะไม่สามารถมองเห็นด้วยตาเปล่าได้
              </span>
            </div>
          </div>
        </div>
      </section>
    </FadeUpOnScroll>
  );
};

export default ReportInspect;
