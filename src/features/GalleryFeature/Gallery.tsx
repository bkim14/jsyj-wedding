import './Gallery.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ImageGallery from 'react-image-gallery';
import image1 from '../../assets/gallery1.jpeg';
import image2 from '../../assets/gallery2.jpeg';
import image3 from '../../assets/gallery3.jpeg';
import image4 from '../../assets/gallery4.jpeg';
import image5 from '../../assets/gallery5.jpeg';
import image6 from '../../assets/gallery6.jpeg';
import image7 from '../../assets/gallery7.jpeg';
import image8 from '../../assets/gallery8.jpeg';
import image9 from '../../assets/gallery9.jpeg';
import image10 from '../../assets/gallery10.jpeg';
import image11 from '../../assets/gallery11.jpeg';
import image12 from '../../assets/gallery12.jpeg';
import image13 from '../../assets/gallery13.jpeg';

const images = [
  {
    original: image5 as string,
    thumbnail: image5 as string,
  },
  {
    original: image10 as string,
    thumbnail: image10 as string,
  },
  {
    original: image2 as string,
    thumbnail: image2 as string,
  },
  {
    original: image3 as string,
    thumbnail: image3 as string,
  },
  {
    original: image4 as string,
    thumbnail: image4 as string,
  },
  {
    original: image12 as string,
    thumbnail: image12 as string,
  },
  {
    original: image13 as string,
    thumbnail: image13 as string,
  },
  {
    original: image7 as string,
    thumbnail: image7 as string,
  },
  {
    original: image8 as string,
    thumbnail: image8 as string,
  },
  {
    original: image9 as string,
    thumbnail: image9 as string,
  },
  {
    original: image11 as string,
    thumbnail: image11 as string,
  },
  {
    original: image1 as string,
    thumbnail: image1 as string,
  },
  {
    original: image6 as string,
    thumbnail: image6 as string,
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
