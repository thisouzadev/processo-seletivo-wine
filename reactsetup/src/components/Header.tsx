import Link from 'next/link'
import React from 'react'
import WineSVG from '../assets/wine.svg'
import BuscaLupa from '../assets/BuscaLupa.svg'
import Perfil from '../assets/perfil.svg'
import Image from 'next/image'
import Cart from '../../public/bitmap.png'

import { Topbar } from '../styles/pages/Header'
import { useAuth } from '../store/AuthContext'

const { src, width, height, blur }: any = Cart
const Header: React.FC = () => {
  const { menuOpen, setMenuOpen } = useAuth()

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
              <BuscaLupa />
            </div>
            <Perfil />
            <div className="sideBar">
              <Image
                onClick={() => setMenuOpen(!menuOpen)}
                src={src}
                width={width}
                height={height}
                placeholder={blur}
              />
            </div>
          </div>
        </div>
      </div>
    </Topbar>
  )
}

export default Header
