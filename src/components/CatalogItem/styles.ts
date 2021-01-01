import styled, { css } from 'styled-components';

interface ContainerProps {
  isCart: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 150px;
  height: 200px;
  background: #F8AF00;

  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${props => props.isCart && css`
    margin-bottom: 30px;
    width: 100%;
  `}
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