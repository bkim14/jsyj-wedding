import { Flex } from '@/components/Flex.tsx';
import TitleContainer from '@/components/TitleContainer.tsx';
import Text from '@/components/Text.tsx';
import { Button } from '@mui/material';

const RsvpFeature = () => {
  return (
    <Flex gap={15} fullWidth>
      <TitleContainer title={'참석여부 전달'} />
      <Flex gap={20}>
        <Flex gap={5}>
          <Text>소중한 시간을 내어 결혼식에</Text>
          <Text>참석해주시는 모든 분들께 감사드립니다.</Text>
          <Text>예식이 지정좌석제로 진행되오니,</Text>
          <Text>참석 여부를 회신해 주시면</Text>
          <Text>더욱 감사하겠습니다.</Text>
        </Flex>
        <Button
          color={'primary'}
          style={{
            backgroundColor: '#ebadad',
            color: 'white',
          }}
        >
          참석 여부 전달
        </Button>
      </Flex>
    </Flex>
  );
};

export default RsvpFeature;
