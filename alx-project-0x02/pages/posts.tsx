import Head from 'next/head';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
            const data = await res.json();
            const formattedPosts = data.map((post: any) => ({
                title: post.title,
                content: post.body,
                userId: post.userId,
            }));
            setPosts(formattedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Head>
                <title>Posts Page</title>
            </Head>
            <Header />
            <main className="bg-gray-100 min-h-screen p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts 📝</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            title={post.title}
                            content={post.content}
                            userId={post.userId}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
