import {
    DrawerIcon,
    EyesIcon,
    FaceIcon,
    HomeIcon,
    MicrophoneIcon,
    PlusPlusIcon,
    ThumbsUpIcon,
} from '~/components/icons/navigation';

const leftSidebarData = [
    {
        title: '',
        items: [
            {
                title: 'Home',
                url: '#',
                icon: HomeIcon,
            },
            {
                title: 'Dev++',
                url: '#',
                icon: PlusPlusIcon,
            },
            {
                title: 'Reading List',
                url: '#',
                icon: DrawerIcon,
            },
            {
                title: 'Podcasts',
                url: '#',
                icon: MicrophoneIcon,
            },
        ],
    },
    {
        title: 'Other',
        items: [
            {
                title: 'Code of Conduct',
                url: '#',
                icon: ThumbsUpIcon,
            },
            {
                title: 'Privacy Policy',
                url: '#',
                icon: FaceIcon,
            },
            {
                title: 'Terms of Use',
                url: '#',
                icon: EyesIcon,
            },
        ],
    },
];

const rightSidebarData = [
    {
        title: 'Active discussions',
        items: [
            {
                title: 'Mastering JavaScript: Unleash the Power of Functional Reactive Programming with Higher-Order Streams',
                commentCount: 3,
                url: '#',
            },
            {
                title: 'Creating a TypeScript CLI for Your Monorepo',
                commentCount: 7,
                url: '#',
            },
            {
                title: '5 Ways Developers Can Gear Up for an Amazing 2025',
                commentCount: 2,
                url: '#',
            },
        ],
    },
];

export { leftSidebarData, rightSidebarData };
