import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/header'

const Main = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Main
