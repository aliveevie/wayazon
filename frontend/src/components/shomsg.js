import React, { useState, useEffect } from "react";
import { Loader } from "../components/loader.js";
import '../styles/showProducts.css';
import { ShowDetails } from "./showDetails.js";
import { EditProductDetails } from "./editProduct.js";
import formatDate from "../data/formatDate.js";


export function ShowMessages() {
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
      const response = await fetch('/api/admin/contact');
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products)


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
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.contact_id}</td>
                <td>{product.name}</td>
               <td>{product.message}</td>
               <td>{formatDate(product.created_at)}</td>
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