import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'
import { useAuth } from '../store/AuthContext'

const ProductDetails: React.FC = () => {
  const { showModal, setShowModal } = useAuth()

  const getLocalStorage = JSON.parse(localStorage.getItem('detalhes') || [])

  const handleClose = () => setShowModal(false)
  return (
    <Modal show={showModal} onHide={handleClose}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          width={250}
          height={250}
          src={getLocalStorage.image}
          alt={getLocalStorage.name}
        />
        <div>
          <Modal.Header>
            <div>
              <span>Vinhos</span> <span>{getLocalStorage.country}</span>{' '}
              <span>{getLocalStorage.region}</span>
              <Modal.Title>
                <p>{getLocalStorage.name}</p>
              </Modal.Title>
              <img
                src={getLocalStorage.flag}
                alt={getLocalStorage.country}
                width={30}
                height={30}
              />
              <span>{getLocalStorage.country}</span>
              <span>{getLocalStorage.type}</span>
              <span>{getLocalStorage.classification}</span>
              <span>{getLocalStorage.volume}</span>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={getLocalStorage.rating}
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>R$ {getLocalStorage.priceMember}</p>
            <p>NÃO SOCIO R$ {getLocalStorage.priceNonMember}/UN</p>
            <h4>Comentário do Sommelier</h4>
            <p>{getLocalStorage.sommelierComment}</p>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button onClick={() => {}}>-</Button>
              <Button>1</Button>
              <Button onClick={() => {}}>+</Button>
              <Button variant="primary" onClick={() => {}}>
                Adicionar ao carrinho
              </Button>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  )
}

export default ProductDetails
