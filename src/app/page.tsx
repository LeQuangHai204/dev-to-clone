// import { auth } from '~/server/auth';
// import { api } from '~/trpc/server';

import NavigationSidebar from '~/templates/navigation-sidebar';
import ContentSidebar from '~/templates/content-sidebar';
import { leftSidebarData, rightSidebarData, tempNews } from '~/lib/constants';

import Header from './_components/header';
import Content from './_components/content';

const Home = async () => {
    // const hello = await api.post.hello({ text: 'from tRPC' });
    // const session = await auth();

    // if (session?.user) {
    //     void api.post.getLatest.prefetch();
    // }

    return (
        <main className='flex w-full flex-col'>
            <Header />
            <div className='mx-auto flex w-full max-w-display gap-x-3 overflow-hidden p-4'>
                <NavigationSidebar className='min-w-60' data={leftSidebarData} />
                <Content className='flex basis-full flex-col gap-2' data={tempNews} />
                <ContentSidebar className='min-w-60 basis-1/2' data={rightSidebarData} />
            </div>
        </main>
    );
};

export default Home;
