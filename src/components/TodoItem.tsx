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
  color: ${props => props.theme.subColor};
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  width: 50px;
`;

const Buttons = styled.div``;

const Button = styled.button``;

const TodoItem = ({ todoItem, onToggle, onDelete }: TodoItemComponentProps) => {
  const { id, text, isComplete }: TodoItemProps = todoItem;
  return (
    <Container key={id}>
      <Title>{text}</Title>
      <Buttons>
        <Button onClick={() => onDelete(id)}>Delete</Button>
        <Button onClick={() => onToggle(id)}>
          {isComplete ? "Not Yet" : "Done"}
        </Button>
      </Buttons>
    </Container>
  );
};

export default TodoItem;
