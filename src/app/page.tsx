import { auth } from '~/server/auth';
import { api } from '~/trpc/server';

import SidebarWrapper from '~/components/wrappers/sidebar';

import Header from './_components/header';
import Content from './_components/content';
import { leftSidebarData, rightSidebarData } from './constants';

export default async function Home() {
    const hello = await api.post.hello({ text: 'from tRPC' });
    const session = await auth();

    if (session?.user) {
        void api.post.getLatest.prefetch();
    }

    return (
        <>
            <Header />
            <div className='mx-auto flex w-full max-w-display gap-x-3 p-4'>
                <SidebarWrapper data={leftSidebarData} />
                <Content />
                <SidebarWrapper
                    className='basis-[30%]'
                    data={rightSidebarData}
                    groupVariant='round'
                    buttonSize='fit'
                    type='article'
                />
            </div>
        </>
    );
}
