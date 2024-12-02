const BellIcon = ({ className, size = '1.5rem' }: { className?: string; size?: string }) => (
    <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        role='img'
        aria-labelledby='atpnbwi9gs3oz6yon8s66o8ptdmup8wm'
        fill='currentColor'
    >
        <title id='atpnbwi9gs3oz6yon8s66o8ptdmup8wm'>Notifications</title>
        <path d='M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z'></path>
    </svg>
);

export { BellIcon };
