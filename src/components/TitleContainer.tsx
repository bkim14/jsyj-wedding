import { Flex } from './Flex.tsx';
import Text from './Text.tsx';

const TitleContainer = ({ title }: { title: string }) => {
  return (
    <Flex style={{ width: '80%' }}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      <div css={{ backgroundColor: 'gray', width: '100%', height: '1px' }} />
    </Flex>
  );
};

export default TitleContainer;
