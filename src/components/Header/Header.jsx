import React from 'react'
import Slogan from '../Slogan/Slogan'
import NavBar from '../Navbar/NavBar'

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-2 border-1">
      <Slogan/>
      <NavBar/>
    </header>
  )
}
