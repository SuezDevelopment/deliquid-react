import { createContext, useContext } from 'react';

export interface PaymentModalContextState {
  visible: boolean;
  setVisible: (open: boolean) => void;
}

const DEFAULT_CONTEXT = {
  visible: false,
  setVisible(_open: boolean) {
    console.error(errorMessage('call', 'setVisible'));
  },
};
Object.defineProperty(DEFAULT_CONTEXT, 'visible', {
  get() {
    console.error(errorMessage('read', 'visible'));
    return false;
  },
});

function errorMessage(action: string, valueName: string) {
  return (
    'You have tried to ' +
    ` ${action} "${valueName}"` +
    ' on a PaymentModalContext without providing one.' +
    ' Make sure to render a PaymentModalProvider' +
    ' as an ancestor of the component that uses ' +
    'PaymentModalContext'
  );
}

export const PaymentModalContext = createContext<PaymentModalContextState>(
  DEFAULT_CONTEXT as PaymentModalContextState
);

export function usePaymentModal(): PaymentModalContextState {
  return useContext(PaymentModalContext);
}
