import React, { useState, useContext } from "react";
import { Button, Container } from "./styles";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTaskInList } from "../../store/modules/tasks/Tasks.store";
import { ThemeContext } from "styled-components";

const Input: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext);

  function handleAddTask() {
    dispatch(addTaskInList(input));
    setInput("");
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => event.key === "Enter" && handleAddTask()}
        value={input}
      />
      <Button onClick={handleAddTask}>
        <IoIosAdd size={32} color={colors.secundary} />
      </Button>
    </Container>
  );
};

export default Input;
