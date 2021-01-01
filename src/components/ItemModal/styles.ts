import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  
  background-color: rgb(0,0,0,0.6);
`;

export const Modal = styled.div`
  width: 50%; 
  height: 50%;
  background: #F8AF00;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
  border-radius: 10px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    strong {
      font-size: 30px;
      color: #5F463A;
    }
  }

  input {
    width: 80%;
    height: 40px;
    border: 0;
    border-radius: 5px;
    padding: 0 20px;
  }
`;

export const ItemButton = styled.button`
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