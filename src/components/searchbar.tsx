import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { SearchIcon } from '~/components/icons/navigate';

export default function SearchBar({ className, placeholder }: { className?: string; placeholder?: string }) {
    return (
        <div className={cn('flex grow rounded-md bg-background', className)}>
            <Button className='hover:bg-purplyblue-400/75 h-full px-5' variant='ghost' size='icon'>
                <SearchIcon />
            </Button>
            <Input className='size-full grow' variant='square' type='text' placeholder={placeholder} />
        </div>
    );
}

/*  focus-visible:ring-1 focus-visible:ring-ring */
