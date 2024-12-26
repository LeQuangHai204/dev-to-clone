import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
    'inline-flex h-full items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                type0: 'text-bright-foreground bg-primary shadow hover:bg-primary/90 [&_svg]:size-4',
                type1: 'border border-brand-600 text-brand-600 hover:border-brand-800 hover:bg-brand-800 hover:text-foreground hover:underline',
                type2: 'text-base-200 hover:bg-brand-400/75 hover:text-brand-600',
                type3: 'text-lg hover:text-brand-800',
                type4: 'bg-base-900 text-lg font-bold shadow-sm hover:text-brand-800',
                type5: 'hover:bg-base-900 hover:text-base-0',
                type6: 'border border-input bg-brand-800 shadow-sm hover:bg-brand-700 hover:text-accent-foreground',
                type7: 'hover:bg-base-900 hover:text-base-0',
                type8: 'text-foreground hover:bg-base-100 hover:text-base-0',

                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                ghost: '',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'px-4 py-2',
                sm: 'px-4 py-1',
                md: 'px-4 py-2 font-normal',
                lg: 'px-8 font-medium',
                icon: 'aspect-square w-auto',
            },
        },
        defaultVariants: {
            variant: 'ghost',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
