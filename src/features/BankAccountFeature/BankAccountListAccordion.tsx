import { Flex } from '@/components/Flex.tsx';
import Text from '@/components/Text.tsx';
import Arrow from '@/assets/arrow.svg?react';
import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';

interface AccountInfo {
  name: string;
  title: string;
  bankName: string;
  accountNumber: string;
}

const BankAccountListAccordion = ({
  title,
  accountInfoList,
}: {
  title: string;
  accountInfoList: AccountInfo[];
}) => {
  const [open, setOpen] = useState(false);
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
    <>
      <Flex style={{ width: '80%' }}>
        <Flex
          fullWidth
          column={false}
          style={{
            justifyContent: 'space-between',
            padding: '7px',
            backgroundColor: '#ECE4D9',
            borderRadius: '5px',
          }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div />
          <Text color={'#595d67'}>{title}</Text>
          <Arrow
            style={{
              transform: open ? 'rotate(270deg)' : 'rotate(90deg)',
              fill: '#595d67',
            }}
          />
        </Flex>
        {open && (
          <Flex fullWidth>
            {accountInfoList.map(({ title, name, bankName, accountNumber }) => (
              <Flex
                fullWidth
                style={{
                  borderBottom: '1px solid lightgray',
                  padding: '5px 0',
                }}
              >
                <Flex column={false} gap={'15px'} fullWidth>
                  <Text>{title}</Text>
                  <Text bold>{name}</Text>
                </Flex>
                <Flex
                  column={false}
                  fullWidth
                  style={{
                    justifyContent: 'space-between',
                    padding: '0 10px',
                  }}
                >
                  <Flex column={false} gap={'15px'}>
                    <Text>{bankName}</Text>
                    <Text>{accountNumber}</Text>
                  </Flex>
                  <Button
                    color={'primary'}
                    style={{
                      backgroundColor: '#ECE4D9',
                      color: '#595d67',
                      height: '25px',
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${bankName} ${accountNumber}`,
                      );
                      setSnackbarOpen(true);
                    }}
                  >
                    복사
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
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
    </>
  );
};

export default BankAccountListAccordion;
