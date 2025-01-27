import { useId } from 'react';

import { Button, type ButtonProps } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const UploadImageButton = ({ className, children, variant = 'type0', onChange, ...props }: ButtonProps) => {
    const uniqueId = useId();

    return (
        <Button
            className={className}
            variant={variant}
            onClick={() => document.getElementById(uniqueId)?.click()}
            {...props}
        >
            <Input
                id={uniqueId}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            />
            {children}
        </Button>
    );
};

export default UploadImageButton;
