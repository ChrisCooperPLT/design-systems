import { forwardRef } from 'react';
import cn from '../../utils/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  loading?: boolean;
  textClassName?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      disabled = false,
      loading = false,
      children,
      className = '',
      onClick,
      textClassName = '',
      ...rest
    },
    forwardedRef
  ) => (
    <button
      id={id}
      className={cn(
        'px-3 py-2 border-0 text-black bg-pink-200 hover:bg-pink-300 transition-colors rounded-full',
        className
      )}
      disabled={disabled || loading}
      ref={forwardedRef}
      onClick={(e) => {
        console.log('clicked');
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
