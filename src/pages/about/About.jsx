import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <h1>What is crafter's yard</h1>
      <div className="section">
        <div className="left">
          <h3>A community doing good</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam
            corrupti nam perferendis quos tenetur. Aliquam eius recusandae
            aliquid sunt!
          </p>
        </div>
        <div className="middle">
          <h3>independent creators</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quisquam dolores ratione sunt earum. Praesentium quae non
            perferendis officiis aliquid?
          </p>
        </div>
        <div className="right">
          <h3>Peace of mind</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam
            corrupti nam perferendis quos tenetur. Aliquam eius recusandae
            aliquid sunt!
          </p>
        </div>
      </div>
      <div className="newsletter">
        <h3>stay updated</h3>
        <form className="form">
          <input type="text" placeholder="email" className="input" />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
