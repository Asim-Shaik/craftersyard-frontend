import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewShop from "./pages/NewShop";
import Cart from "./pages/Cart";
import SingleShop from "./component/shop/Singleshop";
import NewProduct from "./pages/newproduct/NewProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Singleshop from "./component/shop/Singleshop";
import OrderDetails from "./pages/OrderDetails";
function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/products/newproduct" element={<NewProduct />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/shop/createshop" element={<NewShop />}></Route>
          <Route path="/shop/:shopname" element={<Singleshop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<OrderDetails />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
