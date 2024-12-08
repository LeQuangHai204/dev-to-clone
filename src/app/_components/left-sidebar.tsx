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

const LeftSidebar = ({
    className,
    data,
}: {
    className?: string;
    data: {
        title?: string;
        items: {
            title?: string;
            url: string;
            icon?: React.ComponentType;
        }[];
    }[];
}) => {
    return (
        <Sidebar className={className} side='left'>
            <SidebarContent>
                {data.map((block) => (
                    <SidebarGroup key={block.title}>
                        {block.title ? <SidebarGroupLabel>{block.title}</SidebarGroupLabel> : null}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {block.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton variant='primary' size='xl' asChild>
                                                <Link href={item.url}>
                                                    <div>{Icon ? <Icon /> : null}</div>
                                                    {item.title}
                                                </Link>
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

export default LeftSidebar;
