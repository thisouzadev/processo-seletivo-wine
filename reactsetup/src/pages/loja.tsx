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
  const { items, setItems, pageIndex, setPageIndex, limit, setLimit } =
    useAuth()
  const [cnt, setCnt] = useState(10)
  const fetcher = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(
    `https://wine-back-test.herokuapp.com/products?page=${pageIndex}&limit=${limit}`,
    fetcher
  )
  console.log(data)

  useEffect(() => {
    if (data) {
      setItems(data.items)
    }
  }, [data, setItems])
  const array = Array.from(Array(data?.totalPages).keys(), (x) => x + 1)

  const incrementPage = (e) => {
    e.preventDefault()
    setPageIndex(pageIndex + 1)
  }
  const decrementPage = (e) => {
    e.preventDefault()
    setPageIndex(pageIndex - 1)
  }
  const handleLimit = (e) => {
    e.preventDefault()
    for (let i = 9; i < cnt; i++) {
      setLimit(e.target.value)
    }
  }

  for (let i = 9; i < cnt; i += 9) {
    setLimit(i)
  }

  if (error) return <h1>Error</h1>
  if (!data) {
    return <Container>Loading...</Container>
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <Form>
            <h1>Refine sua busca</h1>
            <p>Por preço</p>
            <Form.Group>
              <Form.Check name="group1" label="Até R$40" type="radio" />
            </Form.Group>
            <Form.Group>
              <Form.Check name="group1" label="R$40 A R$60" type="radio" />
            </Form.Group>
            <Form.Group>
              <Form.Check name="group1" label="R$100 A R$200" type="radio" />
            </Form.Group>
            <Form.Group>
              <Form.Check name="group1" label="R$200 A R$500" type="radio" />
            </Form.Group>
            <Form.Group>
              <Form.Check name="group1" label="Acime de R$500" type="radio" />
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
                  <Card style={{ width: '18rem', marginBottom: '20px' }}>
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
              style={{ display: pageIndex === item && 'none' }}
              variant={pageIndex === item ? 'primary' : 'outline-primary'}
              onClick={(e) => setPageIndex(item)}
            >
              {item}
            </Button>
          )
        })}
        <Button
          style={{ display: pageIndex === data.totalPages && 'none' }}
          onClick={(e) => incrementPage(e)}
        >
          Próximo
        </Button>
        <Button
          style={{ display: pageIndex === data.totalPages && 'none' }}
          onClick={() => setCnt(cnt + 10)}
        >
          Mostrar mais
        </Button>
      </ContainerCenter>
    </>
  )
}

export default Store
