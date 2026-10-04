import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} data-glass="field" className={cn('min-h-24 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50', className)} {...props} />
  )
);
Textarea.displayName = 'Textarea';
export { Textarea };
