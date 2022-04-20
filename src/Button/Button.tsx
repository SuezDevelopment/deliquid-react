import React, {
  FC,
  ReactNode,
  MouseEvent,
  ReactElement,
  CSSProperties,
} from 'react';
import './Button.css';

export interface ButtonProps {
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  tabIndex?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`payment-button`}
      disabled={props.disabled}
      onClick={props.onClick}
      tabIndex={props.tabIndex || 0}
      type='button'
      style={{
        backgroundColor: '#23242d',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: '600',
        height: '48px',
        lineHeight: '48px',
        padding: '0 24px',
        borderRadius: '4px',
      }}
    >
      {props.startIcon && (
        <i style={{ marginRight: '12px' }}>{props.startIcon}</i>
      )}
      {props.children}
      {props.endIcon && (
        <i className='payment-button-end-icon'>{props.endIcon}</i>
      )}
    </button>
  );
};
