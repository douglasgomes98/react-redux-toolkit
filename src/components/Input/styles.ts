import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  margin-top: 96px;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 540px;

  -webkit-box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);

  input {
    background-color: ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.background};
    padding: 16px;
    border-radius: 4px;
    border: 0px;
    font-size: 16px;

    ::placeholder {
      color: ${(props) => props.theme.colors.background};
    }
  }
`;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 46px;
  width: 46px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${(props) => props.theme.colors.ternary};
  }

  cursor: pointer;
`;
