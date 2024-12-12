import Link from 'next/link';

import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardHeader, CardContent, CardFooter } from '~/components/ui/card';
import { Popover, PopoverTrigger, PopoverContent } from '~/components/ui/popover';
import { BookmarkIcon } from '~/components/icons';

const Article = ({
    className,
    data,
    showComments,
}: {
    className?: string;
    data: {
        title: string;
        comments_count: number;
        reactions_count: number;
        top_comments: {
            name: string;
            profile_image?: string;
        }[];
    };
    showComments?: boolean;
}) => {
    return (
        <Card className={cn('w-full cursor-pointer bg-secondary-background', className)}>
            <CardHeader>
                <div className='flex items-center gap-2'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/placeholder.svg' />
                        <AvatarFallback>IK</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className='flex items-center space-x-1'>
                            <Popover>
                                <PopoverTrigger>
                                    <span className='text-sm font-normal text-foreground'>Ismail Kamil</span>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <span>Hello</span>
                                </PopoverContent>
                            </Popover>
                            <div className='text-sm text-secondary-foreground'>for</div>
                            <Link className='text-sm font-normal text-foreground' href='#'>
                                Apidog
                            </Link>
                        </div>
                        <p className='text-xs text-secondary-foreground'>Dec 5 (1 day ago)</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='space-y-2'>
                <h1 className='pl-11 text-2xl font-bold hover:text-purplyblue-200'>{data.title}</h1>
                <div className='flex flex-wrap pl-10'>
                    <Button className='text-foreground hover:text-white' variant='ghost' size='sm'>
                        #webdev
                    </Button>
                    <Button className='text-foreground hover:text-white' variant='ghost' size='sm'>
                        #tutorial
                    </Button>
                    <Button className='text-foreground hover:text-white' variant='ghost' size='sm'>
                        #frontend
                    </Button>
                </div>
                {/* Reactions */}
                <div className='flex items-center justify-between pl-10'>
                    <div className='space-x-2'>
                        <Button
                            variant='ghost'
                            className='h-10 text-foreground hover:bg-nested-background hover:text-white'
                            size='sm'
                        >
                            {data.reactions_count} Reactions
                        </Button>
                        <Button
                            variant='ghost'
                            className='h-10 text-foreground hover:bg-nested-background hover:text-white'
                            size='sm'
                        >
                            {data.comments_count} Comments
                        </Button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-xs text-secondary-foreground'>5 min read</span>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='size-10 text-secondary-foreground hover:bg-purplyblue-400/75'
                        >
                            <BookmarkIcon />
                        </Button>
                    </div>
                </div>
                {/* Comments */}
                {showComments
                    ? data.top_comments.map((comment, index) => (
                          <div className='flex flex-col gap-4' key={index}>
                              <div className='flex space-x-2 rounded-md'>
                                  <div className='flex w-8 flex-row-reverse text-left'>
                                      <Avatar className='h-6 w-6'>
                                          <AvatarImage src='/placeholder.svg' />
                                          <AvatarFallback className='bg-orange-500 text-sm'>YY</AvatarFallback>
                                      </Avatar>
                                  </div>
                                  <div className='flex-1 rounded-md bg-nested-background p-4'>
                                      <div className='flex items-center space-x-2'>
                                          <Link href='#' className='text-sm font-medium hover:text-blue-400'>
                                              {comment.name}
                                          </Link>
                                          <span className='text-xs text-zinc-500'>4 hours ago</span>
                                      </div>
                                      <p className='text-sm text-zinc-300'>useful</p>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </CardContent>
            <CardFooter>
                <Button variant='ghost' className='ml-8 text-secondary-foreground hover:text-foreground'>
                    See all 5 comments
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Article;
