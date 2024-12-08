// import {
//     Sidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarGroupContent,
//     SidebarMenu,
//     SidebarMenuItem,
//     SidebarMenuButton,
//     SidebarProvider,
//     SidebarHeader,
//     SidebarRail,
//     SidebarInset,
//     SidebarTrigger,
// } from '~/components/ui/sidebar';

// const data = {
//     versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
//     navMain: [
//         {
//             title: 'Getting Started',
//             url: '#',
//             items: [
//                 {
//                     title: 'Installation',
//                     url: '#',
//                 },
//                 {
//                     title: 'Project Structure',
//                     url: '#',
//                 },
//             ],
//         },
//         {
//             title: 'Building Your Application',
//             url: '#',
//             items: [
//                 {
//                     title: 'Routing',
//                     url: '#',
//                 },
//                 {
//                     title: 'Data Fetching',
//                     url: '#',
//                     isActive: true,
//                 },
//                 {
//                     title: 'Rendering',
//                     url: '#',
//                 },
//                 {
//                     title: 'Caching',
//                     url: '#',
//                 },
//                 {
//                     title: 'Styling',
//                     url: '#',
//                 },
//                 {
//                     title: 'Optimizing',
//                     url: '#',
//                 },
//                 {
//                     title: 'Configuring',
//                     url: '#',
//                 },
//                 {
//                     title: 'Testing',
//                     url: '#',
//                 },
//                 {
//                     title: 'Authentication',
//                     url: '#',
//                 },
//                 {
//                     title: 'Deploying',
//                     url: '#',
//                 },
//                 {
//                     title: 'Upgrading',
//                     url: '#',
//                 },
//                 {
//                     title: 'Examples',
//                     url: '#',
//                 },
//             ],
//         },
//         {
//             title: 'API Reference',
//             url: '#',
//             items: [
//                 {
//                     title: 'Components',
//                     url: '#',
//                 },
//                 {
//                     title: 'File Conventions',
//                     url: '#',
//                 },
//                 {
//                     title: 'Functions',
//                     url: '#',
//                 },
//                 {
//                     title: 'next.config.js Options',
//                     url: '#',
//                 },
//                 {
//                     title: 'CLI',
//                     url: '#',
//                 },
//                 {
//                     title: 'Edge Runtime',
//                     url: '#',
//                 },
//             ],
//         },
//         {
//             title: 'Architecture',
//             url: '#',
//             items: [
//                 {
//                     title: 'Accessibility',
//                     url: '#',
//                 },
//                 {
//                     title: 'Fast Refresh',
//                     url: '#',
//                 },
//                 {
//                     title: 'Next.js Compiler',
//                     url: '#',
//                 },
//                 {
//                     title: 'Supported Browsers',
//                     url: '#',
//                 },
//                 {
//                     title: 'Turbopack',
//                     url: '#',
//                 },
//             ],
//         },
//     ],
// };

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//     return (
//         <Sidebar variant='inset' {...props}>
//             <SidebarContent>
//                 {/* We create a SidebarGroup for each parent. */}
//                 {data.navMain.map((item) => (
//                     <SidebarGroup key={item.title}>
//                         <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
//                         <SidebarGroupContent>
//                             <SidebarMenu>
//                                 {item.items.map((item) => (
//                                     <SidebarMenuItem key={item.title}>
//                                         <SidebarMenuButton asChild isActive={item.isActive}>
//                                             <a href={item.url}>{item.title}</a>
//                                         </SidebarMenuButton>
//                                     </SidebarMenuItem>
//                                 ))}
//                             </SidebarMenu>
//                         </SidebarGroupContent>
//                     </SidebarGroup>
//                 ))}
//             </SidebarContent>
//             <SidebarRail />
//         </Sidebar>
//     );
// }

// export default function Page() {
//     return (
//         <div className='flex'>
//             <div className='h-11 w-11 bg-red-500'></div>
//             <SidebarProvider>
//                 <AppSidebar />
//             </SidebarProvider>
//         </div>
//     );
// }

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

const SidebarWrapper = ({
    className,
    side = 'left',
    data,
    groupVariant = 'default',
    buttonVariant = 'default',
    buttonSize = 'xl',
    ...props
}: {
    className?: string;
    side?: 'left' | 'right';
    data: {
        title?: string;
        items: {
            title?: string;
            url?: string;
            icon?: React.ComponentType;
        }[];
    }[];
    groupVariant?: 'default' | 'round';
    buttonVariant?: 'primary' | 'default' | 'outline';
    buttonSize?: 'default' | 'sm' | 'lg' | 'xl' | 'fit';
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
