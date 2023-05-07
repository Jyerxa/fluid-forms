import React from 'react';
import Input from '../../../../components/form/Input';
import {CiCirclePlus} from 'react-icons/ci'

export interface AddFieldFormProps {
    onFieldAdded: (fieldName: string) => void;
}

const AddFieldForm = ({onFieldAdded}: AddFieldFormProps) => {
    const [value, setValue] = React.useState<string>('');

    const handleFieldAddedClick = () => {
        onFieldAdded(value);
        setValue('');
    };

    return (
        <div className='w-max mb-6'>
            <div className='flex flex-row'>
                <Input type='text'
                       label='New Field'
                       name='fieldName'
                       value={value}
                       onChange={(event) => setValue(event.target.value)}/>
                <button
                    type='button'
                    onClick={handleFieldAddedClick}
                    className='ml-6 pt-4'>
                    <CiCirclePlus className='text-4xl text-neon-pink '/>
                </button>
            </div>
        </div>
    );
};

export default AddFieldForm;
