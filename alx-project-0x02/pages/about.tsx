import Head from 'next/head'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

export default function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
        <Header/>
            <main className="flex items-center justify-center h-screen bg-yellow-100">
                <h1 className="text-4xl font-bold">Learn More About Us 📘</h1>
                <div className="flex flex-col gap-4">
                    <Button label="Small Button" size="small" shape="rounded-sm" />
                    <Button label="Medium Button" size="medium" shape="rounded-md" />
                    <Button label="Large Button" size="large" shape="rounded-full" />
                </div>
            </main>
        </>
    )
}
