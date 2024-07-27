import { Flex } from '../components/Flex.tsx';
import Text from '../components/Text.tsx';
import image from '../assets/main.jpeg';
import styled from '@emotion/styled';
import tokens from '../css/tokens.ts';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import Placeholder from '../components/Placeholder.tsx';

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
  const [loaded, setLoaded] = useState(false);

  return (
    <Flex gap="15px">
      <Flex style={{ zIndex: 100 }}>
        <TitleText prettyColor cursive>
          We are getting
        </TitleText>
        <TitleText prettyColor cursive>
          Married
        </TitleText>
      </Flex>
      {!loaded && <Placeholder />}
      <img
        src={image as string}
        alt=""
        width="100%"
        style={{ position: 'relative', top: '-25vh' }}
        onLoad={() => setLoaded(true)}
      />
      <Flex gap="10px">
        <Text size={tokens.fontSize.md}>신랑 김치현 ♡ 신부 장여진</Text>
        <Flex>
          <Text italic>2025. 02. 16 12:00</Text>
          <Text>페어몬트 앰버서더 서울</Text>
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
