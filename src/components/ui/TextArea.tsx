import * as React from 'react';

import { cn } from '~/utils/cn-helper';

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'focus:outline-nonedisabled:cursor-not-allowed flex h-20 w-full rounded-md border border-neutral bg-transparent px-3 py-2 text-sm placeholder:text-neutral placeholder:text-opacity-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 ',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
