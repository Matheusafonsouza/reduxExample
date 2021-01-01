import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: #F8AF00;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80%;
    margin-left: 30px;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;

  margin-right: 30px;
  height: 100%;
`;

export const CartButton = styled(Link)`
  height: 60%;
  padding: 10px;
  border: 0;
  background: #5F463A;
  color: #fff;
  text-decoration: none;

  border-radius: 5px;
  margin-right: 10px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const HeaderButton = styled.button`
  height: 60%;
  padding: 10px;
  border: 0;
  background: #5F463A;
  color: #fff;

  border-radius: 5px;
  margin-right: 10px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;