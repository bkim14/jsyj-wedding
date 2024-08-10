import { Flex } from '../../components/Flex.tsx';
import Text from '../../components/Text.tsx';
import Arrow from '../../assets/arrow.svg?react';
import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import tokens from '../../css/tokens.ts';

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
            border: `1px solid ${tokens.colors['border-color']}`,
            padding: '0 10px',
          }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div />
          <Text>{title}</Text>
          <Arrow
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(270deg)' }}
          />
        </Flex>
        {open && (
          <Flex fullWidth>
            {accountInfoList.map(({ title, name, bankName, accountNumber }) => (
              <>
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
                      border: `1px solid ${tokens.colors['border-color']}`,
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
              </>
            ))}
          </Flex>
        )}
      </Flex>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="복사되었습니다"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default BankAccountListAccordion;
