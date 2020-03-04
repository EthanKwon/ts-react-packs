import React from "react";
import styled, { css } from "styled-components";
import Pack from "../../components/Pack";

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${FlexCenter}
  flex-direction:column;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
`;

const Packs = styled.div`
  width: 100%;
  height: 50%;
  ${FlexCenter}
  justify-content: space-around;
`;

const HomePresenter = () => {
  return (
    <Container>
      <Title>Hello world</Title>
      <Packs>
        <Pack name="Todo List" packLink="./todolist" />
        <Pack name="Counter" />
        <Pack name="Hooks" />
      </Packs>
    </Container>
  );
};

export default HomePresenter;
