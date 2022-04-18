import React, {
  FC,
  ReactNode,
  MouseEvent,
  ReactElement,
  CSSProperties,
} from 'react';
import './index.css';

export interface ButtonProps {
  className?: string;
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
      className={`payment-button ${props.className || ''}`}
      disabled={props.disabled}
      onClick={props.onClick}
      tabIndex={props.tabIndex || 0}
      type='button'
    >
      {props.startIcon && (
        <i className='payment-button-start-icon'>{props.startIcon}</i>
      )}
      {props.children}
      {props.endIcon && (
        <i className='payment-button-end-icon'>{props.endIcon}</i>
      )}
    </button>
  );
};
