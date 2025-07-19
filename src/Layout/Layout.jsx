import React from 'react'
import Header from './../components/Header/Header';
import { Outlet } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function Layout() {
  const {toggleTheme} = useTheme()
  return (
    <div>
      <div className='cursor-pointer absolute rounded-3xl bg-dark w-min p-2 text-light rounded-circle m-2' onClick={toggleTheme}>toggle</div>
      {/* <Header/> */}
      <Outlet />
    </div>
  )
}
