import Header from './header';

const HeaderLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <div className='flex w-full flex-col'>
        <Header />
        {children}
    </div>
);

export default HeaderLayout;
