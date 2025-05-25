'use client';

import Container from '@/components/modules/container/container';
import FadeUpOnScroll from '@/components/modules/fadeUponScroll';
import BackgroundLanding from '@/components/modules/landing/backgroundLanding';
import React from 'react';

const About = () => {
  return (
    <>
      <BackgroundLanding image="wisdom" />
      <Container className="md:pt-8">
        <FadeUpOnScroll>
          <div className="flex flex-col space-y-8 md:space-y-20">
            <div aria-label="about wisdom" className="flex flex-col space-y-4 md:space-y-6">
              <div className="relative inline-block">
                <h3 className="font-medium text-lg md:text-3xl">WISDOM คือใคร ?</h3>
                <hr className="absolute left-0 -bottom-0.5 w-20 md:w-32 h-1 bg-main-color" />
              </div>
              <div className="flex flex-row justify-center shrink gap-6 flex-wrap lg:flex-nowrap">
                <div className="flex flex-col gap-6">
                  <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
                    WISDOM เป็นผู้ประกอบการดำเนินธุรกิจในแวดวงวิศวกรรมมาอย่างยาวนาน ผลิตวิศวกรคุณภาพในหลากหลายสาขา
                    อาทิเช่น วิศวกรโยธา วิศวกรไฟฟ้า และวิศวกรสาขาอื่นๆ
                    เพื่อรองรับความต้องการของลูกค้าในการใช้บริการในด้านต่างๆของเรา
                  </p>
                  <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
                    WISDOM ทำอะไร ? WISDOM เป็นผู้ผลิต,เป็นผู้ช่วยเหลือ เเละเป็นที่ปรึกษา ทางด้านวิศวกรรมครบวงจร
                    เราพัฒนาขอบเขตและเครือข่ายในด้านต่างๆเพื่อรองรับการใช้บริการของลูกค้าแบบ One - Stop Service
                  </p>
                  <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
                    โดยเริ่มจาก WISDOM ตรวจบ้าน คอนโด ด้วยมาตราฐานมืออาชีพ
                    เราให้บริการตรวจสอบที่พักอาศัยก่อนส่งมอบกรรมสิทธิ์ เพื่อให้ลูกค้าได้บ้าน คอนโด
                    ที่ดีที่สุดและเพียบพร้อมโดยไม่ต้องกังวลใจภายหลัง WISDOM construction
                    เราให้บริการต่อเติม,แก้ไขซ่อมแซมที่พักอาศัย อาทิเช่น ต่อเติมครัว ต่อเติมหลังคา ซ่อมแซมที่พักอาศัย
                    อาทิเช่น รอยร้าว น้ำรั่วซึม งานฝ้า งานประปา หรือเรียกได้ว่าทุกภาคส่วนของที่พักอาศัย WISDOM
                    Construction Assistant :เราให้บริการสำหรับเป็นที่ปรึกษาในการปลูกสิ่งก่อสร้างอาทิเช่น บ้าน ตึกแถว
                    อาคาร เราให้คำปรึกษาทุกรูปแบบ ควบคุมค่าใช้จ่ายและการดำเนินงานให้าอดคล้องกัน
                    เพื่อป้องกันไม่ให้ลูกค้าเสียหายจากการโดนผู้รับเหมาโก่งราคา หรือเทงาน
                    รวมไปถึงบริการเสริมรับออกแบบภายในสำหรับทั้งบ้านใหม่และบ้านเก่ารีโนเวท
                  </p>
                </div>
                <img
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  src="/images/male-worker-writing-clipboard_.webp"
                  className="w-full h-full md:w-[400px] md:h-[300px] rounded-xl"
                  alt=""
                />
              </div>
            </div>
            <div aria-label="why wisdom" className="flex flex-col space-y-4 md:space-y-6">
              <div className="relative inline-block">
                <h3 className="font-medium text-lg md:text-3xl">ทำไมต้อง WISDOM</h3>
                <hr className="absolute left-0 -bottom-0.5 w-20 md:w-32 h-1 bg-main-color" />
              </div>
              <p aria-label="description wisdom" className="text-sm md:text-xl shrink flex-1">
                ด้วยประสบการณ์ด้านงานวิศวกรรมมาอย่างยาวนาน ทำให้การดำเนินงานในทุกหมวดหมู่นั้นดำเนินงานได้อย่างราบรื่น
                ชัดเจน และเเม่นยำเรายินดีให้คำปรึกษาทั้งลูกค้าเก่าและลูกค้าใหม่ตลอดเงื่อนไข โดยไม่จำกัดเวลา
                ไม่ว่าลูกค้าจะตรวจบ้านกับเราแล้วนานเพียงใด หรือลูกค้าซ่อมแซมกับเราไปนานแค่ไหน เรายังพร้อมให้คำปรึกษา
                แนะนำ ในทุกข้อสงสัยเกี่ยวกับอสังหาริมทรัพย์ โดยไม่มีค่าใช้จ่าย
              </p>
            </div>
          </div>
        </FadeUpOnScroll>
      </Container>
    </>
  );
};

export default About;
