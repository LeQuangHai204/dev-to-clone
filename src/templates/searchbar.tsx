import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export default function SearchBar({
    className,
    placeholder = 'Search...',
    areaLabel,
    LeftIcon,
    RightIcon,
}: {
    className?: string;
    placeholder?: string;
    areaLabel?: string;
    LeftIcon?: React.ComponentType;
    RightIcon?: React.ComponentType;
}) {
    return (
        <div
            className={cn(
                'flex rounded-md border border-base-800 bg-background focus-within:ring-2 focus-within:ring-brand-600 hover:border-base-700',
                className
            )}
        >
            {LeftIcon ? (
                <Button variant='type2' size='icon'>
                    <LeftIcon />
                </Button>
            ) : null}
            <Input
                className='px-2 text-foreground placeholder-base-800'
                variant='square'
                type='text'
                placeholder={placeholder}
                area-label={areaLabel}
            />
            {RightIcon ? (
                <Button className='h-full hover:bg-brand-400/75' size='icon'>
                    <RightIcon />
                </Button>
            ) : null}
        </div>
    );
}
