import MapContainer from './MapContainer.tsx';
import { Flex } from '@/components/Flex.tsx';
import Text from '@/components/Text.tsx';
import styled from '@emotion/styled';
import TitleContainer from '@/components/TitleContainer.tsx';

const LocationFeature = () => {
  return (
    <LocationContainer>
      <TitleContainer title={'오시는 길'} />
      <Flex gap={5}>
        <Text>페어몬트 앰버서더 호텔</Text>
        <Text>그랜드 볼룸</Text>
        <Text>서울 영등포구 여의대로 108</Text>
      </Flex>
      <MapContainer />
    </LocationContainer>
  );
};

const LocationContainer = styled(Flex)`
  width: 100%;
  gap: 15px;
`;

export default LocationFeature;
