import Image from '~/components/wrappers/image';
import SearchBar from '~/components/searchbar';

import { BellIcon } from '~/components/icons/tooltip';
import { Button } from '~/components/ui/button';

const Header = () => {
    return (
        <div className='bg-header-background'>
            <div className='sticky top-0 z-50 mx-auto flex h-header w-full max-w-display justify-between px-4 py-2'>
                <div className='flex flex-1'>
                    <Image
                        className='mx-4 block'
                        width='50px'
                        src='https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
                        alt='DEV Community'
                    />
                    <SearchBar className='max-w-2xl' placeholder='Search ...' />
                </div>
                <div className='flex'>
                    <Button variant='primary' className='h-full'>
                        Create Post
                    </Button>
                    <div className='flex h-full items-center justify-center bg-primary text-primary-foreground shadow hover:bg-primary/90'>
                        <BellIcon className='' />
                    </div>
                    <div className='m-1 flex aspect-square size-auto h-full items-center justify-center rounded-full bg-orange-500 text-white'>
                        L
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
