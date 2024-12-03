import Image from '~/components/wrappers/image';
import SearchBar from '~/components/templates/searchbar';

import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

import { BellIcon, SearchIcon } from '~/components/icons/interactive';
import PopoverWrapper from '~/components/wrappers/popover';

const Header = () => {
    return (
        <div className='bg-secondary-background'>
            <div className='sticky top-0 z-50 mx-auto flex h-header w-full max-w-display justify-between px-6 py-2'>
                <div className='flex gap-x-4'>
                    <Image
                        className='h-auto w-[50px]'
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

                    <PopoverWrapper content='HELLO'>
                        <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </PopoverWrapper>
                </div>
            </div>
        </div>
    );
};

export default Header;
// items-center justify-center rounded-full bg-orange-500 p-1 text-white
