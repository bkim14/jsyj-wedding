import CalenderItem from '@/features/DateFeature/CalenderItem.tsx';
import { Flex } from '@/components/Flex.tsx';
import Text from '../../components/Text.tsx';
import tokens from '@/css/tokens.ts';

const DateFeature = () => {
  Date.parse('16 Feb 2025 12:00:00 GMT');
  return (
    <Flex style={{ padding: '0 5vw' }} gap={50}>
      <Flex column={false} gap={15}>
        <Flex style={{ alignItems: 'flex-end' }}>
          <Text size={tokens.fontSize.lg}>2025년</Text>
          <Text size={tokens.fontSize.xl}>2월</Text>
          <Text size={tokens.fontSize.xl}>16일</Text>
        </Flex>
        <Flex style={{ alignItems: 'flex-start' }}>
          <Text>일요일 12:00 PM</Text>
          <Text>페어몬드 앰버서더 호텔</Text>
        </Flex>
      </Flex>
      <CalenderItem />
    </Flex>
  );
};

export default DateFeature;
