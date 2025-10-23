import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const POSTS_PER_PAGE = 10;

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    const filteredPosts = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedPosts = filteredPosts.slice(
        (page - 1) * POSTS_PER_PAGE,
        page * POSTS_PER_PAGE
    );

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    if (loading) return <p className="text-center py-6 text-gray-500 animate-fade-in">Loading posts...</p>;
    if (error) return <p className="text-center text-red-500 py-6 animate-fade-in">{error}</p>;

    return (
        <div className="p-6 animate-fade-in">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Posts</h1>

                <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 w-full sm:w-64"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map(post => (
                    <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">{post.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{post.body}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2 items-center flex-wrap">
                <Button
                    variant="secondary"
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </Button>
                <span className="text-gray-700 dark:text-gray-300 px-4">
                    Page {page} of {totalPages}
                </span>
                <Button
                    variant="secondary"
                    onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}