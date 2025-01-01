import Link from 'next/link';

import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardHeader, CardContent, CardFooter } from '~/components/ui/card';
import { Popover, PopoverTrigger, PopoverContent } from '~/components/ui/popover';
import { BookmarkIcon } from '~/components/icons';

const NewsFeed = ({
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
    }[];
    showComments?: boolean;
}) => (
    <div className='flex w-full flex-col gap-y-2'>
        {data.map((post, index) => (
            <Card key={index} className={cn('w-full cursor-pointer border-0 bg-base-1000', className)}>
                <CardHeader className='pb-0'>
                    <div className='flex items-center gap-2'>
                        <Avatar className='h-8 w-8'>
                            <AvatarImage src='/placeholder.svg' />
                            <AvatarFallback>IK</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className='flex items-center space-x-1'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <span className='text-sm font-medium text-base-200'>Ismail Kamil</span>
                                    </PopoverTrigger>
                                    <PopoverContent align='start'>
                                        <span>Hello</span>
                                    </PopoverContent>
                                </Popover>
                                <div className='text-sm text-base-400'>for</div>
                                <Link className='text-sm font-normal text-base-200' href='#'>
                                    Apidog
                                </Link>
                            </div>
                            <p className='text-xs text-base-400'>Dec 5 (1 day ago)</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <h1 className='my-2 pl-10 text-2xl font-bold hover:text-brand-200'>{post.title}</h1>
                    <div className='flex flex-wrap pl-10'>
                        <Button className='text-sm' variant='type9' size='xs'>
                            #webdev
                        </Button>
                        <Button className='text-sm' variant='type9' size='xs'>
                            #tutorial
                        </Button>
                        <Button className='text-sm' variant='type9' size='xs'>
                            #frontend
                        </Button>
                    </div>
                    {/* Reactions */}
                    <div className='my-4 flex items-center justify-between pl-10'>
                        <div className='space-x-2'>
                            <Button variant='type8' size='xs'>
                                {post.reactions_count} Reactions
                            </Button>
                            <Button variant='type8' size='xs'>
                                {post.comments_count} Comments
                            </Button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-xs text-base-400'>5 min read</span>
                            <Button className='size-10 text-foreground' variant='type2' size='icon'>
                                <BookmarkIcon />
                            </Button>
                        </div>
                    </div>
                    {/* Comments */}
                    <div className='flex flex-col gap-4'>
                        {showComments
                            ? post.top_comments.map((comment, index) => (
                                  <div className='flex space-x-2 rounded-md text-sm' key={index}>
                                      <div className='flex w-8 flex-row-reverse text-left'>
                                          <Avatar className='h-6 w-6'>
                                              <AvatarImage src='/placeholder.svg' />
                                              <AvatarFallback className='bg-orange-500 text-xs'>YY</AvatarFallback>
                                          </Avatar>
                                      </div>
                                      <div className='flex-1 rounded-md bg-base-900 p-4'>
                                          <div className='flex items-center space-x-2'>
                                              <Link href='#' className='font-medium text-base-300 hover:text-blue-400'>
                                                  {comment.name}
                                              </Link>
                                              <span className='mt-px text-base-400 hover:underline'>4 hours ago</span>
                                          </div>
                                          <p className='mt-px text-zinc-300'>useful</p>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant='type8' size='sm'>
                        See all 5 comments
                    </Button>
                </CardFooter>
            </Card>
        ))}
    </div>
);

export default NewsFeed;
