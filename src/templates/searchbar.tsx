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
        <div className={cn('focus:ring-brand-800 flex rounded-md border bg-background focus-within:ring-2', className)}>
            {LeftIcon ? (
                <Button variant='type2' size='icon'>
                    <LeftIcon />
                </Button>
            ) : null}
            <Input
                className='text-base-0 px-2 placeholder-secondary-foreground'
                variant='square'
                type='text'
                placeholder={placeholder}
                area-label={areaLabel}
            />
            {RightIcon ? (
                <Button className='hover:bg-brand-400/75 h-full' variant='ghost' size='icon'>
                    <RightIcon />
                </Button>
            ) : null}
        </div>
    );
}
