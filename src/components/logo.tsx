import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
    <Link href='/'>
        <Image height={40} width={50} src='/logo.png' alt='DEV Community' />
    </Link>
);

export default Logo;
