import React from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div>
            <header className="flex flex-col text-center p-10">
                <h1 className="text-8xl mb-12 text-neon-purple gradient-text">Fluid Forms</h1>
                <p className="text-neon-pink self-center  max-w-lg">
                    Welcome to Fluid Forms. A primary POC of the Fluid Framework. This is a collaborative
                    forms app that allows users to define form then collaborate with colleagues in real time.
                    In addition this POC also tests ancillary technologies and patterns for potential use in real
                    time collaboration apps.
                </p>
                <div>
                    <button
                        className="bg-neon-green max-w-sm text-black p-2 rounded-md mt-4"
                        onClick={() => navigate("/dashboard")}
                        >
                        Get Started
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Home;
