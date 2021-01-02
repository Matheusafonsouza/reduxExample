import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background: #523628;
`

export const CartDetail = styled.div`
  height: 100%;
  width: 30%;
  padding: 30px;
  background: #F8AF00;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartDetailHeader = styled.div`
  height: 20%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
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
  }

  strong {
    font-size: 40px;
    color: #5F463A;
  }
`;

export const CartDetailInfo = styled.div`
  height: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    color: #5F463A;
  }

  button {
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
  }
`;

export const CartItems = styled.div`
  height: 100%;
  width: 70%;
  background: transparent;
`;