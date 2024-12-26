'use client';
import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from 'react';

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

// [Bold, Italic, Link, ListOrdered, List, Heading, Quote, Code, ImageIcon, Square, Zap]
const actions = [
    { icon: Bold, prefix: '**', postfix: '**' },
    { icon: Italic, prefix: '_', postfix: '_' },
    { icon: Link, prefix: '[', postfix: '](url)' },
];

const Editor = ({ className }: { className?: string }, ref: ForwardedRef<unknown>) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [content, setContent] = useState<string>('This is some sample text.');

    const [isPreview, setIsPreview] = useState<boolean>(false);

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
        togglePreview: () => setIsPreview((prev) => !prev),
        isPreview: () => isPreview,
    }));

    // Generalized handler for different actions (Bold, Italic, etc.)
    const handleAction = (action: (typeof actions)[number]) => {
        if (textareaRef.current === null) return;
        const { selectionStart, selectionEnd, value } = textareaRef.current;
        const { prefix, postfix } = action;

        let newValue = undefined;
        let newSelectionStart = undefined;
        let newSelectionEnd = undefined;

        if (
            value.substring(selectionStart, selectionStart + prefix.length) == prefix &&
            value.substring(selectionEnd - postfix.length, selectionEnd) == postfix
        ) {
            newValue =
                value.substring(0, selectionStart) +
                value.substring(selectionStart + prefix.length, selectionEnd - postfix.length) +
                value.substring(selectionEnd);
            newSelectionStart = selectionStart;
            newSelectionEnd = selectionEnd - prefix.length - postfix.length;
        } else if (
            value.substring(selectionStart - prefix.length, selectionStart) == prefix &&
            value.substring(selectionEnd, selectionEnd + postfix.length) == postfix
        ) {
            newValue =
                value.substring(0, selectionStart - prefix.length) +
                value.substring(selectionStart, selectionEnd) +
                value.substring(selectionEnd + postfix.length);
            newSelectionStart = selectionStart - prefix.length;
            newSelectionEnd = selectionEnd - prefix.length;
        } else {
            newValue =
                value.substring(0, selectionStart) +
                prefix +
                value.substring(selectionStart, selectionEnd) +
                postfix +
                value.substring(selectionEnd);
            newSelectionStart = selectionStart + prefix.length;
            newSelectionEnd = selectionEnd + prefix.length;
        }

        textareaRef.current.value = newValue;
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(newSelectionStart, newSelectionEnd);
    };

    return isPreview ? (
        <div className='rounded bg-gray-50 p-8 shadow'>
            <h1 className='mb-4 text-4xl font-bold'>{title || 'Untitled'}</h1>
            <div className='prose'>{content}</div>
        </div>
    ) : (
        <div className={className}>
            <div className='gap-4 space-y-10 rounded-t-lg bg-base-1000 px-12 py-8'>
                {/* Cover Image Button */}
                <Button className='bg-inherit ring-1 ring-base-400'>Add a cover image</Button>

                {/* Title Input */}
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='New post title here...'
                    className='h-fit p-0 text-5xl font-extrabold placeholder:text-base-700 focus-visible:ring-0'
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
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <Button
                            key={index}
                            size='icon'
                            className='h-10 text-foreground hover:bg-brand-400/75 hover:text-brand-200'
                            onClick={() => handleAction(action)}
                        >
                            <Icon className='h-6 w-6' strokeWidth='2' />
                        </Button>
                    );
                })}
            </div>
            {/* Content Area */}
            <Textarea
                className='min-h-96 resize-none rounded-t-none border-0 bg-base-900 px-12 py-8 text-lg placeholder:text-base-600 focus-visible:ring-0'
                ref={textareaRef}
                placeholder='Write here...'
            />
            <div className='mt-4 flex gap-2'>
                <Button variant='type6'>Publish</Button>
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

export default forwardRef(Editor);
