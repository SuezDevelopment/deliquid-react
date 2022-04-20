import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

export type Wallet = {
  name: string;
  icon: string;
};

export const WalletSelector: FC<{
  selectedWallet: Wallet;
  wallets: Wallet[];
  onWalletChange: (wallet: Wallet) => void;
}> = ({ selectedWallet, wallets, onWalletChange }) => {
  const renderWalletStatus = () => {
    const walletStatus: string = 'connected';
    switch (walletStatus) {
      case 'connected':
        return (
          <Grid
            container
            spacing={1}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <FiberManualRecord sx={{ fontSize: '12px', color: '#76ff03' }} />
            </Grid>
            <Grid item>
              <span>Connected</span>
            </Grid>
          </Grid>
        );
      case 'detected':
        return <span>Detected</span>;
      default:
        return <span>Disconnected</span>;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          backgroundColor: 'rgb(83, 83, 83, 0.24)',
          borderRadius: '10px',
        }}
      >
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          p='10px 20px'
        >
          <Grid item>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              spacing={1}
            >
              <Grid item>
                <img
                  src={selectedWallet.icon}
                  alt={selectedWallet.name + ' logo'}
                  width='25px'
                />
              </Grid>
              <Grid item>
                <span>{selectedWallet.name}</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <span style={{ color: 'grey', fontSize: '1em' }}>
              {renderWalletStatus()}
            </span>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
