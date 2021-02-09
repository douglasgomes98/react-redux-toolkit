import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.background};
  padding: 16px;
`;

export const ContainerInto = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: auto;
`;
