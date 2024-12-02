import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const PopoverWrapper = ({ content, trigger }: { content: React.ReactNode; trigger: React.ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger>{trigger}</PopoverTrigger>
            <PopoverContent>{content}</PopoverContent>
        </Popover>
    );
};
