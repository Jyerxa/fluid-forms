import React, {useEffect} from 'react';
import './App.css';
import {Outlet, useNavigate} from 'react-router-dom';
import Nav from './layout/Nav';
import useLocalStorage from './hooks/useLocalStorage';
import {useUserStore} from './store/useUserStore';

const App = () => {
    const navigate = useNavigate();
    const userNameAppState = useUserStore(state => state.userName);
    const setUserNameAppState = useUserStore(state => state.setUserName);
    // const [storedValue, setValue] = useLocalStorage('userName', '');

    useEffect(() => {
        // If the userName is not set in the app state or local storage, navigate to the login page
        // if(!userNameAppState && !storedValue) {
        //     navigate('/login');
        // }

        // If the userName is set in local storage but not in the app state,
        // set the app state to the stored value.
        // if(!userNameAppState && storedValue) {
        //     setUserNameAppState(storedValue);
        // }

    }, [navigate, userNameAppState, setUserNameAppState]);

    const handleLogout = () => {
        // setValue(''); // Clear the userName in local storage
        setUserNameAppState(''); // Clear the userName in the app state

        // navigate('/login');
    }

    return (
        <div className="bg-dark min-h-screen text-white">
            <Nav userName={userNameAppState} onLogout={handleLogout} />
            <Outlet />
        </div>
    );
};

export default App;
