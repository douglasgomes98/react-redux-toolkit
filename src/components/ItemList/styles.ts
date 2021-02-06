import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.ternary};
  color: ${(props) => props.theme.colors.background};
  min-width: 300px;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 2px 12px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 12px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 12px -8px rgba(0, 0, 0, 0.75);

  svg {
    cursor: pointer;
  }

  h2 {
    font-weight: 500;
  }
`;
