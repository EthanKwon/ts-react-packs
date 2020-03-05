import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { TodoPresProps } from "./TodoInterface";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: ${props => props.theme.subColor};
  margin: 60px;
`;

const InputForm = styled.form`
  margin-bottom: 60px;
`;

const InputTodo = styled.input`
  background-color: transparent;
  border-bottom: 2px solid ${props => props.theme.subColor};
  font-size: 40px;
  color: ${props => props.theme.subColor};
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TodoLists = styled.div`
  width: 60%;
  height: 50%;
  border: 10px solid ${props => props.theme.subColor};
`;

const TodoListPresenter = ({
  onSubmit,
  onChange,
  inputValue
}: TodoPresProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TodoList</Title>
        <InputForm onSubmit={onSubmit}>
          <InputTodo
            type="text"
            value={inputValue}
            placeholder="Write to do!"
            onChange={onChange}
          />
        </InputForm>
        <TodoLists />
      </Container>
    </ThemeProvider>
  );
};

export default TodoListPresenter;
