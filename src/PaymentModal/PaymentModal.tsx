import React, { FC } from 'react';

import { usePaymentModal } from '../usePaymentModal';
import './index.css';

export interface PaymentModalProps {
  className?: string;
  container?: string;
}

export const PaymentModal: FC<PaymentModalProps> = ({
  className = '',
  container = 'body',
}) => {
  const { setVisible } = usePaymentModal();
  return <div>PaymentModal</div>;
};
