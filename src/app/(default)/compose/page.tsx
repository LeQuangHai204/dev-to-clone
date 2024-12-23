import Logo from '~/components/logo';
import { Button } from '~/components/ui/button';

import Editor from '~/templates/editor';

const ComposePage = () => {
    return (
        <div className='flex gap-3 pt-2'>
            <div className='hidden md:block'>
                <Logo />
            </div>
            <div className='grow basis-[70%]'>
                <div className='flex h-10 justify-between'>
                    <span className='text-base-0 my-auto font-medium'>Create Post</span>
                    <div className='flex gap-2'>
                        <Button className='hover:bg-brand-400/75 hover:text-brand-600 p-2' variant='ghost'>
                            Edit
                        </Button>
                        <Button className='hover:bg-brand-400/75 hover:text-brand-600 p-2' variant='ghost'>
                            Preview
                        </Button>
                    </div>
                </div>
                <Editor className='m-2' />
            </div>
            <div className='hidden grow basis-[30%] bg-yellow-400 md:block'></div>
        </div>
    );
};

export default ComposePage;
