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
                <DropdownMenu>
                    <DropdownMenuTrigger className='hover:cursor-pointer' asChild>
                        <div className='flex aspect-square h-full w-auto items-center justify-center'>
                            <MeatballsMenuIcon className='text-secondary-foreground hover:text-foreground' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-64 bg-secondary-background p-0' align='end'>
                        <DropdownMenuLabel className='text-bright-foreground p-2 text-base hover:text-purplyblue-700'>
                            Relevant
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className='m-1 p-px' />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-background hover:text-purplyblue-700'>
                                Top this Week
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-background hover:text-purplyblue-700'>
                                Top this Month
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-background hover:text-purplyblue-700'>
                                Top this Year
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-background hover:text-purplyblue-700'>
                                Top this Infinity
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className='mx-2 my-1 p-px' />
                        <DropdownMenuItem className='text-bright-foreground rounded-md p-2 font-normal hover:bg-background hover:text-purplyblue-700'>
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
