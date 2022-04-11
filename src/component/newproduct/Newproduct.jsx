import React from "react";
import "./newproduct.css";
function Newproduct() {
  return (
    <div className="newproduct">
      <div className="block-1">
        <h4>create your new product</h4>
      </div>
      <div className="container__n">
        <div className="form_container">
          <form className="theform">
            <input type="text" placeholder="product" className="input_field" />
            <textarea
              type="text"
              placeholder="description"
              className="input_text input_field"
            />
            <input
              type="text"
              placeholder="price"
              className="input_field price_field"
            />
            <div>
              <h3>Category</h3>
              <div class="form-radio">
                <div class="radio">
                  <label>
                    <input type="radio" name="radio" checked="checked" />
                    <i class="helper"></i>I'm the label from a radio button
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="radio" />
                    <i class="helper"></i>I'm the label from a radio button
                  </label>
                </div>
              </div>
            </div>
            <label htmlFor="file">
              <span>
                <i class="far fa-plus-square" className="file_label">
                  ss
                </i>
              </span>
            </label>
            <input type="file" id="file" name="file" className="input_file" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
