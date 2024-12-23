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
                type1: 'border-brand-600 text-brand-600 hover:border-brand-800 hover:bg-brand-800 hover:text-base-0 border hover:underline',
                type2: 'hover:bg-brand-400/75 hover:text-brand-600 text-foreground',
                type3: 'hover:text-brand-800',
                type4: 'hover:text-brand-800 bg-secondary-background shadow-sm',
                type5: 'hover:text-base-0 hover:bg-secondary-background',
                type6: 'bg-brand-800 hover:bg-brand-700 border border-input shadow-sm hover:text-accent-foreground',
                type7: 'hover:text-base-0 hover:bg-nested-background',
                type8: 'hover:text-base-0 text-foreground hover:bg-nested-background',

                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                ghost: '',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2 font-medium',
                sm: 'font-base h-6 px-2 text-sm font-normal',
                md: 'h-10 px-4 py-2 font-normal',
                lg: 'h-10 px-8 font-medium',
                icon: 'aspect-square w-auto',
            },
        },
        defaultVariants: {
            variant: 'type0',
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
