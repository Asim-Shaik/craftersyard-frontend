import styled from "styled-components";
import Topbar from "../component/topbar/Topbar";
import Announcement from "../component/Announcement";
import Products from "../component/Products";
import Footer from "../component/footer/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  return (
    <Container>
      <Topbar />
      <Announcement />
      <Title>{cat}</Title>

      <Products cat={cat} />
      <Footer />
    </Container>
  );
};

export default ProductList;
