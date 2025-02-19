import { Flex } from '@/components/Flex.tsx';
import image from '../../assets/BottomImage.jpeg';
import flower from '../../assets/flower.png';

const RsvpFeature = () => {
  return (
      <Flex gap={15} fullWidth>
          <img
              src={flower as string}
              alt=""
              width="50%"
          />
          <img
              src={image as string}
              alt=""
              width="100%"
          />
      </Flex>
  );
};

export default RsvpFeature;
