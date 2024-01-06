import React, { useState, useEffect } from "react";
import { Loader } from "../components/loader.js";
import '../styles/showProducts.css';
import { ShowMemberDetails } from "./teamDetails.js";
import { EditMemberDetails } from "./editTeam.js";

export function ShowTeamMembers() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [details, setDetails] = useState(false);
  const productsPerPage = 20;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/admin/teams');
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


  function handleCurrentData(data){
        setCurrentData(data);
        setDetails(!details)
  }

  function handleEditButton(data){
        setCurrentData(data);
        setEdit(!edit)
  }

  return (
    <>
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><button  onClick={() => handleCurrentData(product)} >View</button></td>
                <td><button  onClick={() => handleEditButton(product)}  >Edit</button></td>
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
     
    {products.length === 0 && <Loader />}

    {details && <ShowMemberDetails currentData={currentData} handleCurrentData={handleCurrentData} />}
    
    {edit && <EditMemberDetails  currentData={currentData} handleEditButton={handleEditButton} />}

    </>
  );
}