import './Gallery.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ImageGallery from 'react-image-gallery';
import image from '/assets/main.jpeg';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: image as string,
    thumbnail: image as string,
  },
];

const Gallery = () => {
  return (
    <ImageGallery
      items={images}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

export default Gallery;
