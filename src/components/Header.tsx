import React from 'react'
import Nav from './Nav'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='px-3 md:px-28 flex justify-between items-center h-[60px]'>
      <Link href={"/"}>Tools</Link>
      <Nav />
    </header>
  )
}
