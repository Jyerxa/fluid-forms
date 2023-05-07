import React, {useState} from 'react';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import {useNavigate} from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import {useUserStore} from '../store/useUserStore';

const LoginPage = () => {
    const navigate = useNavigate();
    const [nameValue, setNameValue] = useState('');

    // Set the userName in the app store
    const setUserName = useUserStore(state => state.setUserName);

    // Set the userName in local storage
    const [storedValue, setValue]  = useLocalStorage('userName', '');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValue(nameValue);
        setUserName(nameValue);
        navigate('/dashboard');
    }

    return (
        <div className='flex flex-col items-center mt-4'>
            <div className='w-1/2'>
                <div className='w-full text-center mb-8 p-4'>
                    <div className="text-6xl text-neon-purple gradient-text leading-relaxed">Login</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input type='text'
                           name='userName'
                           label='User Name'
                           placeholder='Enter a user name'
                           value={nameValue}
                           onChange={(event) => setNameValue(event.target.value)}
                           className='mb-4'/>
                    <Button
                        type='submit'
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
