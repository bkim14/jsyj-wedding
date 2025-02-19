import styled from '@emotion/styled';
import { Flex } from '../../components/Flex.tsx';
import BankAccountListAccordion from './BankAccountListAccordion.tsx';
import Text from "@/components/Text.tsx";
import flower from "@/assets/flower.png";

const CHI_ACCOUNT_LIST = [
  {
    name: '황정선',
    title: '신랑',
    bankName: '농협',
    accountNumber: '356 027 8646 013',
  },
  {
    name: '황치환',
    title: '아버지',
    bankName: '농협',
    accountNumber: '434 02 005103',
  },
  {
    name: '박순희',
    title: '어머니',
    bankName: '농협',
    accountNumber: '352 5586 0984 03',
  },
];

const WIFE_ACCOUNT_LIST = [
  {
    name: '강윤정',
    title: '신부',
    bankName: '농협',
    accountNumber: '302 2420 1958 71',
  },
  {
    name: '강태진',
    title: '아버지',
    bankName: '하나은행',
    accountNumber: '673 133171 00107',
  },
  {
    name: '박인경',
    title: '어머니',
    bankName: '농협',
    accountNumber: '461015 52 116930',
  },
];

const BankAccountFeature = () => {
  return (
    <Container>
      {/*<TitleContainer title={'마음 전하실 곳'} />*/}
      <Flex style={{ width: '80%' }}>
        <img src={flower as string} alt="" width="50%" />
        <Text color={'#0C6A31'} bold size={'1.2rem'}>
          마음 전하실 곳
        </Text>
      </Flex>
      <BankAccountListAccordion
        title="신랑측"
        accountInfoList={CHI_ACCOUNT_LIST}
      />
      <BankAccountListAccordion
        title="신부측"
        accountInfoList={WIFE_ACCOUNT_LIST}
      />
    </Container>
  );
};

const Container = styled(Flex)`
  width: 100%;
  gap: 15px;
`;

export default BankAccountFeature;
