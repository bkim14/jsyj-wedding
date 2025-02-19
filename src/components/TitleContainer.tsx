import { Flex } from './Flex.tsx';
import Text from './Text.tsx';

const TitleContainer = ({ title }: { title: string }) => {
  return (
    <Flex style={{ width: '80%' }}>
      <Text style={{ fontWeight: 'bold' }} color={'#0C6A31'}>{title}</Text>
      <div css={{ backgroundColor: '#0c6a31', width: '100%', height: '1px' }}/>
    </Flex>
  );
};

export default TitleContainer;
