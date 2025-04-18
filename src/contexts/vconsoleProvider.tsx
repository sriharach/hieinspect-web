'use client';

import { useEffect, useRef } from 'react';
import VConsole from 'vconsole';

const VconsoleProvider = ({ children }: { children: React.ReactNode }) => {
  const logRef = useRef<VConsole | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      logRef.current = new VConsole(); // เปิด console บนมือถือ
    }

    return () => {
      logRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default VconsoleProvider;
