import React from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import ItemList from "../../components/ItemList";
import { Task } from "../../store/modules/tasks/types";
import { RootState } from "../../store/ConfigureStore";
import { Container } from "./styles";
import Header from "../../components/Header";

const Dashboard: React.FC = () => {
  const data = useSelector<RootState, Task[]>((store) => store.tasks.list);

  return (
    <>
      <Header />
      <Container>
        <Input />
        {data.map((item) => (
          <ItemList key={item.id} data={item} />
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
