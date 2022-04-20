# deliquid-react

DeLiquid React Components

## Quickstart

### Install

```bash
npm install @deliquid/react
```

### Setup

```typescript
import React, { FC } from 'react';
import { PaymentModalProvider, PaymentButton } from '@deliquid/react';

export const Checkout: FC = () => {
    return (
        <PaymentModalProvider>
            <PaymentButton />
        </PaymentModalProvider>
    )
}
```

## Example Projects
