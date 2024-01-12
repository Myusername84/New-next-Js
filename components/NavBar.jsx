import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/news">News</Link>
    </nav>
  )
}

export default NavBar