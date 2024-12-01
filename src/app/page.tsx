import { auth } from '~/server/auth';
import { api, HydrateClient } from '~/trpc/server';

import { SidebarProvider } from '~/components/ui/sidebar';

import Header from './_components/header';
import LeftSidebar from './_components/left-sidebar';
import RightSidebar from './_components/right-sidebar';
import NewsFeed from './_components/newsfeed';

export default async function Home() {
    const hello = await api.post.hello({ text: 'from tRPC' });
    const session = await auth();

    if (session?.user) {
        void api.post.getLatest.prefetch();
    }

    return (
        <>
            <Header />
            <SidebarProvider className='mx-auto flex w-full max-w-display p-4'>
                <LeftSidebar />
                <NewsFeed />
                <RightSidebar />
            </SidebarProvider>
        </>
    );
}
