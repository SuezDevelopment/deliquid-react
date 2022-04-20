import React, { FC, useMemo, ReactNode, useState } from 'react';
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { clusterApiUrl } from '@solana/web3.js';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

import { PaymentModalContext } from '../usePaymentModal';
import { PaymentModal, PaymentModalProps } from '../PaymentModal';

export interface PaymentModalProviderProps extends PaymentModalProps {
  children: ReactNode;
}

export const PaymentModalProvider: FC<PaymentModalProviderProps> = ({
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  // const network = WalletAdapterNetwork.Devnet;

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

  return (
    <PaymentModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
      {visible && <PaymentModal {...props} />}
    </PaymentModalContext.Provider>
  );
};
