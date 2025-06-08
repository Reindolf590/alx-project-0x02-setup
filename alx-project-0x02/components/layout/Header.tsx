import Link from "next/link"
import { useRouter } from "next/router"

const Header: React.FC = () => {
  const router = useRouter();

  const linkClass = (path: string) =>
    `hover: underline ${router.pathname === path ? 'underline font-semibold' : ''

    }`

  return (
    <header className="w-full bg-blue-600 text-white p-4 text-center flex justify-between">
      <h2 className="text-xl">ALX Project 2 Header</h2>
      <nav className="flex space-x-6">
        <Link href="/home" className={linkClass('/home')}>Home</Link>
        <Link href="/about" className={linkClass('/about')}>About</Link>
        <Link href="/posts" className={linkClass('/posts')}>Posts</Link>
      </nav>
    </header>

  )
}

export default Header
