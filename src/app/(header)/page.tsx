// import { auth } from '~/server/auth';
// import { api } from '~/trpc/server';

import NavSidebar from '~/templates/nav-sidebar';
import InfoSidebar from '~/templates/info-sidebar';

import { leftSidebarActions, rightSidebarData, tempNews } from './constants';
import Content from './content';

const HomePage = async () => {
    // const hello = await api.post.hello({ text: 'from tRPC' });
    // const session = await auth();

    // if (session?.user) {
    //     void api.post.getLatest.prefetch();
    // }

    return (
        <div className='mx-auto flex w-full max-w-display gap-3 p-4'>
            <NavSidebar className='min-w-60' data={leftSidebarActions} />
            <Content className='flex basis-full flex-col gap-2' data={tempNews} />
            <InfoSidebar className='min-w-60 basis-1/2' data={rightSidebarData} />
        </div>
    );
};

export default HomePage;
