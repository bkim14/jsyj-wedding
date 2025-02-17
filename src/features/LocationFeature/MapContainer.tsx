import { MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Map } from 'react-kakao-maps-sdk';
import Text from '../../components/Text.tsx';
import { Flex } from '@/components/Flex.tsx';

const COORDINATE = { lat: 37.5251, lng: 126.929112756574 };

const MapContainer = () => {
  useKakaoLoader({
    appkey: '7109a98cefd759c1239ac72b9178a0bc', // 발급 받은 APPKEY
  });

  const refCallback = (node: HTMLDivElement) => {
    if (node) {
      node.parentElement?.setAttribute(
        'style',
        (node.parentElement?.getAttribute('style') || '').replace(
          'left: 0px;',
          'left: 20px;',
        ),
      );
    }
  };

  return (
    <Map
      center={COORDINATE}
      style={{ width: '80vw', height: '80vw' }}
      draggable={false}
      zoomable={false}
    >
      <MapMarker position={COORDINATE}>
        <Flex ref={refCallback} fullWidth column={false}>
          <Text bold>비렌티웨딩홀</Text>
        </Flex>
      </MapMarker>
    </Map>
  );
};

export default MapContainer;
