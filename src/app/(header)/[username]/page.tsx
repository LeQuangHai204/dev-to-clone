import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { MeatballsMenuIcon, LocationIcon, CakeIcon, RedirectIcon } from '~/components/icons';

import NewsFeed from '~/templates/newsfeed';
import InfoSidebar from '~/templates/info-sidebar';
import DropdownMenuWrapper from '~/templates/dropdown';

import { rightSidebarData, tempNews } from '~/app/(header)/constants';
import { me } from './constants';

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
        <div className='select-none'>
            <div className='flex h-32 w-full items-center justify-center' style={{ backgroundColor: color }}>
                <Avatar className='z-10 h-28 w-28 border-4' style={{ borderColor: color }}>
                    <AvatarImage alt={name} src={image || '/placeholder.svg?height=128&width=128'} />
                    <AvatarFallback>DEV</AvatarFallback>
                </Avatar>
            </div>
            <div className='relative -top-16 mx-auto flex max-w-profile flex-col'>
                <Card className='mb-4 bg-secondary-background'>
                    <CardHeader className='mt-4'>
                        <div className='flex h-10 justify-end gap-x-2'>
                            <Button variant='type6'>Follow</Button>
                            <DropdownMenuWrapper
                                data={[
                                    [
                                        {
                                            title: `Block @${name}`,
                                            url: '/block',
                                        },
                                        {
                                            title: 'Report Abuse',
                                            url: '/report',
                                        },
                                    ],
                                ]}
                            >
                                <Button size='icon' variant='type7'>
                                    <MeatballsMenuIcon />
                                </Button>
                            </DropdownMenuWrapper>
                        </div>
                    </CardHeader>
                    <CardContent className='p-0'>
                        <div className='text-center text-3xl font-bold'>{name}</div>
                        <div className='mx-auto mt-2 max-w-3xl text-center text-foreground'>{biography}</div>
                        <div className='flex justify-center p-4'>
                            <Button
                                className='hover:text-brand-200 px-3 py-1 text-sm text-secondary-foreground'
                                variant='ghost'
                            >
                                <LocationIcon />
                                {location}
                            </Button>
                            <Button
                                className='hover:text-brand-200 px-3 py-1 text-sm text-secondary-foreground'
                                variant='ghost'
                            >
                                <CakeIcon />
                                Joined on
                                {' ' +
                                    new Date(created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                            </Button>
                            <Button
                                className='hover:text-brand-200 px-3 py-1 text-sm text-secondary-foreground'
                                variant='ghost'
                            >
                                <RedirectIcon />
                                {contact.website}
                            </Button>
                        </div>
                        <div className='flex justify-evenly border-t p-6'>
                            <div className=''>
                                <div className='text-center text-sm text-secondary-foreground'>Education</div>
                                <div className='text-base-0 text-center'>{education}</div>
                            </div>
                            <div className=''>
                                <div className='text-center text-sm text-secondary-foreground'>Pronouns</div>
                                <div className='text-base-0 text-center'>{pronouns}</div>
                            </div>
                            <div className=''>
                                <div className='text-center text-sm text-secondary-foreground'>Work</div>
                                <div className='text-base-0 text-center'>{work}</div>
                            </div>
                        </div>
                        <div></div>
                    </CardContent>
                </Card>

                <div className='flex w-full gap-x-4'>
                    <InfoSidebar className='basis-1/3 bg-red-500' data={rightSidebarData} />
                    <NewsFeed data={tempNews} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
