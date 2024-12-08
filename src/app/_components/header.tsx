import Image from 'next/image';

import SearchBar from '~/components/templates/searchbar';

import { Button } from '~/components/ui/button';
import { BellIcon, SearchIcon } from '~/components/icons/interactive';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Popover, PopoverTrigger, PopoverContent } from '~/components/ui/popover';

const Header = () => {
    return (
        <div className='bg-secondary-background'>
            <div className='sticky top-0 z-50 mx-auto flex h-14 max-w-display justify-between px-4 py-2'>
                <div className='flex gap-x-4'>
                    <Image
                        height={40}
                        width={50}
                        src='https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                        alt='DEV Community'
                    />
                    <SearchBar placeholder='Search ...' LeftIcon={SearchIcon} />
                </div>
                <div className='flex gap-x-4'>
                    <Button variant='primary' className='h-full'>
                        Create Post
                    </Button>

                    <Button className='h-full hover:bg-purplyblue-400/75' variant='ghost' size='icon'>
                        <BellIcon />
                    </Button>

                    <Popover>
                        <PopoverTrigger>
                            <Avatar>
                                <AvatarImage src='https://github.com/shadnotcn.png' />
                                <AvatarFallback className='bg-orange-500 text-lg text-blue-900'>CB</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>Hello</PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Header;
