import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/dashboardHeader.css';

export function DashboardHeader() {
  return (
    <div className='dashboard-header'>
      <Link to="/" className='logo-link'>
        <img className='logo' src={logo} alt='logo icon' />
      </Link>
      <div className='menu'>
      <Link to="/" className='menu-link'>
          <i className="fas fa-sign-out-alt"></i> Logout
      </Link>
      </div>
    </div>
  );
}
