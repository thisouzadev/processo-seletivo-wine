/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react'

import { useAuth } from '../store/AuthContext'
import { MenuSideBar } from '../styles/pages/Menu'

const Menu: React.FC = () => {
  const { menuOpen, showModal } = useAuth()
  const [menu, setMenu] = useState([])

  useEffect(() => {
    setMenu(JSON.parse(localStorage.getItem('cart') || []))
  }, [menuOpen, showModal])

  const removeItemToLocalStorage = (itemId: number) => {
    const newCart = menu.filter((item: any) => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(newCart))
    setMenu(newCart)
  }
  if (menu.length === 0) {
    return (
      <MenuSideBar className={'menu ' + (menuOpen && 'active')}>
        <p>compre</p>
      </MenuSideBar>
    )
  }
  return (
    <MenuSideBar className={'menu ' + (menuOpen && 'active')}>
      <div>
        <h1>Seus Vinhos</h1>
        {menu.map((item: any) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: '15px'
            }}
          >
            <img width={30} src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div onClick={() => removeItemToLocalStorage(item.id)}>x</div>
              <div style={{ display: 'flex' }}>
                <div>-</div>
                <div>{item.quantity}</div>
                <div>+</div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <div>
            <span>Subtotal</span>
            <span>R$ --</span>
          </div>

          <div>
            <span>Total</span>
            <span>R$ --</span>
          </div>
          <div>Finalizar a compra</div>
        </div>
      </div>
    </MenuSideBar>
  )
}

export default Menu
