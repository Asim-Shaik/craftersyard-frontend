import React from "react";
import styled from "styled-components";
import { catergories } from "../data.js";
import CatergoryItem from "./CatergoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;
const Catergories = () => {
  return (
    <Container>
      {catergories.map((item) => (
        <CatergoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Catergories;
