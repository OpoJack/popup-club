import { cn } from '~/utils/cn-helper';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-neutral', className)} {...props} />;
}

export { Skeleton };
