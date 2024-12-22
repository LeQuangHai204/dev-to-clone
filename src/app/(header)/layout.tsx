import Header from './header';

const HeaderLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <div className='w-full'>
        <Header />
        {children}
    </div>
);

export default HeaderLayout;
