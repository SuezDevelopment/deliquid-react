import React, { FC } from 'react';
import { PublicKey } from '@solana/web3.js';

import { Button, ButtonProps } from '../Button';
import { usePaymentModal } from '../usePaymentModal';

export interface PaymentProps {
  recipient: PublicKey;
  amount: number;
  splToken?: PublicKey;
}

export interface PaymentButtonProps {
  paymentProps: PaymentProps;
  buttonProps?: ButtonProps;
}

export const PaymentButton: FC<PaymentButtonProps> = ({
  paymentProps,
  buttonProps = {},
}) => {
  const { setVisible } = usePaymentModal();

  const onClick = () => {
    setVisible(true);
  };
  return <Button onClick={onClick}>DeLiquid Pay</Button>;
};
