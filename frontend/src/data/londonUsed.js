// LondonUsed.jsx
import { Loader } from "../components/loader";
import { useState, useEffect } from "react";
import { ShowDetails } from "../components/showDetails";

export function LondonUsed() {
  const [products, setProducts] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [details, setDetails] = useState(false);

  function handleCurrentData(data) {
    setDetails(!details);
    setCurrentData(data);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/admin/phones');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  
  const groupProductsBySubcategory = () => {
    const groupedProducts = {};
    products.forEach((product) => {
      const subCategory = product.sub_category;
      if (!groupedProducts[subCategory]) {
        groupedProducts[subCategory] = [];
      }
      groupedProducts[subCategory].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsBySubcategory();

  return (
    <>
      <div className="phones">
        {Object.entries(groupedProducts).map(([subCategory, productsInSubcategory]) => (
          <div key={subCategory}>
            <h3 id={subCategory}>{subCategory}</h3>
            <div className="phone-images">
              {productsInSubcategory.map((phone, index) => (
                <div key={index} className="product-card">
                  <img src={phone.image_link} alt={phone.product_name} width={50} height={50} />
                  <div className="product-info">
                    <h3>{phone.product_name}</h3>
                    <button onClick={() => handleCurrentData(phone)}>View Details</button>
                    <a href={`https://wa.me/${+2347038492560}`} target="_blank" rel="noopener noreferrer">
                      <button>Shop Now</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {details && <ShowDetails currentData={currentData} handleCurrentData={handleCurrentData} />}
      {products.length === 0 && <Loader />}
    </>
  );
}