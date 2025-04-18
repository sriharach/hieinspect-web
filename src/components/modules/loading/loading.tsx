import React from 'react';
import { Spinner } from '@heroui/spinner';
import { LoadingProps } from './loading.type';

const Loading = ({ variant = 'simple', ...props }: LoadingProps) => {
  return (
    <div className="h-full min-h-56 justify-self-center">
      <Spinner
        draggable={false}
        variant={variant}
        classNames={{
          wrapper: 'text-main-color',
        }}
        {...props}
      />
    </div>
  );
};

export default Loading;
