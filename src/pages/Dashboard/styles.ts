import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
