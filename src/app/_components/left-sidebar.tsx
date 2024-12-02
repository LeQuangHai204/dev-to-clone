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

import {
    DrawerIcon,
    EyesIcon,
    FaceIcon,
    HomeIcon,
    MicrophoneIcon,
    PlusPlusIcon,
    ThumbsUpIcon,
} from '~/components/icons/navigation';

import { NoImageIcon } from '~/components/icons/fallback';

const LeftSidebar = ({ ...props }: {}) => {
    const data = [
        {
            title: '',
            url: '#',
            items: [
                {
                    title: 'Home',
                    url: '#',
                    icon: HomeIcon,
                },
                {
                    title: 'Dev++',
                    url: '#',
                    icon: PlusPlusIcon,
                },
                {
                    title: 'Reading List',
                    url: '#',
                    icon: DrawerIcon,
                },
                {
                    title: 'Podcasts',
                    url: '#',
                    icon: MicrophoneIcon,
                },
            ],
        },
        {
            title: 'Other',
            url: '#',
            items: [
                {
                    title: 'Code of Conduct',
                    url: '#',
                    icon: ThumbsUpIcon,
                },
                {
                    title: 'Privacy Policy',
                    url: '#',
                    icon: FaceIcon,
                },
                {
                    title: 'Terms of Use',
                    url: '#',
                    icon: EyesIcon,
                },
            ],
        },
    ];

    return (
        <aside className='min-w-60 bg-red-500'>
            {/* <Sidebar side="left" theme='default' {...props}> */}
            <Sidebar {...props}>
                <SidebarContent>
                    {/* We create a SidebarGroup for each parent. */}
                    {data.map((item) => (
                        <SidebarGroup key={item.title}>
                            {item.title ? <SidebarGroupLabel>{item.title}</SidebarGroupLabel> : null}
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <SidebarMenuItem key={item.title}>
                                                {/* <SidebarMenuButton asChild> */}
                                                <SidebarMenuButton variant='primary' size='xl' asChild>
                                                    <a href={item.url}>
                                                        <div>
                                                            <Icon />
                                                        </div>
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
        </aside>
    );
};

export default LeftSidebar;

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }
