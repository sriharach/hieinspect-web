// libs
import React from 'react';
import styles from './footer.module.scss';

// components
import CallIcon from '@/components/modules/icons/CallIcon';
import EmailIcon from '@/components/modules/icons/EmailIcon';
import LineIcon from '@/components/modules/icons/LineIcon';

const Footer = () => {
  return (
    <footer className={styles['footer']} aria-description="footer">
      <div className={styles['footer-wrapper-box']}>
        <div className={styles['footer-width-grap']}>
          <span className="text-center text-xl md:text-3xl font-medium">ติดต่อเรา</span>
          <div className={styles['footer-grid-col-content']}>
            <div className={styles['footer-grid-col-content-detail']}>
              <CallIcon className="size-8 md:size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="tel:0618189899">06-1818-9899</a>
              </div>
            </div>
            <div className={styles['footer-grid-col-content-detail']}>
              <EmailIcon className="size-8 md:size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="mailto:wisdom.caa@gmail.com">wisdom.caa@gmail.com</a>
              </div>
            </div>
            <div className={styles['footer-grid-col-content-detail']}>
              <LineIcon className="size-8 md:size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="https://line.me/ti/p/%40wisdom.ca" target="_blank">
                  @wisdom.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm md:text-base shrink-0">
          <p>&copy; {new Date().getFullYear()} HIEinspect All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
