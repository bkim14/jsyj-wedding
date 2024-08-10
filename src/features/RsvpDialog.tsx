import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Text from '../components/Text.tsx';
import { Flex } from '../components/Flex.tsx';

const RsvpDialog = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { borderRadius: '20px' } }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} align={'center'}>
        참석 여부 전달 안내
      </DialogTitle>
      <DialogContent style={{ padding: '20px', alignItems: 'center' }} dividers>
        <Flex>
          <Text>
            특별한 날 축하의 마음으로 참석해주시는 모든 분들을
            <br />
          </Text>
          <Text>한 분 한 분 더욱 귀하게 모실 수 있도록</Text>
          <Text>신랑 신부에게 참석여부를 전달 부탁드립니다.</Text>
        </Flex>
      </DialogContent>
      <DialogContent style={{ padding: '20px' }} dividers>
        <Flex>
          <Text>장소 : 페어몬트 앰배서더 서울 웨딩</Text>
          <Text>시간 : 2025년 2월 16일 일요일</Text>
        </Flex>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={() => setOpen(false)}>다음에 입력할게요</Button>
        <Button autoFocus>참석여부 전달하기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RsvpDialog;
