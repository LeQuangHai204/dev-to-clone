import Link from 'next/link';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from '~/components/ui/sidebar';

const InfoSidebar = ({
    className,
    data,
}: {
    className?: string;
    data: {
        title?: string;
        items: {
            title?: string;
            url: string;
            commentCount: number;
        }[];
    }[];
}) => {
    return (
        <Sidebar className={className} side='left'>
            <SidebarContent>
                {data.map((block, index) => (
                    <SidebarGroup className='overflow-hidden rounded-md' key={index}>
                        {block.title ? (
                            <SidebarGroupLabel className='mb-px bg-base-900 p-4 text-xl'>
                                {block.title}
                            </SidebarGroupLabel>
                        ) : null}
                        <SidebarGroupContent>
                            <SidebarMenu className='gap-px'>
                                {block.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton className='group/item' size='fit' variant='secondary'>
                                            <Link href={item.url}>
                                                {item.title}
                                                <div className='mt-2 text-sm text-base-400 group-hover/item:text-foreground'>
                                                    {item.commentCount} comments
                                                </div>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
};

export default InfoSidebar;
