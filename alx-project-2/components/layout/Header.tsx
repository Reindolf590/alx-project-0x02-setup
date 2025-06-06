import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 text-center flex justify-between">
      <h2 className="text-xl">ALX Project 2 Header</h2>
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </header>
  )
}

export default Header
