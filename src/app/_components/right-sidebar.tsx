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

const RightSidebar = ({
    className,
    data,
}: {
    className?: string;
    data: {
        title?: string;
        items: {
            title?: string;
            url?: string;
            icon?: React.ComponentType;
        }[];
    }[];
}) => {
    return (
        <Sidebar className={className} side='left'>
            <SidebarContent>
                {data.map((block, index) => (
                    <SidebarGroup className='overflow-hidden rounded-md' key={index}>
                        {block.title ? (
                            <SidebarGroupLabel className='mb-1 bg-secondary-background p-4 text-xl'>
                                {block.title}
                            </SidebarGroupLabel>
                        ) : null}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {block.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild size='fit' variant='secondary'>
                                                <a href={item.url}>
                                                    <div>{Icon ? <Icon /> : null}</div>
                                                    {item.title}
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
};

export default RightSidebar;
