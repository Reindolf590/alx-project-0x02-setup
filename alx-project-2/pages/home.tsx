import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <main className="flex items-center justify-center h-screen bg-green-100">
                <h1 className="text-4xl font-bold">Welcome to the Home Page 🏡</h1>
            </main>
        </>
    )
}
