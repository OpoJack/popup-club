import * as React from 'react';

import { cn } from '~/utils/cn-helper';

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex w-full rounded-md border  border-neutral bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:border-secondary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-focus dark:text-neutral-content dark:focus:ring-offset-neutral-focus sm:h-9',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
