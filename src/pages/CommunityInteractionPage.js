import React, { useState } from 'react';
import Navigation from '../components/Navigation'; // Assuming you have this component

const CommunityInteractionPage = () => {
    const [posts, setPosts] = useState([
        { id: 1, author: 'Dr. John Doe', content: 'Regular exercise and a balanced diet are key for good health.', date: '2024-03-20' },
        { id: 2, author: 'Patient123', content: 'Struggling with managing my diabetes. Any advice?', date: '2024-03-19' }
        // Add more posts as needed
    ]);

    const [newPostContent, setNewPostContent] = useState('');

    const handleNewPostChange = (event) => {
        setNewPostContent(event.target.value);
    };

    const postNewPost = () => {
        if (newPostContent.trim()) {
            const newPost = {
                id: posts.length + 1,
                author: 'New User', // Replace with dynamic user data
                content: newPostContent,
                date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD
            };
            setPosts([...posts, newPost]);
            setNewPostContent('');
        }
    };

    return (
        <div>
            <Navigation />
            <div style={{ padding: '20px' }}>
                <textarea
                    placeholder="Write your post here..."
                    style={{ width: '100%', minHeight: '100px', margin: '10px 0' }}
                    value={newPostContent}
                    onChange={handleNewPostChange}
                />
                <button onClick={postNewPost}>Post</button>
                <div style={{ marginTop: '20px' }}>
                    <h2>Health Forum</h2>
                    {posts.map(post => (
                        <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                            <p>{post.author} (Posted on {post.date})</p>
                            <p>{post.content}</p>
                            <button>Comment</button>
                            <button>Like</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommunityInteractionPage;
