import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/dashboard', element: <Dashboard/>},
            {path: '/login', element: <LoginPage/>},

        ]}
])
