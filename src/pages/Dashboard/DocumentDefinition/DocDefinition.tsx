import React, {useEffect, useState} from 'react';
import Title from '../../../components/Title';
import AddFieldForm from './AddFieldForm/AddFieldForm';
import FieldList from './FieldList/FieldList';
import {SharedMap} from 'fluid-framework';

export interface DocDefinitionProps {
    docDef : SharedMap
}
const DocDefinition = ({docDef}:DocDefinitionProps) => {
    const [fields, setFields] =  useState<string[]>([]);

    useEffect(() =>{
        if(docDef) {
            const updateLocalFields = () => {
             const fields: string[] | undefined = docDef.get('fields');
             if(fields) {
                    setFields(fields);
              }
            };

            updateLocalFields();

            docDef.on('valueChanged', updateLocalFields);

            return () => {
                docDef.off('valueChanged', updateLocalFields);
            }
        }
    }, [docDef]);

    const handleAddField = (newField: string) => {
        setFields( (prevFields) => {
           const newFields = [...prevFields, newField];
              docDef.set('fields', newFields);
                return newFields;
        });
    };

    const handleRemoveField = (fieldName: string) => {
        setFields( (prevFields) => {
            const newFields = prevFields.filter((field) => field !== fieldName);
            docDef.set('fields', newFields);
            return newFields;
        });
    }

    return (
        <div>
            <Title title='Document Definition'/>
            <AddFieldForm onFieldAdded={handleAddField}/>
            <FieldList onRemoveField={handleRemoveField} fields={fields}/>
        </div>
    );
};

export default DocDefinition;
