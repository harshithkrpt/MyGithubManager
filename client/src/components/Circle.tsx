import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
}

const CircleUI = styled.div`
  background-color: #eee;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.2rem solid #000;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Circle = ({ name }: Props) => {
  return <CircleUI>{name}</CircleUI>;
};

export default Circle;
