import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center py-4 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
        </footer>
    );
}
