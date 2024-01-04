import React from 'react';
import { DashboardHeader } from "../components/dashboardHeader";
import '../styles/admin.css';
import { Products } from '../components/products';
import { useState } from 'react';


export function Dashboard() {

  const [manageProduct, setManageProduct] = useState(false);
  const [manageTeamMembers, setManageTeamMembers] = useState(false);
  const [manageHome, setManageHomee] = useState(false);

  function handleManageProduct(){
        setManageProduct(true);
        setManageTeamMembers(false);
        setManageHomee(false);
  }

  function handleTeamMembers(){
    setManageProduct(false);
    setManageTeamMembers(true);
    setManageHomee(false);
  }

  function handleHome(){
    setManageProduct(false);
    setManageTeamMembers(false);
    setManageHomee(true);
  }

  return (
    <>
     <DashboardHeader />
      
     <h1 className="welcome-text">Wayazone Management Dashboard</h1>
      <div className="dashboard">
      
        <div className="management">
          <div className="manage-item">
            <h3>Manage Team Members</h3>
            <i className="fas fa-user icon"></i>
          </div>
          <div className="manage-item" onClick={handleManageProduct} >
            <h3>Manage Products</h3>
            <i className="fas fa-box icon"></i>
          </div>
          <div className="manage-item">
            <h3>Manage Home Page</h3>
            <i className="fas fa-home icon"></i>
          </div>
        </div>
      </div>
      
    {manageProduct && (<Products/>)}

    </>
  );
}
