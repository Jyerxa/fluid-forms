import React from 'react';

export interface NavProps {
    userName: string;
    onLogout: () => void;
}

const Nav = ({userName, onLogout}: NavProps) => {

    return (
        <header className="bg-dark text-white px-6 py-4 shadow-md border-b border-neon-pink  ">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* Replace with a cool icon */}
                    <span className="text-neon-green text-2xl font-bold mr-4">&#x1f680;</span>
                    <h1 className="text-2xl font-semibold">Fluid Forms</h1>
                </div>
                {userName && (
                    <>
                        <div className="flex items-center">
                            {/*<Link to="/dashboard" className="text-white mx-2 hover:text-neon-purple">Dashboard</Link>*/}
                            {/*<Link to="/form-builder" className="text-white mx-2 hover:text-neon-purple">Form Builder</Link>*/}
                            {/*<Link to="/form-editor" className="text-white mx-2 hover:text-neon-purple">Form Editor</Link>*/}
                        </div>
                        <div className='flex flex-row'>
                            <p className="hidden md:block">Welcome, {userName}!</p>
                            <button
                                className='p-1 text-neon-pink ml-2 text-xs rounded-md border-neon-pink border-2
                                            hover:border-neon-green hover:text-neon-green transition-colors
                                             duration-200 ease-in '
                                onClick={onLogout}
                                type='button'>
                                Logout </button>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Nav;
