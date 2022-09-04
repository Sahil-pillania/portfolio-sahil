import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Sahil </h1>
        <p className="pl-desc">
          These are some of the project shown below developed by me. Hope you
          like them 🥇
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
