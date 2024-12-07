const BellIcon = ({ className, size = '1.8rem' }: { className?: string; size?: string }) => (
    <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        aria-labelledby='atpnbwi9gs3oz6yon8s66o8ptdmup8wm'
        role='img'
        viewBox='0 0 24 24'
        fill='currentColor'
    >
        <title id='atpnbwi9gs3oz6yon8s66o8ptdmup8wm'>Notifications</title>
        <path d='M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z'></path>
    </svg>
);

const SearchIcon = ({ className, size = '1.5rem' }: { className?: string; size?: string }) => (
    <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        aria-hidden='true'
        focusable='false'
        fill='currentColor'
    >
        <path d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z'></path>
    </svg>
);

const BookmarkIcon = ({ className, size = '1.5rem' }: { className?: string; size?: string }) => (
    <svg
        width={size}
        height={size}
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        focusable='false'
        fill='currentColor'
    >
        <path d='M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z'></path>
    </svg>
);

export { BellIcon, SearchIcon, BookmarkIcon };
