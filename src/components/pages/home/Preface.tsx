import React from 'react';

// components
import Container from '@/components/modules/container/container';
import FadeUpOnScroll from '@/components/modules/fadeUponScroll';

const Preface = () => {
  return (
    <Container>
      <FadeUpOnScroll>
        <div aria-label="preface wisdom" className="flex flex-col space-y-4 md:space-y-6">
          <div className="relative inline-block">
            <h2 className="font-medium text-lg md:text-3xl">Wisdom construction assistants</h2>
            <hr className="absolute left-0 -bottom-0.5 w-20 md:w-32 h-1 bg-main-color" />
          </div>
          <div className="flex flex-row flex-wrap shrink gap-6">
            <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
              บริษัท Wisdom construction assistants ตรวจบ้านโดยวิศวกรมืออาชีพ
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
              className="w-full h-full md:w-[400px] md:h-[300px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </Container>
  );
};

export default Preface;
