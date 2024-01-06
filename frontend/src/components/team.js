// Products component
import { useState } from 'react';
import React from 'react';
import '../styles/products.css';
import { Loader } from './loader';
import { Success } from './success';
import { ShowTeamMembers } from './showTeams';


export function TeamMembers() {

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [removeProduct, setRemoveProduct] = useState(false);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [api, setApi] = useState(null);
  const [message, setMessage] = useState(null);


  function handleShowProducts(){
        setShowProducts(true);
        setShowAddProduct(false);
        setRemoveProduct(false);
        setSuccess(false);
  }

  function handleLoader(){
      setLoader(true);
      setShowAddProduct(false);
      setRemoveProduct(false);
      setSuccess(false);
      setShowProducts(false);
  }

  function handleAddProducts(){
        setApi('/api/admin/teams/add');
        setShowAddProduct(true);
        setRemoveProduct(false);
        setShowProducts(false);
  }

  function handleRemoveProduct(){
      setApi('/api/admin/teams/remove');
      setRemoveProduct(true);
      setShowAddProduct(false);
      setShowProducts(false);
  }

  function handleCloseProduct(){
      setShowAddProduct(false);
      setRemoveProduct(false);
  }

  const [formData, setFormData] = useState({
        member_id: '',
        name: '',
        title: '',
        image: '',
        description: ''
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoader();

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData)

      if (response.ok) {
        setLoader(false);
        setSuccess(true);
        resetFormData();
        setMessage(responseData.message)

        setTimeout(() => {
          setSuccess(false)
        }, 7000);

      } else {
        console.error('Failed to add product');

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetFormData = () => {
    setFormData({
        member_id: '',
        name: '',
        title: '',
        image: '',
        description: ''
    });
  };
  

  return (
    <>
        <div className="products-container">
      <div className="products">
      <div className='add'  onClick={handleShowProducts} >
            <h3>View Team Members</h3>
        </div>
        <div className='add'  onClick={handleAddProducts} >
            <h3>Add Team Member</h3>
        </div>
        <div className='remove'  onClick={handleRemoveProduct} >
            <h3>Remove Team Member</h3>
        </div>
      </div>

    {showAddProduct && (
        <form className="form" onSubmit={handleSubmit}>
        <div className='close' onClick={handleCloseProduct}>
          <button className='remove'>&times; Close</button>
        </div>
        <label htmlFor="productName">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name of the team member"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageLink">Image Link</label>
  
        <input
          type="text"
          id="imageLink"
          name="image"
          placeholder="Enter the Link of the Image"
          value={formData.image}
          onChange={handleChange}
          required
        />

      <a href='https://postimages.org/' target='_blank' rel="noreferrer" >Get Image Link Here</a>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="color">Title</label>
        <input
          type="text"
          id="color"
          name="title"
          placeholder="Enter title of your team member"
          value={formData.title}
          onChange={handleChange}
        />

        <button type="submit">Add Team Member</button>
      </form>
   )}


      {removeProduct && (
          <form className='form' onSubmit={handleSubmit} >
              <div className='close' onClick={handleCloseProduct}>
          <button className='remove'>&times; Close</button>
        </div>
          <label htmlFor="Name">Name</label>
               <input
                 type="text"
                 id="productName"
                 name="name"
                 placeholder="Enter team member name to remove"
                 value={formData.name}
                 onChange={handleChange}
                 required
               />
       
               <label htmlFor="connectivity">Member Id</label>
               <input
                 type="number"
                 id="connectivity"
                 name="memberId"
                 placeholder="Enter The product Id"
                 onChange={handleChange}
                 required
               />
                <button type="submit" className='remove'>Remove Member</button>
          </form>
      )}

   {loader && <Loader />}

   {success && <Success message={message} />}

   {showProducts && <ShowTeamMembers />}

    </div>

    </>

  
  );
}
