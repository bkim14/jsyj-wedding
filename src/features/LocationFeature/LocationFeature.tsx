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
        <Text>비렌티 웨딩 3층 베르테홀</Text>
        <Text>충남 천안시 서북구 천안대로 1198-30</Text>
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
