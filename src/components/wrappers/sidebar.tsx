import { any } from 'zod';
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
        <div className={className}>
            <SidebarProvider {...props}>
                <Sidebar className='w-full' side={side}>
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
                                                    {/* <SidebarMenuButton asChild> */}
                                                    <SidebarMenuButton
                                                        variant={buttonVariant}
                                                        size={buttonSize}
                                                        asChild
                                                    >
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
            </SidebarProvider>
        </div>
    );
};

export default SidebarWrapper;
