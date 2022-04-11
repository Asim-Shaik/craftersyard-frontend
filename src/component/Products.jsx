import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { products } from "../data";
import axios from "axios";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?cat=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data.products);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
