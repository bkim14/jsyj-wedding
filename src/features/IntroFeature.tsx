import { Flex } from '../components/Flex.tsx';
import Text from '../components/Text.tsx';
import image from '../assets/MainImage.jpeg';
import styled from '@emotion/styled';
import tokens from '../css/tokens.ts';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }`;

const IntroFeature = () => {
  return (
    <Flex fullWidth gap={'30px'}>
      <Flex
        style={{
          zIndex: 100,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Flex css={{ paddingTop: '4vh' }}>
          <TitleText prettyColor cursive>
            Our Wedding Day
          </TitleText>
        </Flex>
        <img
          src={image as string}
          alt=""
          width="100%"
          style={{ visibility: 'hidden' }}
        />
      </Flex>
      <Flex gap="10px">
        <Text size={tokens.fontSize.md}>신랑 황정선 ♡ 신부 강윤정</Text>
        <Flex>
          <Text italic>2025. 05. 17 11:00</Text>
          <Text>비렌티웨딩홀 3층 베르테홀</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const TitleText = styled(Text)`
  font-size: ${tokens.fontSize.xxl};
  animation: ${fadeIn} 1s;
`;

export default IntroFeature;
