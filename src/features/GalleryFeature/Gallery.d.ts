declare module 'react-image-gallery' {
    import * as React from 'react';

    export interface Image {
        original: string;
        thumbnail: string;
        originalClass?: string;
        thumbnailClass?: string;
        description?: string;
        originalAlt?: string;
        thumbnailAlt?: string;
    }

    export interface ReactImageGalleryProps {
        items: Image[];
        showNav?: boolean;
        showFullscreenButton?: boolean;
        showPlayButton?: boolean;
        renderFullscreenButton?: (onClick: () => void, isFullScreen: boolean) => React.ReactNode;
        // Add other props as needed
    }

    export default class ReactImageGallery extends React.Component<ReactImageGalleryProps> {}
}
