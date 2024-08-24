import styled from '@emotion/styled';
import { Flex } from './Flex.tsx';
import Tokens from '../css/tokens.ts';

const MainLayer = styled(Flex)`
  width: 100vw;
  gap: 30vh;
  background-color: ${Tokens.colors['main-background2']};
  font-size: 16px;
  padding-bottom: 50px;
`;

export default MainLayer;
