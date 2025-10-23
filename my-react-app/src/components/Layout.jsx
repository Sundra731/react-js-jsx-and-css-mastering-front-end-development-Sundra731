import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
            {children}
        </main>
        <Footer />
        </div>
    );
}