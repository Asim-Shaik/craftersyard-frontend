import React, { useState } from "react";
import "./newProduct.css";
import axios from "axios";
const NewProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [shopname, setShopname] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      description,
      shopname,
      price,
      category,
    };
    if (image) {
      if (image.size > 1000000) {
        alert("File is too big!");
      } else {
        const data = new FormData();
        const filename = Date.now() + image.name;
        data.append("name", filename);
        data.append("file", image);
        newPost.image = filename;
        console.log(image.type.split("/")[1]);

        try {
          await axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/products`,
        newPost
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
      console.error(err);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>name</label>
          <input
            name="name"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setName(e.target.value)}
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
          <label>Shop name</label>
          <input
            name="shopname"
            type="text"
            placeholder="sammy's shop"
            onChange={(e) => setShopname(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e) => setPrice(e.target.value)}
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

export default NewProduct;
