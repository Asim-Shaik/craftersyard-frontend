import React, { useEffect, useState } from "react";
import "./singleshop.css";
import image from "./do.png";
import styled from "styled-components";
import Product from "../Product";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Singleshop() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const name = location.pathname.split("/")[2];
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products?shop=${name}`
        );
        setProducts(res.data.products);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [name]);
  return (
    <div className="singleshop">
      <div className="details">
        <div className="shop-top">
          <div className="shop-image-container">
            <img src={image} alt="" className="shopimage" />
          </div>
          <div className="shopdetails">
            <h2>Shop name</h2>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Cum, tempore.
            </p>
          </div>
        </div>
        <div className="shop-lower">
          <Container>
            {products.map((item) => (
              <Product item={item} key={item._id} />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Singleshop;
