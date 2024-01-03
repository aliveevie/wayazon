import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { MobileHeader } from './components/mobileHeader';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Categories } from './pages/categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Phones } from './pages/phones';
import { Accessories } from './pages/smartWatch';
import { Dashboard } from './pages/admin';
import { Login } from './components/login';


function App() {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <Router>
      <>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home mobile={mobile} handleMobile={handleMobile}  />} />
          <Route path="/categories/phones" element={<Phones />}/>
          <Route path="/categories/accessories" element={<Accessories />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;