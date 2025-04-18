// lib
import { Skeleton } from '@heroui/react';
import React from 'react';

import { LoadingSkeletonProps } from './loadingSkeleton.type';


const LoadingSkeleton = ({ counts = 1 }: LoadingSkeletonProps) => {
  return (
    <div className="flex flex-row gap-3 justify-center m-auto">
      {counts && Array.from({length: counts}).map((_, index) => <Skeleton key={index} className="w-[260px] h-64 rounded-lg" />)}
    </div>
  );
};

export default LoadingSkeleton;
