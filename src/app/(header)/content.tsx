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
            <div className='rounded-md bg-base-900 p-2'>
                <SearchBar placeholder="What's on your mind?" />
            </div>
            <div className='flex justify-between'>
                <div>
                    <Button
                        variant={activeButton === 'discover' ? 'type4' : 'type3'}
                        onClick={() => setActiveButton('discover')}
                        size='sm'
                    >
                        Discover
                    </Button>
                    <Button
                        variant={activeButton === 'following' ? 'type4' : 'type3'}
                        onClick={() => setActiveButton('following')}
                        size='sm'
                    >
                        Following
                    </Button>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className='h-10 text-base-200 hover:text-foreground' size='icon'>
                            <MeatballsMenuIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-64 bg-base-1000 p-0' align='end'>
                        <DropdownMenuLabel className='text-bright-foreground p-2 text-base hover:text-brand-700'>
                            Relevant
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className='m-1 bg-base-800 pt-px' />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-base-1000 hover:text-brand-700'>
                                Top this Week
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-base-1000 hover:text-brand-700'>
                                Top this Month
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-base-1000 hover:text-brand-700'>
                                Top this Year
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-base-1000 hover:text-brand-700'>
                                Top this Infinity
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className='m-1 bg-base-800 pt-px' />
                        <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-base-1000 hover:text-brand-700'>
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
