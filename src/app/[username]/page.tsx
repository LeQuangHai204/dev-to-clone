import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { me } from './constants';

const ProfilePage = ({ params }: { params: { username: string } }) => {
    const {
        id,
        name,
        username,
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
        <div className='w-full'>
            <div className='h-32 w-full' style={{ backgroundColor: color }}></div>
            <div className='h-screen w-full bg-blue-500'>
                <div className='max-w-profile relative -top-16 mx-auto flex items-end justify-center bg-yellow-500'>
                    <div>
                        <Avatar className='relative -top-1/2'>
                            <AvatarImage src='https://github.com/shadnotcn.png' />
                            <AvatarFallback className='bg-orange-500 text-lg text-blue-900'>CB</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
