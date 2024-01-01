import React from "react";
import { Link } from "react-router-dom";
import '../styles/phone.css'; // Assuming you have styles for the phone layout
import { Phones } from "../pages/phones";
import { Accessories } from "../pages/smartWatch";


export function CatComponent() {
  return (
    <div className="explore-products">
      <h2>Explore Our Products</h2>
      <div className="categories">
      <Accessories />
      <Phones />

      </div>
     
    </div>
  );
}
