/* eslint-disable require-jsdoc */
import React from 'react'
import { useAuth } from '../store/AuthContext'
import { MenuSideBar } from '../styles/pages/Menu'

const Menu: React.FC = () => {
  const { menuOpen } = useAuth()
  return (
    <MenuSideBar className={'menu ' + (menuOpen && 'active')}></MenuSideBar>
  )
}

export default Menu
