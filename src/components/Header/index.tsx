import React from "react";
import ThemeSwitch from "../../components/ThemeSwitch";
import { Container, ContainerInto } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerInto>
        <h1>Todo List</h1>
        <ThemeSwitch />
      </ContainerInto>
    </Container>
  );
};

export default Header;
