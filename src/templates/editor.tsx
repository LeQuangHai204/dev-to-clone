'use client';
import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
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
    X,
} from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/lib/utils';

const Editor = ({ className }: { className?: string }) => {
    const [title, setTitle] = useState<string>('Title');
    const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3', 'tag4']);
    const [selectedTag, setSelectedTag] = useState<number | null>(null);
    const [content, setContent] = useState<string>('Content');
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

    const handlePublish = async (): Promise<void> => {};

    const handleTagChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value.trim();
        setTags((prevTags) => prevTags.map((tag, index) => (index === selectedTag ? value : tag)));
    };

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
        const value = ev.currentTarget.value.trim();
        if (ev.key === 'Enter' && value && !tags.includes(value)) {
            setTags((prev) => [...prev, value]);
        }
    };

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
                <div className='h-full bg-base-1000 px-16 py-12 text-lg'>
                    <h1 className='mb-8 text-5xl font-extrabold leading-snug'>{title}</h1>
                    <Markdown className='prose'>{content}</Markdown>
                </div>
            ) : (
                <div className='flex grow flex-col overflow-y-auto'>
                    {/* Title and Tags */}
                    <div className='space-y-10 bg-base-1000 px-12 py-8'>
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
                            autoFocus={selectedTag === null}
                        />

                        {/* Tags Input */}
                        <div className='mt-2 flex gap-2' onClick={() => setSelectedTag(null)}>
                            {tags.map((tag, index) =>
                                index === selectedTag ? (
                                    <Input
                                        key={index}
                                        className='w-fit px-0 focus-visible:ring-0'
                                        value={tag}
                                        onChange={handleTagChange}
                                        autoFocus
                                    />
                                ) : (
                                    <div key={index} className='flex gap-1 rounded-md bg-base-900 p-1 text-base-300'>
                                        <Button
                                            className='hover:cursor-text'
                                            onClick={(ev) => {
                                                ev.stopPropagation();
                                                setSelectedTag(index);
                                            }}
                                        >
                                            <div className='text-base-500'>#</div> {tag}
                                        </Button>
                                        <Button
                                            onClick={() => setTags(tags.filter((t) => t !== tag))}
                                            className='hover:text-red-500'
                                        >
                                            <X />
                                        </Button>
                                    </div>
                                )
                            )}
                            {tags.length < 4 ? (
                                <Input
                                    className='w-40 p-0 placeholder:text-base-600 focus-visible:ring-0'
                                    placeholder={tags.length ? 'Add another tag' : 'Add up to 4 tags'}
                                    onKeyDown={handleKeyDown}
                                />
                            ) : null}
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
