import Image from '~/components/wrappers/image';
import SearchBar from '~/components/templates/searchbar';

import { BellIcon } from '~/components/icons/interactive';
import { Button } from '~/components/ui/button';
import PopoverWrapper from '~/components/wrappers/popover';

const Header = () => {
    return (
        <div className='bg-header-background'>
            <div className='sticky top-0 z-50 mx-auto flex h-header w-full max-w-display justify-between px-6 py-2'>
                <div className='flex gap-x-4'>
                    <Image
                        className='h-auto w-[50px]'
                        src='https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                        alt='DEV Community'
                    />
                    <SearchBar placeholder='Search ...' />
                </div>
                <div className='mr-8 flex gap-x-4'>
                    <Button variant='primary' className='h-full'>
                        Create Post
                    </Button>

                    <PopoverWrapper
                        trigger={
                            <div className='flex aspect-square h-full items-center justify-center rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90'>
                                <BellIcon />
                            </div>
                        }
                        content='HELLO'
                    />

                    <div className='flex aspect-square h-full items-center justify-center rounded-full bg-orange-500 p-1 text-xl'>
                        L
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
// items-center justify-center rounded-full bg-orange-500 p-1 text-white
