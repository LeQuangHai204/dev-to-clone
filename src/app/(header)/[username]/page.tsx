import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { me } from './constants';
import { MeatballsMenuIcon, LocationIcon, CakeIcon, RedirectIcon } from '~/components/icons';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';

const ProfilePage = async ({ params }: { params: Promise<{ username: string[] }> }) => {
    const username = await params;
    const {
        id,
        name,
        color,
        image,
        biography,
        location,
        created_at,
        contact,
        education,
        pronouns,
        work,
        organizations,
    } = me;

    return (
        <>
            <div className='flex h-32 w-full items-center justify-center' style={{ backgroundColor: color }}>
                <Avatar className='z-10 h-28 w-28 border-4' style={{ borderColor: color }}>
                    <AvatarImage alt={name} src={image || '/placeholder.svg?height=128&width=128'} />
                    <AvatarFallback>DEV</AvatarFallback>
                </Avatar>
            </div>

            <Card className='relative -top-16 mx-auto h-[1000px] w-full max-w-profile border-secondary-foreground bg-secondary-background'>
                <CardHeader className='mt-4'>
                    <div className='flex h-10 justify-end gap-x-2'>
                        <Button className='h-full' variant='outline'>
                            Follow
                        </Button>
                        <Popover>
                            <PopoverTrigger className='aspect-square rounded-md hover:bg-purplyblue-400/75'>
                                <MeatballsMenuIcon className='mx-auto text-secondary-foreground' />
                            </PopoverTrigger>
                            <PopoverContent>Hello</PopoverContent>
                        </Popover>
                    </div>
                </CardHeader>
                <CardContent className='border'>
                    <div className='text-center text-3xl font-bold'>{name}</div>
                    <div className='mx-auto max-w-3xl text-center'>{biography}</div>
                    <div className='flex justify-center'>
                        <Button
                            className='px-3 py-1 text-sm text-secondary-foreground hover:text-purplyblue-200'
                            variant='ghost'
                        >
                            <LocationIcon />
                            {location}
                        </Button>
                        <Button
                            className='px-3 py-1 text-sm text-secondary-foreground hover:text-purplyblue-200'
                            variant='ghost'
                        >
                            <CakeIcon />
                            Joined on{' '}
                            {new Date(created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </Button>
                        <Button
                            className='px-3 py-1 text-sm text-secondary-foreground hover:text-purplyblue-200'
                            variant='ghost'
                        >
                            <RedirectIcon />
                            {contact.website}
                        </Button>
                    </div>
                    <div className='flex justify-evenly border-t'>
                        <div className=''>
                            <div className='text-center text-secondary-foreground'>Education</div>
                            <div className='text-center text-white'>{education}</div>
                        </div>
                        <div className=''>
                            <div className='text-center text-secondary-foreground'>Pronouns</div>
                            <div className='text-center text-white'>{pronouns}</div>
                        </div>{' '}
                        <div className=''>
                            <div className='text-center text-secondary-foreground'>Work</div>
                            <div className='text-center text-white'>{work}</div>
                        </div>
                    </div>
                    <div></div>
                </CardContent>
            </Card>
            {/* <div className='bg-black text-white'>
                <Card className='mx-auto max-w-4xl border-none bg-zinc-900'>
                    <CardHeader className='relative h-32 bg-amber-500'>
                        <div className='absolute -bottom-16 left-8'>
                            <Avatar className='h-32 w-32 border-4 border-zinc-900'>
                                <AvatarImage alt={name} src={image || '/placeholder.svg?height=128&width=128'} />
                                <AvatarFallback>DEV</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className='absolute right-4 top-4 flex items-center gap-2'>
                            <Button className='bg-indigo-600 hover:bg-indigo-700'>Follow</Button>
                            <Button size='icon' variant='ghost' className='text-white'>
                                <MoreHorizontal className='h-5 w-5' />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className='mt-20 space-y-4 px-8 pb-8'>
                        <div>
                            <h1 className='text-3xl font-bold'>Random</h1>
                            <p className='mt-2 text-lg text-zinc-300'>
                                I'm a self-taught Web developer who is always learning and creating cool Project stuffs.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-4 text-sm text-zinc-400'>
                            <div className='flex items-center gap-1'>
                                <MapPin className='h-4 w-4' />
                                India
                            </div>
                            <div className='flex items-center gap-1'>
                                <Calendar className='h-4 w-4' />
                                Joined on Oct 26, 2023
                            </div>
                            <div className='flex items-center gap-1'>
                                <Mail className='h-4 w-4' />
                                taquiimam.83@gmail.com
                            </div>
                            <div className='flex items-center gap-1'>
                                <Link2 className='h-4 w-4' />
                                <a href='https://mdtaquiimam.vercel.app' className='text-blue-400 hover:underline'>
                                    https://mdtaquiimam.vercel.app
                                </a>
                            </div>
                            <div className='flex gap-2'>
                                <a href='#' className='text-zinc-400 hover:text-white'>
                                    <Github className='h-5 w-5' />
                                </a>
                                <a href='#' className='text-zinc-400 hover:text-white'>
                                    <Twitter className='h-5 w-5' />
                                </a>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <span className='font-semibold'>Pronouns:</span>
                                <span className='ml-2 text-zinc-300'>Taqui Imam</span>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <Badge variant='secondary' className='bg-green-600 text-white'>
                                <span className='mr-1'>🌱</span>1 Year of Coding
                            </Badge>
                            <Badge variant='secondary' className='bg-purple-600 text-white'>
                                <span className='mr-1'>✍️</span>8 Posts Published
                            </Badge>
                            <Badge variant='secondary' className='bg-blue-600 text-white'>
                                <span className='mr-1'>💼</span>8 Projects
                            </Badge>
                            <Badge variant='secondary' className='bg-pink-600 text-white'>
                                <span className='mr-1'>💖</span>4 Followers
                            </Badge>
                            <Badge variant='secondary' className='bg-cyan-600 text-white'>
                                <span className='mr-1'>🌊</span>4 Following
                            </Badge>
                            <Badge variant='secondary' className='bg-indigo-600 text-white'>
                                <span className='mr-1'>🌟</span>2 Achievements
                            </Badge>
                            <Badge variant='secondary' className='bg-gray-600 text-white'>
                                <span className='mr-1'>🏆</span>1 Badge
                            </Badge>
                            <Badge variant='secondary' className='bg-yellow-500 text-black'>
                                <span className='mr-1'>JS</span>
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div> */}
        </>
    );
};

export default ProfilePage;
