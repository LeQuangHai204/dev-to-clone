import Link from 'next/link';
import { Fragment } from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import Icon from '~/components/icons';
import { cn } from '~/lib/utils';

const DropdownMenuWrapper = ({
    className,
    label,
    data,
    contentAlign = 'end',
    children,
}: {
    className?: string;
    label?: React.ReactNode;
    data: { title: string; url: string; icon?: Icon }[][];
    contentAlign?: 'center' | 'end' | 'start';
    children: React.ReactNode;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger className='hover:cursor-pointer focus-visible:outline-none' asChild>
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-64 p-2' align={contentAlign}>
            {label ? (
                <>
                    <DropdownMenuLabel className='hover:bg-brand-400/75 rounded-md px-4 text-foreground hover:underline'>
                        {label}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className='my-2' />
                </>
            ) : null}
            {data.map((group, groupIndex) => (
                <Fragment key={groupIndex}>
                    <DropdownMenuGroup>
                        {group.map(({ title, url, icon: Icon }, itemIndex) => (
                            <DropdownMenuItem
                                key={itemIndex}
                                className={cn(
                                    'hover:bg-brand-400/75 hover:text-brand-200 flex items-center gap-2 rounded-md px-4 py-2 text-foreground',
                                    className
                                )}
                            >
                                {/* Modify Icon later */}
                                {/* {Icon ? <Icon className='' /> : null} */}
                                <Link className='w-full' href={url} passHref>
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                    {groupIndex < data.length - 1 ? <DropdownMenuSeparator className='my-2' /> : null}
                </Fragment>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
);

export default DropdownMenuWrapper;
