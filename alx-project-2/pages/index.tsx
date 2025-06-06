import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 2</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to ALX Project 2 🎉</h1>
      </main>
    </>
  )
}
