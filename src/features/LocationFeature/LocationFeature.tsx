import MapContainer from './MapContainer.tsx';
import { Flex } from '../../components/Flex.tsx';
import styled from '@emotion/styled';

const LocationFeature = () => {
  return (
    <LocationContainer>
      <MapContainer />
    </LocationContainer>
  );
};

const LocationContainer = styled(Flex)`
  padding: 0 10vw;
  width: 100%;
`;

export default LocationFeature;
