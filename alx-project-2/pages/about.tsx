import Head from 'next/head'
import Header from '../components/layout/Header'

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <main className="flex items-center justify-center h-screen bg-yellow-100">
                <h1 className="text-4xl font-bold">Learn More About Us 📘</h1>
            </main>
        </>
    )
}
