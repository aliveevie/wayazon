import React from 'react';
import { DashboardHeader } from "../components/dashboardHeader";
import '../styles/admin.css';
import { Products } from '../components/products';



export function Dashboard() {
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
          <div className="manage-item">
            <h3>Manage Products</h3>
            <i className="fas fa-box icon"></i>
          </div>
          <div className="manage-item">
            <h3>Manage Home Page</h3>
            <i className="fas fa-home icon"></i>
          </div>
        </div>
      </div>
    <Products />
    </>
  );
}
