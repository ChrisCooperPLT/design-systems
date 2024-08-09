import { forwardRef } from 'react';
import cn from '../../utils/cn';
import type { ButtonProps } from 'shared/types/button';

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
