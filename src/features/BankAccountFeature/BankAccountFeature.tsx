import styled from '@emotion/styled';
import { Flex } from '../../components/Flex.tsx';
import TitleContainer from '../../components/TitleContainer.tsx';
import BankAccountListAccordion from './BankAccountListAccordion.tsx';

const CHI_ACCOUNT_LIST = [
  {
    name: '황정선',
    title: '신랑',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
  {
    name: '황치환',
    title: '아버지',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
  {
    name: '박순희',
    title: '어머니',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
];

const WIFE_ACCOUNT_LIST = [
  {
    name: '강윤정',
    title: '신부',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
  {
    name: '강태진',
    title: '아버지',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
  {
    name: '박인경',
    title: '어머니',
    bankName: '우리',
    accountNumber: '1002 111 222222',
  },
];

const BankAccountFeature = () => {
  return (
    <Container>
      <TitleContainer title={'마음 전하실 곳'} />
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
