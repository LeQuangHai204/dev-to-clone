'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

export function AppThemeProvider({ children, ...props }: React.ComponentProps<typeof ThemeProvider>) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Set to true once client-side render happens
    }, []);

    // Render without theme applied initially. after mounted, apply the theme
    return mounted ? <ThemeProvider {...props}>{children}</ThemeProvider> : <>{children}</>;
}

export default AppThemeProvider;
