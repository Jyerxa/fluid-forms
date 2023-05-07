// src/components/form/Button.js
import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, className, type }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-neon-pink rounded-md text-black py-2 px-6 hover:bg-neon-green transition-colors duration-200 ease-in ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

