'use client';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Textarea } from '~/components/ui/textarea';
import { Toolbar } from '~/components/editor';
import { Button } from '~/components/ui/button';
import type { ImageFile } from '~/lib/types/image-file';

const CommentBox = () => {
    const [content, setContent] = useState<string>('');
    const [images, setImages] = useState<ImageFile[]>([]);

    // Clear existing images leaving page
    useEffect(() => {
        return () => {
            setImages((images) => {
                images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
                return [];
            });
        };
    }, []);

    return (
        <div className='my-12 flex gap-4'>
            <Avatar className='h-9 w-9'>
                <AvatarImage src='/placeholder.svg' />
                <AvatarFallback className='bg-orange-500'>IK</AvatarFallback>
            </Avatar>
            <div className='space-y-2'>
                <div className='w-full rounded-lg bg-background focus-within:border focus-within:border-brand-800'>
                    <Textarea
                        className='p-4 text-lg placeholder:text-base-600'
                        value={content}
                        onChange={(ev) => setContent(ev.target.value)}
                        placeholder='Write something here...'
                    />
                    <Toolbar className='mx-2' size={4} setContent={setContent} setImages={setImages} />
                </div>
                <div className='space-x-2'>
                    <Button className='text-base font-medium' variant='type6' size='md'>
                        Submit
                    </Button>
                    <Button className='text-base font-medium' variant='type7' size='md'>
                        Preview
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CommentBox;
