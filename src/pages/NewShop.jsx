import axios from "axios";
import React, { useState } from "react";

const NewShop = () => {
  const [shopname, setShopname] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const newPost = {
      shopname,
      description,
      category,
    };

    try {
      const res = await axios.post(`http://localhost:5000/api/shop`, newPost);

      console.log(res.data);
    } catch (err) {
      console.log(err);
      console.error(err);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Shop</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Shop name</label>
          <input
            name="shopname"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setShopname(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>catergory</label>
          <select
            name="catergory"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="art">art</option>
            <option value="technology">technology</option>
            <option value="handicraft">handicraft</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewShop;
