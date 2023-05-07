// src/components/form/Input.js
import React from 'react';

export interface InputProps {
    label?: string;
    type: string;
    name: string;
    placeholder?: string;
    value: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, name, placeholder, value, className ,onChange, onFocus, onBlur }: InputProps) => {

    const classes: string = `w-full px-4 py-2 border 
    border-neon-purple rounded-md 
    text-white bg-dark focus:outline-none 
    focus:border-neon-green focus:drop-shadow-3xl
    transition-all duration-400 ease-in
    ${className}`;

    return (
        <div>
            <div className="flex flex-col mb-4">

                {label && (
                    <div>
                        <label htmlFor={name} className="block mb-2 text-xl text-white">
                            {label}
                        </label>
                    </div>
                )}
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={classes}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        </div>
    );
};

export default Input;
