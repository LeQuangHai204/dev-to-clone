import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { BellIcon, SearchIcon } from '~/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import Logo from '~/components/logo';

import SearchBar from '~/templates/searchbar';
import DropdownMenuWrapper from '~/templates/dropdown';

import { profileDropdownActions } from './constants';

const Header = () => {
    return (
        <div className='sticky top-0 z-50 h-14 w-full select-none border-b border-background bg-secondary-background'>
            <div className='mx-auto flex max-w-display justify-between px-4 py-2'>
                <div className='flex basis-1/2 gap-x-4'>
                    <Logo />
                    <SearchBar className='grow' placeholder='Search ...' LeftIcon={SearchIcon} />
                </div>
                <div className='mr-4 flex gap-x-3'>
                    <Button variant='primary' className='h-full'>
                        Create Post
                    </Button>
                    <Button className='h-full hover:bg-purplyblue-400/75' variant='ghost' size='icon'>
                        <BellIcon />
                    </Button>
                    <DropdownMenuWrapper
                        className='hover:underline'
                        label={
                            <Link href='/me'>
                                <div className='text-bright-foreground text-base'>Le Quang Hai</div>
                                <div className='font-normal text-secondary-foreground'>@lequanghai204</div>
                            </Link>
                        }
                        data={profileDropdownActions}
                    >
                        <Avatar>
                            <AvatarImage src='https://github.com/shadnotcn.png' />
                            <AvatarFallback className='bg-orange-500 text-lg text-blue-900'>CB</AvatarFallback>
                        </Avatar>
                    </DropdownMenuWrapper>
                </div>
            </div>
        </div>
    );
};

export default Header;
