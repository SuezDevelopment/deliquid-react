import React, { FC, ReactNode, useState } from 'react';

import { PaymentModalContext } from '../usePaymentModal';
import { PaymentModal, PaymentModalProps } from '../PaymentModal';
import './index.css';

export interface PaymentModalProviderProps extends PaymentModalProps {
  children: ReactNode;
}

export const PaymentModalProvider: FC<PaymentModalProviderProps> = ({
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

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
