import React from "react";
import Announcement from "../component/Announcement";
import Catergories from "../component/Catergories";
import Footer from "../component/footer/Footer";
import Products from "../component/Products";
import Slider from "../component/Slider";
import Topbar from "../component/topbar/Topbar";

function Home() {
  return (
    <div>
      <Announcement />
      <Topbar />
      <Slider />
      <Catergories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
