# `@deliquid/react`

Modular TypeScript payment components for Solana applications.

## Quickstart

### Install

```bash
npm install @deliquid/react
```

### Setup

```typescript
import React, { FC } from 'react';
import { PaymentModalProvider, PaymentButton } from '@deliquid/react';

const MERCHANT_NAME = "First Merchant";
const MERCHANT_ADDRESS = "0x0000000000000000000000000000000000000000";

export const Checkout: FC = () => {
    return (
        <PaymentModalProvider name={MERCHANT_NAME} address={MERCHANT_ADDRESS}>
            <PaymentButton />
        </PaymentModalProvider>
    )
}
```

## Example Projects
