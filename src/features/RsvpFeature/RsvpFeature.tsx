import { Flex } from '@/components/Flex.tsx';
import image from '../../assets/BottomImage.jpeg';
import flower from '../../assets/flower.png';
import Text from '@/components/Text.tsx';
import { useState } from 'react';
import { Snackbar } from '@mui/material';

const RsvpFeature = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    event;
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };
  return (
    <Flex gap={15} fullWidth>
      <Text>음악처럼 꿈처럼</Text>
      <Text>매일 새롭게 사랑을 주고 싶어</Text>
      <Text>지금처럼 곁에 있어주기를 언제나</Text>
      <br />
      <Text>- 사막에서 꽃을 피우듯, 우디 -</Text>
      <img src={flower as string} alt="" width="50%" />
      <img src={image as string} alt="" width="100%" />
      <Flex
        column={false}
        style={{
          width: '80%',
          justifyContent: 'center',
          padding: '7px',
          backgroundColor: '#ECE4D9',
          borderRadius: '5px',
        }}
      >
        <div />
        <Text
          color={'#595d67'}
          onClick={() => {
            navigator.clipboard.writeText(
              'https://bkim14.github.io/jsyj-wedding/',
            );
            setSnackbarOpen(true);
          }}
        >
          청첩장 주소 복사하기
        </Text>
      </Flex>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        style={{ width: '100%' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Flex
          style={{
            width: 220,
            backgroundColor: '#28292d',
            borderRadius: '4px',
            padding: '5px 0',
          }}
        >
          <Text style={{ color: 'white' }}>복사되었습니다</Text>
        </Flex>
      </Snackbar>
    </Flex>
  );
};

export default RsvpFeature;
