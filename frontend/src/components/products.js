// Products component

import React from 'react';
import '../styles/products.css';

export function Products() {
  return (
    <div className="products-container">
      <div className="products">
        <div className='add' >
            <h3>Add Product</h3>
        </div>
        <div className='remove' >
            <h3>Remove Product</h3>
        </div>
      </div>

    <div className='add-pruducts' >
        <form className='form' >
            <label>Product Name</label>
            <input  type='text' name='product' placeholder='Enter product name' />
            
        </form>
    </div>


    </div>
  );
}
