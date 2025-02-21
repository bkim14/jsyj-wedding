import { Flex } from '@/components/Flex.tsx';
import Text from '@/components/Text.tsx';
import image from '@/assets/flower.png';
import MiddleImage from '@/assets/MiddleImage.jpeg';

const DeclarationFeature = () => {
  return (
    <Flex gap={40}>
      <Flex>
        <Text color={'#0C6A31'} bold>
          Invitation
        </Text>
        <Text color={'#0C6A31'} bold size={'1.2rem'}>
          초대합니다
        </Text>
      </Flex>
      <Flex style={{ alignItems: 'center' }}>
        <Text>캠퍼스에서의 풋풋한 설렘이</Text>
        <Text>사랑이 되어 서로의 꿈을 응원하며</Text>
        <Text>함께 걸어온 8년.</Text>
        <br />
        <Text>이제는 부부라는 새로운 교실에서</Text>
        <Text>더 깊은 사랑을 배워 나가려 합니다.</Text>
        <Text>저희의 소중한 날에</Text>
        <Text>귀한 발걸음으로 함께해주세요.</Text>
      </Flex>
      <Flex>
        <Flex column={false}>
          <Text size={'1.1rem'}>황치환, 박순희</Text>
          <Text>의 장남&nbsp;</Text>
          <Text size={'1.1rem'}>황정선</Text>
        </Flex>
        <Flex column={false}>
          <Text size={'1.1rem'}>강태진, 박인경</Text>
          <Text>의 차녀&nbsp;</Text>
          <Text size={'1.1rem'}>강윤정</Text>
        </Flex>
      </Flex>
      <img src={image as string} alt="" width="50%" />
      <img src={MiddleImage as string} alt="" width="100%" />
    </Flex>
  );
};

export default DeclarationFeature;

/*
치(앞글자 크게)열한 삶 속에서 서로의 안식처가 되어줬습니다
현 재에 감사하며 미래를 함께 꿈꾸기로 하였습니다.
여 진과 치현, 두 사람이 하나 되는 
진 정한 행복의 날, 귀한 발걸음해 주시면 감사하겠습니다.
*/
