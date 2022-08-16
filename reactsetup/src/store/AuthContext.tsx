import { createContext, useContext, ReactNode, useState } from 'react'

type authContextType = {
  menuOpen: boolean
  setMenuOpen: (menuOpen: boolean) => void
  setItems: (items: any) => void
  setPageIndex(pageIndex: number): void
  setLimit(limit: number): void
  limit: number
  items: [
    {
      avaliations: number
      classification: string
      country: string
      discount: number
      flag: string
      id: number
      image: string
      name: string
      price: number
      priceMember: number
      priceNonMember: number
      rating: number
      region: string
      size: string
      sommelierComment: string
      type: string
    }
  ]
  itemsPerPage: number
  page: number
  totalItems: number
  pageIndex: number
}

const authContextDefaultValues: authContextType = {
  menuOpen: false,
  setMenuOpen: () => {},
  setItems: () => {},
  setPageIndex: () => {},
  setLimit: () => {},
  limit: 9,
  items: [
    {
      avaliations: 0,
      classification: '',
      country: '',
      discount: 0,
      flag: '',
      id: 0,
      image: '',
      name: '',
      price: 0,
      priceMember: 0,
      priceNonMember: 0,
      rating: 0,
      region: '',
      size: '',
      sommelierComment: '',
      type: ''
    }
  ],
  itemsPerPage: 0,
  page: 0,
  totalItems: 0,
  pageIndex: 1
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [items, setItems] = useState<authContextType['items']>([
    {
      avaliations: 0,
      classification: '',
      country: '',
      discount: 0,
      flag: '',
      id: 0,
      image: '',
      name: '',
      price: 0,
      priceMember: 0,
      priceNonMember: 0,
      rating: 0,
      region: '',
      size: '',
      sommelierComment: '',
      type: ''
    }
  ])
  const [itemsPerPage, setItemsPerPage] =
    useState<authContextType['itemsPerPage']>(0)
  const [page, setPage] = useState<authContextType['page']>(0)
  const [totalItems, setTotalItems] = useState<authContextType['totalItems']>(0)
  const [pageIndex, setPageIndex] = useState<authContextType['pageIndex']>(1)
  const [limit, setLimit] = useState<authContextType['limit']>(9)
  const value = {
    menuOpen,
    setMenuOpen,
    items,
    setItems,
    itemsPerPage,
    setItemsPerPage,
    page,
    setPage,
    totalItems,
    setTotalItems,
    pageIndex,
    setPageIndex,
    limit,
    setLimit
  }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
