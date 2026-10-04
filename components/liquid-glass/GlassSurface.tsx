import { Slot } from '@radix-ui/react-slot';
import { forwardRef, type HTMLAttributes } from 'react';

export interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  tone?: 'light' | 'dark';
  material?: 'panel' | 'background' | 'surface' | 'menu';
}

/** Decorative material only: the child keeps its semantics, layout and actions. */
export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ asChild = false, tone, material = 'panel', ...props }, ref) => {
    const Component = asChild ? Slot : 'div';
    return <Component ref={ref} data-glass={material} data-glass-tone={tone} {...props} />;
  }
);
GlassSurface.displayName = 'GlassSurface';
