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
        <div className={cn('flex rounded-md bg-background focus-within:ring-0 focus-within:ring-offset-1', className)}>
            {LeftIcon ? (
                <Button className='h-full hover:bg-purplyblue-400/75' variant='ghost' size='icon'>
                    <LeftIcon />
                </Button>
            ) : null}
            <Input className='px-3' variant='square' type='text' placeholder={placeholder} area-label={areaLabel} />
            {RightIcon ? (
                <Button className='h-full hover:bg-purplyblue-400/75' variant='ghost' size='icon'>
                    <RightIcon />
                </Button>
            ) : null}
        </div>
    );
}
