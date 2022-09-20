import Link from 'next/link'
import React from 'react'
import WineSVG from '../assets/wine.svg'
import BuscaLupa from '../assets/BuscaLupa.svg'
import Perfil from '../assets/perfil.svg'
import Image from 'next/image'
import Cart from '../../public/bitmap.png'

import {
  DivCountStyles,
  SectionCartStyles,
  Topbar
} from '../styles/pages/Header'
import { useAuth } from '../store/AuthContext'
import { Form, InputGroup } from 'react-bootstrap'

const { src, width, height, blur }: any = Cart
const Header: React.FC = () => {
  const {
    menuOpen,
    setMenuOpen,
    setItems,
    itemsFilter,
    setTotalPages,
    items,
    setLimit
  } = useAuth()
  const search = (e: any) => {
    const { value } = e.target
    if (value === '') {
      setTotalPages(7)
      setLimit(items.length)
    }
    if (value.length > 0) {
      const filtered = itemsFilter.filter((item: any) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
      setTotalPages(1)
      setItems(filtered)
      setLimit(items.length)
    }
  }

  return (
    <Topbar>
      <div className={'topbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            <WineSVG className="logo" />
            <nav>
              <Link href={'./clube'}>
                <button>Clube</button>
              </Link>
              <Link href={'./loja'}>
                <button>Loja</button>
              </Link>
              <Link href={'./produtores'}>
                <button>Produtores</button>
              </Link>
              <Link href={'./ofertas'}>
                <button>Ofertas</button>
              </Link>
              <Link href={'./eventos'}>
                <button>Eventos</button>
              </Link>
            </nav>
          </div>
          <div className="right">
            <div>
              <input
                placeholder="search"
                type="text"
                onChange={(e) => search(e)}
              />

              <BuscaLupa />
            </div>
            <Perfil />
            <div className="sideBar">
              <SectionCartStyles>
                <Image
                  onClick={() => setMenuOpen(!menuOpen)}
                  src={src}
                  width={width}
                  height={height}
                  placeholder={blur}
                />
                <DivCountStyles>1</DivCountStyles>
              </SectionCartStyles>
            </div>
          </div>
        </div>
      </div>
    </Topbar>
  )
}

export default Header
