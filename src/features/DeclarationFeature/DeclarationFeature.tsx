import { Flex } from '@/components/Flex.tsx';
import Text from '@/components/Text.tsx';
import Tokens from '@/css/tokens.ts';

const TextWithHighlight = ({
  name,
  first,
  second,
}: {
  name: string;
  first: string;
  second?: string;
}) => {
  return (
    <Flex alignItems={'flex-start'}>
      <Flex column={false}>
        <Text bold size={Tokens.fontSize.lg}>
          {name}
        </Text>
        <Text>{first}</Text>
      </Flex>
      {second && (
        <Flex column={false}>
          <Text bold size={Tokens.fontSize.sm} style={{ visibility: 'hidden' }}>
            {name}
          </Text>
          <Text>{second}</Text>
        </Flex>
      )}
    </Flex>
  );
};

const DeclarationFeature = () => {
  return (
    <Flex style={{ alignItems: 'flex-start' }} gap={40}>
      <Flex fullWidth style={{ alignItems: 'flex-start' }} gap={10}>
        <TextWithHighlight
          name={'치'}
          first={'열한 삶 속에서'}
          second={'서로의 안식처가 되어줬습니다'}
        />
        <TextWithHighlight
          name={'현'}
          first={'재에 감사하며 미래를'}
          second={'함께 꿈꾸기로 하였습니다'}
        />
      </Flex>
      <Flex fullWidth style={{ alignItems: 'flex-start' }} gap={10}>
        <TextWithHighlight
          name={'여'}
          first={'진과 치현, 두 사람이 하나되는'}
        />
        <TextWithHighlight
          name={'진'}
          first={'정한 행복의 날'}
          second={'귀한 발걸음해 주시면 감사하겠습니다.'}
        />
      </Flex>
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
