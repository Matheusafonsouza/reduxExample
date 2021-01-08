import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../../store/modules/stock/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';
import { IState } from '../../store';

interface StockCatalogProps {
  search: string;
}

const StockCatalog: React.FC<StockCatalogProps> = ({ search }) => {
  const catalog = useSelector<IState, IProduct[]>(state => state.stock.products);

  const fixedCatalog = useMemo(() => {
    const fixedProducts = catalog.filter((product: IProduct) => product.title.includes(search));
    return fixedProducts;
  }, [catalog, search]);

  return (
    <Container>
      {fixedCatalog.map((product: IProduct) => (
        <CatalogItem
          key={product.title}
          product={product}
          isCart={false}
        />
      ))}
    </Container>
  );
}

export default StockCatalog;