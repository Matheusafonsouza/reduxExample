import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToStock } from '../../store/modules/stock/actions';

import { Container, Modal, ItemButton } from './styles';

interface ItemModalProps {
  open: boolean;
  setAddItemOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemModal: React.FC<ItemModalProps> = ({ open, setAddItemOpen }) => {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const dispatch = useDispatch();

  const handleAddProductToStock = useCallback(() => {
    const product = {
      title: productName,
      price: Number(productValue),
      quantity: Number(productQuantity),
    }

    dispatch(addProductToStock(product));
    setAddItemOpen(false);
  }, [dispatch, productName, productQuantity, productValue]);

  return (
    <>
      {open ? <Container>
        <Modal>
          <div>
            <strong>Adicionar produto</strong>
            <ItemButton onClick={() => setAddItemOpen(false)}>Fechar</ItemButton>
          </div>

          <input
            name="productName"
            placeholder="Nome do produto"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />

          <input
            name="productValue"
            placeholder="Preço do produto"
            value={productValue}
            onChange={e => setProductValue(e.target.value)}
          />

          <input
            name="productQuantity"
            placeholder="Quantidade do produto"
            value={productQuantity}
            onChange={e => setProductQuantity(e.target.value)}
          />

          <ItemButton onClick={handleAddProductToStock}>Adicionar</ItemButton>
        </Modal>
      </Container> : null}
    </>
  );
}

export default ItemModal;