export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Welcome to My React App</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A beautiful task management and content exploration application built with React and Tailwind CSS.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">📝 Manage Tasks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Create, complete, and organize your daily tasks with ease.
                </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">📚 Explore Posts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse and search through interesting posts from around the web.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}