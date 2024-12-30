import Logo from '~/components/logo';
import { Button } from '~/components/ui/button';

import Editor from '~/templates/editor';

const ComposePage = () => {
    return (
        <div className='flex gap-4'>
            <Logo className='hidden flex-none pt-2 md:block' />
            <Editor className='grow basis-[70%]' />
            <div className='hidden grow basis-[30%] bg-yellow-400 md:block'></div>
        </div>
    );
};

export default ComposePage;
