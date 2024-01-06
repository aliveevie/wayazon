import React, { useState, useEffect } from "react";
import { Loader } from "../components/loader.js";
import '../styles/showProducts.css';
import { ShowDetails } from "./showDetails.js";
import { EditProductDetails } from "./editProduct.js";

export function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [details, setDetails] = useState(false);
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

  const [edit, setEdit] = useState(false);

  function handleEditButton(data){
      setCurrentData(data);
      setEdit(!edit)
  }

  function handleCurrentData(data){
        setCurrentData(data);
        setDetails(!details)
  }

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
              <th>Edit Details</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td><button  onClick={() => handleCurrentData(product)} >View Details</button></td>
                <td><button  onClick={() => handleEditButton(product)}  >Edit Details</button></td>
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
      {details && (
        <ShowDetails currentData={currentData} handleCurrentData={handleCurrentData} />
      )}

      {edit && <EditProductDetails  currentData={currentData} handleEditButton={handleEditButton} />}
    </>
  );
}