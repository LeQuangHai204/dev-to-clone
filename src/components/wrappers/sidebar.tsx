import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
} from '~/components/ui/sidebar';
import { cn } from '~/lib/utils';

const SidebarWrapper = ({
    className,
    side = 'left',
    data,
    groupVariant = 'default',
    buttonVariant = 'primary',
    buttonSize = 'xl',
    type = 'navigation',
    ...props
}: {
    className?: string;
    side?: 'left' | 'right';
    data: {
        title?: string;
        items: {
            title?: string;
            url?: string;
            [key: string]: any;
        }[];
    }[];
    groupVariant?: 'default' | 'round';
    buttonVariant?: 'primary' | 'default' | 'outline' | null | undefined;
    buttonSize?: 'default' | 'sm' | 'lg' | 'xl' | 'fit' | null | undefined;
    type?: 'navigation' | 'article';
}) => {
    return (
        <Sidebar className={className} side={side} {...props}>
            <SidebarContent>
                {data.map((block) => (
                    <SidebarGroup key={block.title} variant={groupVariant}>
                        {block.title ? <SidebarGroupLabel>{block.title}</SidebarGroupLabel> : null}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {block.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton variant={buttonVariant} size={buttonSize} asChild>
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

export default SidebarWrapper;
