import React, { FC } from 'react';
import { Modal, Box, Grid, Button } from '@mui/material';

import { WalletSelector } from '../WalletSelector';
import { usePaymentModal } from '../usePaymentModal';

export interface PaymentModalProps {}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#23242d',
  boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.3)',
  borderRadius: '15px',
  p: 4,
};

const amount = 0.1;

export const PaymentModal: FC<PaymentModalProps> = ({}) => {
  const { visible, setVisible } = usePaymentModal();

  return (
    <div>
      <Modal
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#23242d',
            color: '#fff',
          }}
        >
          <Box sx={style}>
            <Grid container spacing={1} direction='column' p='0 1em'>
              <Grid item>
                <h5 className='selector-title'>Wallet</h5>
                {/* <WalletSelector
                  selectedWallet={selectedWallet}
                  wallets={WALLETS}
                  onWalletChange={(wallet: Wallet) => setSelectedWallet(wallet)}
                /> */}
              </Grid>

              {/* <Grid item>
                <h5 className='selector-title'>Your Token</h5>
                <TokenSelector
                  selectedToken={selectedToken}
                  balance={parseFloat(balance.toFixed(2))}
                  tokens={TOKENS}
                  onTokenChange={(token: Token) => setSelectedToken(token)}
                />
              </Grid> */}

              <Grid item>
                <div className='total-amount'>
                  <Grid container justifyContent='space-around'>
                    <Grid item>
                      <h2>Total</h2>
                    </Grid>
                    <Grid item>
                      <h2>${amount}</h2>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            <div className='make-payment'>
              <Button
                variant='contained'
                onClick={() => console.log('Make Payment')}
              >
                Make Payment
              </Button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};
