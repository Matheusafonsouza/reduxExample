import styled, { css } from 'styled-components';

interface ContainerProps {
  isCart: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px;

  ${props => props.isCart && css`
    display: flex;
    flex-direction: column;
  `}
`;