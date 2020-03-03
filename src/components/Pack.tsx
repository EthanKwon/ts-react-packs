import React from "react";
import styled from "styled-components";

const Component = styled.div`
  width: 20%;
  height: 20%;
  border: 3px solid #111;
`;

const PackLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

interface PackProps {
  name: string;
  packLink?: string;
}

const Pack = ({ name, packLink }: PackProps) => (
  <Component>
    <PackLink href={packLink}>
      <Title>{name}</Title>
    </PackLink>
  </Component>
);

export default Pack;
