// libs
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { GalleryProps } from './gallery.type';

const Gallery = ({ isAllPlugins, isCounter, isThumbnails, isZoom, ...props }: GalleryProps) => {
  const appendPlugins = [];

  if (isAllPlugins) {
    appendPlugins.push(Counter, Zoom, Thumbnails);
  } else {
    if (isCounter) appendPlugins.push(Counter);
    if (isZoom) appendPlugins.push(Zoom);
    if (isThumbnails) appendPlugins.push(Thumbnails);
  }

  return <Lightbox plugins={appendPlugins} {...props} />;
};

export default Gallery;
