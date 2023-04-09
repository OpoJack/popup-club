import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

interface DemoButtonProps {}

export const buttonVariants = cva(
  // The first argument is the default variant
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800'
);

const DemoButton: FC<DemoButtonProps> = ({}) => {
  return <div>Button</div>;
};

export default DemoButton;
