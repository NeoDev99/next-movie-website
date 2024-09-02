import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
    const classes = clsx(
        'inline-flex items-center px-3 py-1 text-sm font-medium rounded-full',
        {
            'bg-red-500 text-white': variant === 'default',
            'border border-gray-300 text-gray-700': variant === 'outline',
        }
    );

    return <span className={classes}>{children}</span>;
};

export default Badge;
