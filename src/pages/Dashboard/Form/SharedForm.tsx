import React, {useEffect, useState} from 'react';
import Title from '../../../components/Title';
import {SharedMap} from 'fluid-framework';
import Input from '../../../components/form/Input';
import {useUserStore} from '../../../store/useUserStore';
import {CiUser} from 'react-icons/ci';

export interface SharedFormProps {
    docDef: SharedMap;
    docData: SharedMap;
    focusData: SharedMap;
}

const SharedForm = ({docDef,docData,focusData}:SharedFormProps) => {
    const userNameAppState = useUserStore(state => state.userName);

    const [fields, setFields] =  useState<string[]>([]);
    const [docvalues, setDocData] = useState<{key:string, value:string}[]>([]);
    const [focus, setFocus] = useState<{field: string, userName: string}[]>([]);


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

        }

        if(docData) {
            const updateLocalDocData = () => {
                const dataEntries: {key:string, value:string}[] | undefined = docData.get('data');
                if(dataEntries) {
                    setDocData(dataEntries);
                }
            };

            updateLocalDocData();

            docData.on('valueChanged', updateLocalDocData);
        }

        if(focusData) {
            const updateLocalFocusData = () => {
                const focusEntry: {field:string, userName:string}[] | undefined = focusData.get('focus');
                if(focusEntry) {
                    setFocus(focusEntry);
                }
            };

            updateLocalFocusData();

            focusData.on('valueChanged', updateLocalFocusData);
        }

        return () => {
            // Todo: Fix this
            // if(docDef) docDef.off('valueChanged', updateLocalFields);
            // if(docData) docData.off('valueChanged', updateLocalDocData);
        }
    },[docDef, docData]);

    const handleFieldChanged = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const value = event.target.value;
        setDocData((prevState) => {
            const newDocValues = [...prevState];
            const index = newDocValues.findIndex((entry) => entry.key === key);
            if(index === -1) {
                newDocValues.push({key, value});
            } else {
                newDocValues[index] = {key, value};
            }
            docData.set('data', newDocValues);
            return newDocValues;
        });
    };

    const handleAddFocus = (key: string) => {
        setFocus((prevState) => {
            const newFocus = {field: key, userName: userNameAppState};
            const newFocusArray = [...prevState, newFocus];
            focusData.set('focus', newFocusArray);
            return newFocusArray;
        });
    }

    const handleRemoveFocus = (key: string) => {
        setFocus((prevState) => {
            const newFocusArray = prevState.filter((entry) => entry.field !== key || entry.userName !== userNameAppState);
            focusData.set('focus', newFocusArray);
            return newFocusArray;
        });
    }

    return (
        <div>
            <Title title='Shared Form'/>
            <div className='ml-auto w-max mr-8'>
                <button
                    onClick={()=>{console.log('Fields:', fields, 'DocValues:', docvalues  )}}
                    className='p-1 text-neon-pink ml-2 text-xs rounded-md border-neon-pink border-2
                               hover:border-neon-green hover:text-neon-green transition-colors
                               duration-200 ease-in '>
                    Submit
                </button>
            </div>
            {fields.map((field, index) => {
                return(
                    <div key={index} className='flex flex-row'>
                        <div className='w-1/2' >
                            <Input type='text'
                                   name={field}
                                   label={field}
                                   className='w-1/2'
                                   value={ docvalues.find(e => e.key === field)?.value ?? '' }
                                   onChange={(e) => handleFieldChanged(e, field)}
                                   onFocus={() => handleAddFocus(field)}
                                   onBlur={() => handleRemoveFocus(field)}
                            />
                        </div>
                        <div className='flex flex-row'>
                            {focus && focus.map((e, i) => {
                                if(e.field === field) {
                                    return (
                                        <div key={i} className='ml-4 pt-10'>
                                            <CiUser className='text-xl text-neon-pink' />
                                            <span className='text-xs'>{e.userName} </span>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SharedForm;
