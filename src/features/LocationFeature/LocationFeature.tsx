import MapContainer from './MapContainer.tsx';
import { Flex } from '../../components/Flex.tsx';
import styled from '@emotion/styled';
import TitleContainer from '../../components/TitleContainer.tsx';

const LocationFeature = () => {
  return (
    <LocationContainer>
      <TitleContainer title={'Location'} />
      <MapContainer />
    </LocationContainer>
  );
};

const LocationContainer = styled(Flex)`
  width: 100%;
  gap: 15px;
`;

export default LocationFeature;
