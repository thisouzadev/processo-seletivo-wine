import React, { useState } from 'react'
import { wineFetch } from '../hooks/wineFetch';
import styled from "styled-components";

interface WineListProps {
  items: [
    id: number,
    image: string,
    name: string,
    price: number,
    priceMember: number,
    discount: number,
  ]
}
const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const WineList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const { data } = wineFetch<WineListProps[]>(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`)

  const increment = () => {
    if (page !== data.totalPages) {

      setPage((prevpage) => {
        const currentpage = prevpage + 1;
        return currentpage;
      });
    }
  };

  const decrement = () => {
    if (page !== 1) {
      setPage((prevpage) => {
        const currentpage = prevpage - 1;
        return currentpage;
      });
    }
  };
  const inputValue = (event) => {
    const { value } = event.target;
    setPage(+value);
  };

  if(!data) {
    return <div>Loading...</div>
  }

  const handleChange = (string) => {
    setSearch(string);
  };

  const searchTask = () => data.items.filter((wine) => (
    wine.name.toLowerCase().includes(search.toLowerCase())
  ));
  return (
    <>
    <main>
        <div>
          <input
              onChange={ (event) => handleChange(event.target.value) }
              type="text"
              name="searchTask" />
      {searchTask().map(wine => (
      <CardContainer key={wine.id}>
        <img src={wine.image} alt={wine.name} />
        <Separator />
        <div>
        <h1>{wine.name}</h1>
        <p>R${wine.price}</p> <p>{wine.discount}% off</p>
        <Separator />
        <p>SÓCIO WINE R${wine.priceMember}</p>
        <Separator />
        <p>NÃO SÓCIO R${wine.price}</p>
        <button>Adicionar</button>
        </div>
      </CardContainer>
      ))}
        </div>
    </main>
      <Footer>
            <button
              type="button"
              onClick={ () => decrement() }
            >
              anterior
            </button>
            <input
              type="text"
              className="form-control"
              onChange={ (e) => inputValue(e) }
              value={ page }
            />
            <button
              type="button"
              onClick={ () => increment() }
            >
              próximo
            </button>
      </Footer>
    </>
  )
}

export default WineList
