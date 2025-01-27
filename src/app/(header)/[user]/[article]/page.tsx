import { notFound } from 'next/navigation';
import Image from 'next/image';

import InfoSidebar from '~/templates/info-sidebar';
import MarkdownWrapper from '~/components/markdown';
import { Author, TagList } from '~/components/article';
import { trpc } from '~/trpc/server';

import InteractionPanel from './interaction-panel';

const ArticlePage = async ({ params }: { params: Promise<{ user: string; article: string }> }) => {
    const { article } = await params;
    const payload = await trpc.article.getByPath(article);
    const data = payload.data.article;
    if (!payload.success || !data) notFound();
    const imageUrl =
        data.imageUrl ?? 'https://dev-to-clone-bucket.s3.us-east-1.amazonaws.com/Chrysanthemum-1736473494567.jpg';

    return (
        <div className='mb-4 flex h-fit w-full gap-4'>
            {/* Pass server-fetched data to the InteractionPanel */}
            <InteractionPanel reactionsCount={data.reactionsCount} commentsCount={data.commentsCount} />
            {/* Main content */}
            <div className='h-fit grow rounded-md bg-base-1000'>
                <div className='relative aspect-[5/2] h-auto w-full'>
                    <Image
                        className='rounded-t-md object-cover'
                        src={imageUrl}
                        alt=''
                        priority
                        fill
                        placeholder='empty'
                        sizes='(max-width: 1024) 90vw, 60vw'
                    />
                </div>
                <div className='h-full px-16 py-8 text-lg'>
                    <Author data={data} />
                    <h1 className='my-4 text-5xl font-extrabold'>{data.title}</h1>
                    <TagList data={data.tagList} />
                    <MarkdownWrapper className='prose my-4'>{data.content}</MarkdownWrapper>
                </div>
            </div>
            {/* Placeholder for additional content */}
            <InfoSidebar className='hidden basis-[30%] lg:block' />
        </div>
    );
};

export default ArticlePage;
