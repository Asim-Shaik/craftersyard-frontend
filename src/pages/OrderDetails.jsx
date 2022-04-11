import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

const OrderDetails = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [productname, setProductname] = useState();
  const [productimage, setProductimage] = useState();
  const [productquantity, setProductquantity] = useState();
  const [shopId, setShopId] = useState();
  const [userId, setUserId] = useState([]);
  const [address, setAddress] = useState({});
  const [landmarks, setLandmarks] = useState();
  const [pincode, setPincode] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(shopId);
    await setUserId(user.currentUser._id);
    console.log(userId);

    const neworder = {
      orders: {
        productdetails: {
          productname,
          productimage,
          productquantity,
        },
        userId,
        shopId,
        landmarks,
        address,
        pincode,
        phone,
        email,
        name,
      },
    };
    console.log(neworder);
    try {
      await cart.products.map((item) => {
        setProductname(item.name);
        setProductimage(item.image);
        setProductquantity(item.quantity);
        const shopname = item.shopname;
        const getid = async () => {
          const res = await axios.get(
            `http://localhost:5000/api/shop?shop=${shopname}`
          );
          setShopId(res.data.shop.map((item) => item._id));
        };
        getid();
      });
      const resshop = await axios.patch(
        `http://localhost:5000/api/shop/${shopId}`,
        neworder
      );
      console.log(resshop);
    } catch (err) {
      console.log(err);
    }

    try {
      const resuser = await axios.patch(
        `http://localhost:5000/api/user/${userId}`,
        neworder
      );
      console.log(resuser);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Order details</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>email</label>
          <input
            name="email"
            type="email"
            placeholder="james@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>name</label>
          <input
            name="name"
            type="text"
            placeholder="eg: Asim shaik"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>Address</label>
          <input
            name="Address"
            type="textarea"
            placeholder="Home address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Landmarks</label>
          <input
            name="landmarks"
            type="text"
            placeholder="eg: Hotel hayatt"
            onChange={(e) => setLandmarks(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>Pincode</label>
          <input
            name="Pincode"
            type="text"
            placeholder="eg: 403601"
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Phone Number</label>
          <input
            name="Phone number"
            type="text"
            placeholder="eg: 7972926489"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          place order
        </button>
      </form>
    </div>
  );
};

export default OrderDetails;
