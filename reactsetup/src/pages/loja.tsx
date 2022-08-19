import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useAuth } from '../store/AuthContext'
import axios from 'axios'

import {
  Container,
  ContainerCenter,
  ContainerLeft,
  ContainerRight
} from '../styles/pages/Container'
import useSWR from 'swr'
import { Button, Card, Form } from 'react-bootstrap'

const Store: React.FC = () => {
  const {
    items,
    setItems,
    pageIndex,
    setPageIndex,
    limit,
    setLimit,
    setItemsFilter,
    totalPages,
    setTotalPages
  } = useAuth()
  const [cnt, setCnt] = useState(10)

  const fetcher = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(
    `https://wine-back-test.herokuapp.com/products?page=${pageIndex}&limit=${limit}`,
    fetcher
  )
  const { data: data2 } = useSWR(
    `https://wine-back-test.herokuapp.com/products`,
    fetcher
  )

  useEffect(() => {
    if (data && data2) {
      setItems(data.items)
      setItemsFilter(data2.items)
      setTotalPages(data.totalPages)
    }
  }, [data, data2, setItems, setItemsFilter, pageIndex, setTotalPages])
  const array = Array.from(Array(totalPages).keys(), (x) => x + 1)

  const incrementPage = (e) => {
    e.preventDefault()
    setPageIndex(pageIndex + 1)
  }
  const decrementPage = (e) => {
    e.preventDefault()
    setPageIndex(pageIndex - 1)
  }
  const selectPage = (item, e) => {
    e.preventDefault()
    setPageIndex(item)
  }

  for (let i = 9; i < cnt; i += 9) {
    setLimit(i)
  }

  if (error) return <h1>Error</h1>
  if (!data) {
    return <Container>Loading...</Container>
  }
  const PriceFilter = (e) => {
    switch (e.target.value) {
      case 'Até R$40':
        e.preventDefault()
        setItems(
          data2.items.filter((item: any) => {
            return item.price <= 40
          })
        )
        setPageIndex(1)
        setLimit(items.length)
        break
      case 'R$40 A R$60':
        e.preventDefault()
        setItems(
          data2.items.filter((item: any) => {
            return item.price > 40 && item.price <= 60
          })
        )
        setPageIndex(1)
        break
      case 'R$100 A R$200':
        e.preventDefault()
        setItems(
          data2.items.filter((item: any) => {
            return item.price > 100 && item.price <= 200
          })
        )
        setPageIndex(1)
        setLimit(items.length)
        break
      case 'R$200 A R$500':
        e.preventDefault()
        setItems(
          data2.items.filter((item) => item.price > 200 && item.price <= 500)
        )
        setPageIndex(1)
        setLimit(items.length)
        break
      case 'Acima de R$500':
        e.preventDefault()
        setItems(data2.items.filter((item) => item.price > 500))
        setPageIndex(1)
        setLimit(items.length)
        break
      default:
        setItems(data.items)
        setPageIndex(1)
        setLimit(9)
        break
    }
  }
  console.log(items, 'items')
  console.log(data, 'data')

  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <Form>
            <h1>Refine sua busca</h1>
            <p>Por preço</p>
            <Form.Group>
              <Form.Check
                onChange={(event) => PriceFilter(event)}
                value={'Até R$40'}
                name="group1"
                label="Até R$40"
                type="radio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                onChange={(event) => PriceFilter(event)}
                value={'R$40 A R$60'}
                name="group1"
                label="R$40 A R$60"
                type="radio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                onChange={(event) => PriceFilter(event)}
                value={'R$100 A R$200'}
                name="group1"
                label="R$100 A R$200"
                type="radio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                onChange={(event) => PriceFilter(event)}
                value={'R$200 A R$500'}
                name="group1"
                label="R$200 A R$500"
                type="radio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                onChange={(event) => PriceFilter(event)}
                value={'Acima de R$500'}
                name="group1"
                label="Acima de R$500"
                type="radio"
              />
            </Form.Group>
          </Form>
        </ContainerLeft>

        <ContainerRight>
          <div>{items.length + ' produtos encontrados'}</div>
          <ContainerCenter>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card style={{ width: '14rem', marginBottom: '20px' }}>
                    <Card.Img src={item.image} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        <s style={{ color: 'grey' }}>
                          R$ {item.price.toString().replace('.', ',')}
                        </s>{' '}
                        <span
                          style={{ color: 'white', backgroundColor: 'orange' }}
                        >{` ${item.discount}% OFF`}</span>
                      </Card.Text>
                      <Card.Text>
                        SÓCIO WINE{' '}
                        <span style={{ color: 'violet' }}>
                          R$ {item.priceMember.toString().replace('.', ',')}
                        </span>
                      </Card.Text>
                      <Card.Text style={{ color: 'grey' }}>
                        <span>NÃO SÓCIO </span>
                        R$ {item.priceNonMember.toString().replace('.', ',')}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Button
                    variant="outline-success"
                    style={{ marginBottom: '30px' }}
                  >
                    ADICIONAR
                  </Button>
                </div>
              )
            })}
          </ContainerCenter>
        </ContainerRight>
      </Container>
      <ContainerCenter>
        <Button
          style={{ display: pageIndex === 1 && 'none' }}
          onClick={(e) => decrementPage(e)}
        >
          Anterior
        </Button>
        {array.map((item, index) => {
          return (
            <Button
              key={index}
              style={{ display: data?.totalPages === 1 && 'none' }}
              variant={pageIndex === item ? 'primary' : 'outline-primary'}
              onClick={(e) => selectPage(item, e)}
            >
              {item}
            </Button>
          )
        })}
        <Button
          style={{ display: pageIndex === totalPages && 'none' }}
          onClick={(e) => incrementPage(e)}
        >
          Próximo
        </Button>
        <Button
          style={{ display: pageIndex === totalPages && 'none' }}
          onClick={() => setCnt(cnt + 10)}
        >
          Mostrar mais
        </Button>
      </ContainerCenter>
    </>
  )
}

export default Store
