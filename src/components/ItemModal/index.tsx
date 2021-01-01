import React, { useState } from 'react';

import { Container, Modal, ItemButton } from './styles';

interface ItemModalProps {
  open: boolean;
  setAddItemOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemModal: React.FC<ItemModalProps> = ({ open, setAddItemOpen }) => {
  const [productName, setProductName] = useState('');

  return (
    <>
      {open ? <Container>
        <Modal>
          <div>
            <strong>Adicionar produto</strong>
            <ItemButton onClick={() => setAddItemOpen(false)}>Fechar</ItemButton>
          </div>

          <input
            name="product"
            placeholder="Nome do produto"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />

          <ItemButton>Adicionar</ItemButton>
        </Modal>
      </Container> : null}
    </>
  );
}

export default ItemModal;