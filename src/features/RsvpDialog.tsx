import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Text from '../components/Text.tsx';

const RsvpDialog = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ m: 0, p: 2 }}>참석 여부 전달 안내</DialogTitle>
      <DialogContent style={{ padding: '20px' }}>
        <Text>
          특별한 날 축하의 마음으로 참석해주시는 모든 분들을 한 분 한 분 더욱
          <br />
          귀하게 모실 수 있도록, 아래 버튼을 클릭하여 신랑 신부에게 참석여부를
          <br />
          전달 부탁드립니다.
        </Text>
      </DialogContent>
    </Dialog>
  );
};

export default RsvpDialog;
