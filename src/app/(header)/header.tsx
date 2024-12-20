import Link from 'next/link';
import Image from 'next/image';

import SearchBar from '~/templates/searchbar';
import { Button } from '~/components/ui/button';
import { BellIcon, SearchIcon } from '~/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { profileNavigationData } from '~/lib/constants';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

const Header = () => {
    return (
        <div className='h-14 w-full bg-secondary-background'>
            <div className='sticky top-0 z-50 mx-auto flex max-w-display justify-between px-4 py-2'>
                <Link className='flex basis-1/2 gap-x-4' href='/'>
                    <Image
                        height={40}
                        width={50}
                        src='https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                        alt='DEV Community'
                    />
                    <SearchBar className='grow' placeholder='Search ...' LeftIcon={SearchIcon} />
                </Link>
                <div className='mr-4 flex gap-x-3'>
                    <Button variant='primary' className='h-full'>
                        Create Post
                    </Button>
                    <Button className='h-full hover:bg-purplyblue-400/75' variant='ghost' size='icon'>
                        <BellIcon />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='hover:cursor-pointer' asChild>
                            <Avatar>
                                <AvatarImage src='https://github.com/shadnotcn.png' />
                                <AvatarFallback className='bg-orange-500 text-lg text-blue-900'>CB</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-64 p-2'>
                            <DropdownMenuLabel className='rounded-md px-4 text-foreground hover:bg-purplyblue-400/75 hover:underline'>
                                <div className='text-bright-foreground text-base'>Le Quang Hai</div>
                                <div className='font-normal text-secondary-foreground'>@lequanghai204</div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className='my-2' />
                            <DropdownMenuGroup>
                                <DropdownMenuItem className='rounded-md px-4 py-2 text-foreground hover:bg-purplyblue-400/75 hover:text-purplyblue-200 hover:underline'>
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem className='rounded-md px-4 py-2 text-foreground hover:bg-purplyblue-400/75 hover:text-purplyblue-200 hover:underline'>
                                    Create Post
                                </DropdownMenuItem>
                                <DropdownMenuItem className='rounded-md px-4 py-2 text-foreground hover:bg-purplyblue-400/75 hover:text-purplyblue-200 hover:underline'>
                                    Reading List
                                </DropdownMenuItem>
                                <DropdownMenuItem className='rounded-md px-4 py-2 text-foreground hover:bg-purplyblue-400/75 hover:text-purplyblue-200 hover:underline'>
                                    Settings
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className='my-2' />
                            <DropdownMenuItem className='rounded-md px-4 py-2 text-foreground hover:bg-purplyblue-400/75 hover:text-purplyblue-200 hover:underline'>
                                Sign out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Header;
