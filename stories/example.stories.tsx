import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PublicKey } from '@solana/web3.js';

import { PaymentModalProvider } from '../src/PaymentModalProvider';
import { PaymentButton } from '../src/PaymentButton';

const recipient = new PublicKey('C1cyuePEi1nEFhK6sWXWKtMFUDvnNpny2XDoiD3y2bTj');
const amount = 0;

const paymentProps = {
  recipient,
  amount,
};

export default {
  title: 'Payment Example',
  component: PaymentButton,
} as ComponentMeta<typeof PaymentButton>;

export const Primary: ComponentStory<typeof PaymentButton> = () => (
  <PaymentModalProvider>
    <PaymentButton paymentProps={paymentProps}></PaymentButton>
  </PaymentModalProvider>
);
