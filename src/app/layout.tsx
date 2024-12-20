import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';
import { AppThemeProvider } from '~/components/theme';
import { SidebarProvider } from '~/components/ui/sidebar';

export const metadata: Metadata = {
    title: 'Create T3 App',
    description: 'Generated by create-t3-app',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <html lang='en' className={`${GeistSans.variable}`}>
        <body>
            <TRPCReactProvider>
                <AppThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
                    <SidebarProvider>{children}</SidebarProvider>
                </AppThemeProvider>
            </TRPCReactProvider>
        </body>
    </html>
);

export default RootLayout;
