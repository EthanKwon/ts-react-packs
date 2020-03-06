import React from "react";
import styled from "styled-components";
import {
  TodoItemProps,
  TodoItemComponentProps
} from "../routes/TodoList/TodoInterface";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3``;

const Buttons = styled.div``;

const Button = styled.button``;

const TodoItem = ({ todoItem, onToggle }: TodoItemComponentProps) => {
  const { id, text, isComplete }: TodoItemProps = todoItem;
  return (
    <Container key={id}>
      <Title>{text}</Title>
      <Buttons>
        <Button>Delete</Button>
        <Button onClick={() => onToggle(id)}>
          {isComplete ? "Not Yet" : "Done"}
        </Button>
      </Buttons>
    </Container>
  );
};

export default TodoItem;
