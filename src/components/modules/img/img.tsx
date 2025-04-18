// libs
import React from 'react';

// type
import { ImgProps } from './img.type';

const Img = ({ onContextMenu, className, draggable = false, src, alt = 'Cover-image' }: ImgProps) => {
  let contextMemu = undefined;
  if (onContextMenu) contextMemu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => e.preventDefault();

  return (
    <img
      onContextMenu={contextMemu}
      draggable={draggable}
      alt={alt}
      className={className}
      src={src}
    />
  );
};

export default Img;
