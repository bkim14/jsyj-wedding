import { Flex } from '../../components/Flex.tsx';
import Gallery from './Gallery.tsx';
import TitleContainer from '@/components/TitleContainer.tsx';

const GalleryFeature = () => {
  return (
    <Flex gap={15}>
      <TitleContainer title={'Gallery'} />
      <Gallery />
    </Flex>
  );
};

export default GalleryFeature;
