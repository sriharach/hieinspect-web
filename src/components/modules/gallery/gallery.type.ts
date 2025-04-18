import { LightboxExternalProps } from "yet-another-react-lightbox";

export interface GalleryProps extends LightboxExternalProps {
    isCounter?: boolean
    isZoom?: boolean
    isThumbnails?: boolean
    isAllPlugins?: boolean
}