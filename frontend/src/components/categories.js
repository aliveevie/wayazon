import React from "react";
import { Link } from "react-router-dom";
import phoneImages from "../data/phoneData";
import watchImages from "../data/watchData";
import '../styles/phone.css'; // Assuming you have styles for the phone layout

export function CatComponent() {
  return (
    <div className="explore-products">
      <h2>Explore Our Products</h2>
      <div className="categories">
        <Link to="/categories/phone">Visit Phone Categories</Link>
        <div className="phone-images">
          {/* Map over phoneImages and display them in three columns */}
          {phoneImages.map((phone, index) => (
            <div key={index} className="product-card">
              <img src={phone.name} alt={phone.Description} />
              <div className="product-info">
                <h3>{phone.Description}</h3>
                <p>{`Battery: ${phone.Specification.Battery}`}</p>
                <p>{`Color: ${phone.Specification.Color}`}</p>
                <button>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/categories/watch">Visit Watch Categories</Link>
     
        <div className="watch-images">
          {/* Map over watchImages and display them in three columns */}
          {watchImages.map((watch, index) => (
            <div key={index} className="product-card">
              <img src={watch.name} alt={watch.Description} />
              <div className="product-info">
                <h3>{watch.Description}</h3>
                <p>{`Brand: ${watch.Specification.Brand}`}</p>
                <p>{`Model: ${watch.Specification.Model}`}</p>
                <button>Shop Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </div>
  );
}
