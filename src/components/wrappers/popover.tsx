import { Children } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const PopoverWrapper = ({ children }: { children: [React.ReactNode, React.ReactNode] }) => {
    const [trigger, content] = Children.toArray(children);

    return (
        <Popover>
            <PopoverTrigger>{trigger}</PopoverTrigger>
            <PopoverContent>{content}</PopoverContent>
        </Popover>
    );
};

export default PopoverWrapper;
