'use client';
import { useState } from 'react';

import NewsFeed from '~/templates/newsfeed';
import SearchBar from '~/templates/searchbar';
import { Button } from '~/components/ui/button';
import { MeatballsMenuIcon } from '~/components/icons';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

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
                        className='text-lg font-bold'
                        variant={activeButton === 'discover' ? 'type4' : 'type3'}
                        onClick={() => setActiveButton('discover')}
                    >
                        Discover
                    </Button>
                    <Button
                        className='text-lg font-normal'
                        variant={activeButton === 'following' ? 'type4' : 'type3'}
                        onClick={() => setActiveButton('following')}
                    >
                        Following
                    </Button>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size='icon' variant='ghost'>
                            <MeatballsMenuIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-64 bg-secondary-background p-0' align='end'>
                        <DropdownMenuLabel className='text-bright-foreground hover:text-brand-700 p-2 text-base'>
                            Relevant
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className='m-1 p-px' />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className='text-bright-foreground hover:text-brand-700 rounded-md p-2 font-normal hover:bg-background'>
                                Top this Week
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground hover:text-brand-700 rounded-md p-2 font-normal hover:bg-background'>
                                Top this Month
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground hover:text-brand-700 rounded-md p-2 font-normal hover:bg-background'>
                                Top this Year
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground hover:text-brand-700 rounded-md p-2 font-normal hover:bg-background'>
                                Top this Infinity
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className='mx-2 my-1 p-px' />
                        <DropdownMenuItem className='text-bright-foreground hover:text-brand-700 rounded-md p-2 font-normal hover:bg-background'>
                            Latest
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <NewsFeed data={data} />
        </div>
    );
};

export default Content;
