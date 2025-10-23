import React from 'react';

export function Card({ children, className = '' }) {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 transition-all duration-300 hover:shadow-lg ${className}`}>
        {children}
        </div>
    );
}

export function CardHeader({ children }) {
    return <div className="mb-2 font-bold text-lg text-gray-800 dark:text-gray-100">{children}</div>;
}

export function CardContent({ children }) {
    return <div className="text-gray-700 dark:text-gray-300">{children}</div>;
}

export function CardTitle({ children }) {
    return <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">{children}</h2>;
}

export default Card;
