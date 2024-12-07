'use client';
import { useState } from 'react';

import Article from '~/components/templates/article';
import SearchBar from '~/components/templates/searchbar';
import PopoverWrapper from '~/components/wrappers/popover';
import { Button } from '~/components/ui/button';
import { MeatballsMenuIcon } from '~/components/icons/popover';

import { SearchIcon } from 'lucide-react';

const Content = ({ className, data }: { className?: string; data: any[] }) => {
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
                <PopoverWrapper>
                    <MeatballsMenuIcon />
                    <SearchIcon />
                </PopoverWrapper>
            </div>
            {data.map((article, index) => (
                <Article key={index} data={article} />
            ))}
        </div>
    );
};

export default Content;
