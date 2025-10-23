export async function fetchPosts() {
    try {
        const res = await fetch('https://dummyjson.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        return await res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
