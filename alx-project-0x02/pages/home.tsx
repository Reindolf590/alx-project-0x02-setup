import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import React, { useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState([
    {
      title: 'Welcome to our Platform',
      content: 'Explore our page',
    },
    {
      title: 'Get Started',
      content: 'We provide top-notch services tailored to your needs',
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddCard = (data: { title: string; content: string }) => {
    setCards([...cards, data]);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <div className="p-8">
        <div className="mb-6 text-right">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            + Add New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </>
  );
};

export default Home;
