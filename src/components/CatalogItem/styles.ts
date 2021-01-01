import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 200px;
  background: #F8AF00;

  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemButton = styled.button`
  height: 20%;
  padding: 10px;
  border: 0;
  background: #5F463A;
  color: #fff;

  border-radius: 3px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;