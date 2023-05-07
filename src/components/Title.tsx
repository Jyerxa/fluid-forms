import React from 'react';

export interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => {
    return (
        <div className='mb-6'>
            <div className='text-3xl underline decoration-neon-purple decoration-1 underline-offset-4'>{title}</div>
        </div>
    );
};

export default Title;
