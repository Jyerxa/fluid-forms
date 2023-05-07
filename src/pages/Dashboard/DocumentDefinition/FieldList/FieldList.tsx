import React from 'react';
import {CiTrash} from 'react-icons/ci';

export interface FieldListProps {
    fields: string[];
    onRemoveField: (fieldName: string) => void;
}

const FieldList = ({fields, onRemoveField}: FieldListProps) => {
    return (
        <div className='w-max'>
            {fields.map((field, index) =>
                <div className='flex flex-row mb-6' key={index}>
                    <div className='w-56'> {field}</div>
                    <div>
                        <button onClick={() => onRemoveField(field)}>
                            <CiTrash className='text-neon-pink text-lg'/>
                        </button>
                    </div> </div>
            )}
        </div>
    );
};

export default FieldList;
