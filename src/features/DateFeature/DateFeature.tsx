import CalenderItem from '@/features/DateFeature/CalenderItem.tsx';
import { Flex } from '@/components/Flex.tsx';
import Text from '../../components/Text.tsx';
import tokens from '@/css/tokens.ts';
import FadeInWrapperHoc from '@/components/FadeInWrapper.tsx';

const DateFeature = () => {
  Date.parse('16 Feb 2025 12:00:00 GMT');
  const today = new Date();
  const targetDate = new Date('2025-05-17');
  const timeDifference = targetDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <Flex style={{ padding: '0 5vw' }} gap={50}>
      <Flex column={false} gap={15}>
        <Flex style={{ alignItems: 'flex-end' }}>
          <Text size={tokens.fontSize.lg}>2025년</Text>
          <Text size={tokens.fontSize.xl}>5월</Text>
          <Text size={tokens.fontSize.xl}>17일</Text>
        </Flex>
        <Flex style={{ alignItems: 'flex-start' }}>
          <Text>토요일 11:00 AM</Text>
          <Text>비렌티 웨딩홀 3층 베르테홀</Text>
        </Flex>
      </Flex>
      <CalenderItem />
      <Flex column={false}>
        <Text>정선 ♡ 윤정의 결혼식이&nbsp;</Text>
        <Text color={'#d56276'} bold>
          {daysRemaining}일&nbsp;
        </Text>
        <Text>남았습니다.</Text>
      </Flex>
    </Flex>
  );
};
export default FadeInWrapperHoc(DateFeature);
