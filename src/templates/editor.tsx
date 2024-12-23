'use client';

import * as React from 'react';
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
    MoreHorizontal,
    Zap,
    Square,
    Bolt,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { cn } from '~/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '~/components/ui/dropdown-menu';

const Editor = ({ className }: { className?: string }) => {
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState<string[]>([]);
    const [content, setContent] = React.useState('');

    const handleAddTag = (tag: string) => {
        if (tags.length < 4 && !tags.includes(tag)) {
            setTags([...tags, tag]);
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className={cn('rounded-lg', className)}>
            <div className='gap-4 space-y-4 bg-secondary-background px-12 py-8'>
                {/* Cover Image Button */}
                <Button variant='ghost' className='bg-secondary-background ring-1 ring-secondary-foreground'>
                    Add a cover image
                </Button>

                {/* Title Input */}
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='New post title here...'
                    className='h-fit p-0 text-5xl font-extrabold placeholder:text-nested-background focus-visible:ring-0'
                />

                {/* Tags Input */}
                <div>
                    <Input
                        placeholder='Add up to 4 tags...'
                        className='p-0 placeholder:text-secondary-foreground focus-visible:ring-0'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.currentTarget.value) {
                                handleAddTag(e.currentTarget.value);
                                e.currentTarget.value = '';
                            }
                        }}
                    />
                    <div className='mt-2 flex gap-2'>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className='flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-sm text-zinc-300'
                            >
                                {tag}
                                <button
                                    onClick={() => handleRemoveTag(tag)}
                                    className='text-zinc-500 hover:text-zinc-300'
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className='flex items-center gap-1 border-x bg-background p-4'>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Bold className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Italic className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Link className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <ListOrdered className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <List className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Heading className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Quote className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Code className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Square className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <Zap className='h-6 w-6' strokeWidth='2' />
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                >
                    <ImageIcon className='h-6 w-6' strokeWidth='2' />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger className='hover:bg-brand-400/75 hover:text-brand-200 ml-auto aspect-square h-10 w-auto rounded-md'>
                        <MoreHorizontal className='m-auto h-full' strokeWidth='2' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='flex gap-1 p-2' align='end'>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                        >
                            <Square className='h-6 w-6' strokeWidth='2' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                        >
                            <Zap className='h-6 w-6' strokeWidth='2' />
                        </Button>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
                        >
                            <ImageIcon className='h-6 w-6' strokeWidth='2' />
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Content Area */}
            <Textarea
                className='min-h-96 resize-none border-0 bg-secondary-background px-12 py-8 placeholder:text-secondary-foreground focus-visible:ring-0'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Write your post content here...'
            />
            <div className='my-2 flex gap-2'>
                <Button variant='type6'>Publish</Button>
                <Button variant='type2' size='md'>
                    Save Draft
                </Button>
                <Button
                    className='hover:bg-brand-400/75 hover:text-brand-200 h-10 text-foreground'
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
