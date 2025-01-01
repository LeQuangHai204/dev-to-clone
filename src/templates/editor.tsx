'use client';
import { useState, type ChangeEvent } from 'react';
import Markdown from 'react-markdown';
import {
    Bold,
    Italic,
    Link,
    List,
    ListOrdered,
    Heading,
    Quote,
    Code,
    ImageIcon,
    // MoreHorizontal,
    Zap,
    Square,
    Bolt,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/lib/utils';

const Editor = ({ className }: { className?: string }) => {
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [content, setContent] = useState<string>('');
    const [isPreview, setIsPreview] = useState<boolean>(false);

    const handleTextChange = (
        ev: ChangeEvent<HTMLTextAreaElement>,
        setTextState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const textarea = ev.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setTextState(textarea.value);
    };

    function handlePublish(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={cn('flex h-screen flex-col justify-between gap-2 py-2', className)}>
            <div className='flex h-10 justify-between'>
                <span className='my-auto font-medium'>Create Post</span>
                <div className='flex gap-2'>
                    <Button
                        className='p-2'
                        variant='type2'
                        onClick={() => {
                            setIsPreview(false);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        className='p-2'
                        variant='type2'
                        onClick={() => {
                            setIsPreview(true);
                        }}
                    >
                        Preview
                    </Button>
                </div>
            </div>

            {isPreview ? (
                <div className='h-full rounded-md bg-base-1000 px-16 py-12 text-lg'>
                    <h1 className='mb-8 text-5xl font-extrabold leading-snug'>
                        This is some sample text. This is some sample text. This is some sample text
                    </h1>
                    <Markdown className='prose'>
                        This is some sample text. This is some sample text. This is some sample text. This is some
                        sample text. This is some sample text. This is some sample text. This is some sample text. This
                        is some sample text.
                    </Markdown>
                </div>
            ) : (
                <div className='flex grow flex-col overflow-y-scroll'>
                    {/* Title and Tags */}
                    <div className='space-y-10 rounded-t-lg bg-base-1000 px-12 py-8'>
                        {/* Cover Image Button */}
                        <Button className='h-10 border-2 border-base-800 bg-inherit px-4 py-3 text-base-200'>
                            Add a cover image
                        </Button>

                        {/* Title Input */}
                        <Textarea
                            className='p-0 text-5xl font-extrabold leading-snug placeholder:text-base-700'
                            value={title}
                            onChange={(ev) => handleTextChange(ev, setTitle)}
                            placeholder='New post title here...'
                            rows={1}
                        />

                        {/* Tags Input */}
                        <div>
                            <Input
                                className='p-0 placeholder:text-base-600 focus-visible:ring-0'
                                placeholder='Add up to 4 tags...'
                                // onKeyDown={(e) => {
                                //     if (e.key === 'Enter' && e.currentTarget.value) {
                                //         handleAddTag(e.currentTarget.value);
                                //         e.currentTarget.value = '';
                                //     }
                                // }}
                            />
                            <div className='mt-2 flex gap-2'>
                                {tags.map((tag) => (
                                    <div
                                        key={tag}
                                        className='flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-sm text-zinc-300'
                                    >
                                        {tag}
                                        <Button
                                            onClick={() => setTags(tags.filter((t) => t !== tag))}
                                            className='text-zinc-500 hover:text-zinc-300'
                                        >
                                            ×
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Toolbar */}
                    <div className='flex items-center gap-1 border-x bg-background px-12 py-2'>
                        {/* Map icons dynamically based on the icon names */}
                        {[Bold, Italic, Link, ListOrdered, List, Heading, Quote, Code, ImageIcon, Square, Zap].map(
                            (Icon, index) => {
                                return (
                                    <Button
                                        key={index}
                                        size='icon'
                                        className='h-10 text-base-200 hover:bg-brand-400/75 hover:text-brand-200'
                                    >
                                        <Icon className='h-6 w-6' strokeWidth='2' />
                                    </Button>
                                );
                            }
                        )}
                    </div>
                    {/* Content Area */}
                    <div className='w-full grow bg-base-900'>
                        <Textarea
                            className='rounded-t-none px-12 py-8 text-lg placeholder:text-base-600'
                            value={content}
                            onChange={(ev) => handleTextChange(ev, setContent)}
                            placeholder='Write something here...'
                        />
                    </div>
                </div>
            )}

            <div className='flex gap-2'>
                <Button variant='type6' size='md' onClick={() => handlePublish()}>
                    Publish
                </Button>
                <Button variant='type2' size='md'>
                    Save Draft
                </Button>
                <Button
                    className='h-10 text-foreground hover:bg-brand-400/75 hover:text-brand-200'
                    variant='type2'
                    size='icon'
                >
                    <Bolt className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button className='text-sm' variant='type2' size='md'>
                    Revert New Changes
                </Button>
            </div>
        </div>
    );
};

export default Editor;
