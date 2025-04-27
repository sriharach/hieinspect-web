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
      <div className="flex flex-col w-full space-y-8 py-6">
        <div className="min-w-48 m-auto flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-row flex-grow-0 items-center gap-2">
              <CallIcon className="size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="tel:0618189899">06-1818-9899</a>
              </div>
            </div>
            <div className="flex flex-row flex-grow-0 items-center gap-2">
              <EmailIcon className="size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="mailto:wisdom.caa@gmail.com">wisdom.caa@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-row flex-grow-0 items-center gap-2">
              <LineIcon className="size-14" />
              <div className="flex flex-col shrink-0 text-sm">
                <span>สอบถามข้อมูล</span>
                <a href="https://line.me/ti/p/%40wisdom.ca" target='_blank'>@wisdom.ca</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shrink-0">
          <p>&copy; {new Date().getFullYear()} HIEinspect All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
