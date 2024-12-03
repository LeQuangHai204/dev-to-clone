import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const PopoverWrapper = ({ content, children }: { content: React.ReactNode; children: React.ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent>{content}</PopoverContent>
        </Popover>
    );
};

export default PopoverWrapper;
