import React, { useState, useEffect } from "react";
import { Loader } from "../components/loader.js";
import '../styles/showProducts.css';

export function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/admin/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      {products.length === 0 && <Loader />}
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                
                <td><button>View Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev Page
          </button>
          <span>Page {currentPage}</span>
          <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}