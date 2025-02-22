import MapContainer from './MapContainer.tsx';
import { Flex } from '@/components/Flex.tsx';
import Text from '@/components/Text.tsx';
import styled from '@emotion/styled';
import Tokens from '@/css/tokens.ts';
import FadeInWrapperHoc from "@/components/FadeInWrapper.tsx";

const GuideText = styled.li`
  color: ${Tokens.colors['font-color-pretty']};
  font-weight: bold;
  font-size: ${Tokens.fontSize.sm};
`;

const IndentText = styled(Text)`
  margin-left: 18px;
`;

const LocationFeature = () => {
  return (
    <LocationContainer>
      {/*// <TitleContainer title={'오시는 길'} />*/}
      <Flex style={{ width: '80%' }}>
        <Text color={'#0C6A31'} bold>
          Location
        </Text>
        <Text color={'#0C6A31'} bold size={'1.2rem'}>
          오시는 길
        </Text>
      </Flex>
      <Flex>
        <Text size={'1.1rem'} bold>
          비렌티 웨딩홀 3층 베르테홀
        </Text>
        <Text>충남 천안시 서북구 천안대로 1198-30</Text>
      </Flex>
      <MapContainer />
      <Flex style={{ width: '80%' }} gap={10}>
        <Flex fullWidth alignItems={'flex-start'} gap={5}>
          <GuideText>KTX하차 시 택시 이용</GuideText>
          <IndentText>천안아산역에서 택시 이용(20분 소요)</IndentText>
        </Flex>
        <Flex fullWidth alignItems={'flex-start'}>
          <GuideText>버스 이용 시 (공주대 공과대학 하차)</GuideText>
          <IndentText>
            1) 성환방면 100번대 버스 이용 후 천안 공주대학교에서 하차 후 도보
            5분
          </IndentText>
          <IndentText>2) 천안역(이태리안경) - 100, 110번</IndentText>
          <IndentText>3) 천안고속버스터미널(맥도날드앞)</IndentText>
        </Flex>
        <Flex fullWidth alignItems={'flex-start'}>
          <GuideText>셔틀버스 이용 시</GuideText>
          <IndentText>
            1) 천안종합터미널-신세계백화점(조각광장)-올리브영&스타벅스 건물 앞
            횡단보도
          </IndentText>
          <IndentText>
            2) 두정역-1번 출구에서 오른쪽 50m지점 파란색 셔틀버스 승강장
          </IndentText>
          <IndentText>* 예식시간 1시간 전부터 30분 간격</IndentText>
          <IndentText>* 시외버스터미널-&gt;두정역-&gt;웨딩홀</IndentText>
        </Flex>
      </Flex>
    </LocationContainer>
  );
};

const LocationContainer = styled(Flex)`
  width: 100%;
  gap: 15px;
`;

export default FadeInWrapperHoc(LocationFeature);;
