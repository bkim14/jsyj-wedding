import { Flex } from '../../components/Flex.tsx';
import Gallery from './Gallery.tsx';
import Text from '@/components/Text.tsx';

const GalleryFeature = () => {
  return (
    <Flex fullWidth gap={15}>
      {/*<TitleContainer title={'Gallery'} />*/}
      <Flex style={{ width: '80%' }}>
        <Text color={'#0C6A31'} bold size={'1.2rem'}>
          Gallery
        </Text>
      </Flex>
      <Gallery />
    </Flex>
  );
};

export default GalleryFeature;
