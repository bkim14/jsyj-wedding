import styled from '@emotion/styled';
import Text from '../components/Text.tsx';
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

const AnimationText = styled(Text)`
  animation: ${fadeIn} 1s;
`;

export default AnimationText;
