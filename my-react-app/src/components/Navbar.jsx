import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="bg-gray-100 dark:bg-gray-900 shadow transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    React App
                </h1>

                <div className="flex space-x-4 items-center">
                    <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">
                        Home
                    </Link>
                    <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">
                        Tasks
                    </Link>
                    <Link to="/posts" className="text-gray-700 dark:text-gray-200 hover:underline">
                        Posts
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        {isDark ? 'Light' : 'Dark'} Mode
                    </button>
                </div>
            </div>
        </nav>
    );
}
