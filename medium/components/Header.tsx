import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-10">
        <Link href="/">
          <img className="w-44 h-10 object-contain cursor-pointer" src="Medium_logo.png" />
        </Link>
        <div className="inline-flex">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="bg-lime-400 px-4 py-1 rounded-full text-white">Follow</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
