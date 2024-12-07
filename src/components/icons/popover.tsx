const MeatballsMenuIcon = ({ className, size = '2.25rem' }: { className?: string; size?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        role='img'
        fill='currentColor'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
        ></path>
    </svg>
);

export { MeatballsMenuIcon };
