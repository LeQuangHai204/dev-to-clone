'use client';
import { useState } from 'react';

import Article from '~/templates/article';
import SearchBar from '~/templates/searchbar';
import { Button } from '~/components/ui/button';
import { MeatballsMenuIcon } from '~/components/icons/popover';

import { SearchIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const Content = ({
    className,
    data,
}: {
    className?: string;
    data: {
        title: string;
        comments_count: number;
        reactions_count: number;
        top_comments: {
            name: string;
            profile_image?: string;
        }[];
    }[];
}) => {
    const [activeButton, setActiveButton] = useState<'discover' | 'following'>('discover');

    return (
        <div className={className}>
            <div className='rounded-md bg-secondary-background p-2'>
                <SearchBar placeholder="What's on your mind?" />
            </div>
            <div className='flex justify-between'>
                <div>
                    <Button
                        className='text-lg font-bold hover:text-purplyblue-800'
                        variant={activeButton === 'discover' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveButton('discover')}
                    >
                        Discover
                    </Button>
                    <Button
                        className='text-lg font-normal hover:text-purplyblue-800'
                        variant={activeButton === 'following' ? 'secondary' : 'ghost'}
                        onClick={() => setActiveButton('following')}
                    >
                        Following
                    </Button>
                </div>
                <Popover>
                    <PopoverTrigger>
                        <MeatballsMenuIcon />
                    </PopoverTrigger>
                    <PopoverContent>
                        <SearchIcon />
                    </PopoverContent>
                </Popover>
            </div>
            {data.map((article, index) => (
                <Article key={index} data={article} />
            ))}
        </div>
    );
};

export default Content;
