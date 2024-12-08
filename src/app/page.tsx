// import { auth } from '~/server/auth';
// import { api } from '~/trpc/server';

import Header from './_components/header';
import Content from './_components/content';
import LeftSidebar from './_components/left-sidebar';
import RightSidebar from './_components/right-sidebar';
import { leftSidebarData, rightSidebarData, tempNews } from './constants';

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
                <LeftSidebar className='min-w-60' data={leftSidebarData} />
                <Content className='flex basis-full flex-col gap-2' data={[tempNews]} />
                <RightSidebar className='min-w-60 basis-1/2' data={rightSidebarData} />
            </div>
        </main>
    );
};

export default Home;
