import { MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Map } from 'react-kakao-maps-sdk';

const COORDINATE = { lat: 37.5251, lng: 126.929112756574 };

const MapContainer = () => {
  useKakaoLoader({
    appkey: '7109a98cefd759c1239ac72b9178a0bc', // 발급 받은 APPKEY
  });

  return (
    <Map
      center={COORDINATE}
      style={{ width: '80vw', height: '360px' }}
      draggable={false}
      zoomable={true}
    >
      <MapMarker position={COORDINATE} />
    </Map>
  );
};

export default MapContainer;
