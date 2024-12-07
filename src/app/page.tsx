// import { auth } from '~/server/auth';
// import { api } from '~/trpc/server';

import SidebarWrapper from '~/components/wrappers/sidebar';

import Header from './_components/header';
import Content from './_components/content';
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
                <SidebarWrapper className='min-w-60' data={leftSidebarData} />
                <Content className='flex basis-full flex-col gap-2' data={[tempNews]} />
                <SidebarWrapper
                    className='min-w-60 basis-1/2'
                    data={rightSidebarData}
                    groupVariant='round'
                    buttonSize='fit'
                />
            </div>
        </main>
    );
};

export default Home;
