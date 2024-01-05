const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const db = require('./db');

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.post('/api/admin/login', async (req, res) => {
 
    const { email, password } = req.body;
    
    const result = await db.query('SELECT email, password FROM users WHERE email=$1 AND password=$2', [email, password]);

    if(result.rows.length === 0){
        return res.json({Failure: 'Error'});
    }

    const adminEmail = result.rows[0].email;
    const adminPassword = result.rows[0].password;

    if(email==adminEmail && adminPassword == password){
        res.json({Failure: 'Success'});
        return;
    }else{
        res.json({Failure: 'Error'})
    }

});


app.post('/api/admin/products', async (req, res) => {

    try {
        const {
          productName,
          imageLink,
          category,
          subCategory,
          description,
          color,
          brand,
          batterySize,
          batteryCapacity,
          displaySize,
          processor,
          storage,
          ram,
          camera,
          connectivity,
        } = req.body;
    
        const insertQuery = `
          INSERT INTO products (
            product_name,
            image_link,
            category,
            sub_category,
            description,
            color,
            brand,
            battery_size,
            battery_capacity,
            display_size,
            processor,
            storage,
            ram,
            camera,
            connectivity
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        `;
    
        const values = [
          productName,
          imageLink,
          category,
          subCategory,
          description,
          color,
          brand,
          batterySize,
          batteryCapacity,
          displaySize,
          processor,
          storage,
          ram,
          camera,
          connectivity,
        ];
    
        const result = await db.query(insertQuery, values);
    
        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
});


app.post('/api/admin/remove', async (req, res) => {
  try {
    const { productName, productId } = req.body;

    if (!productName && !productId) {
      return res.status(400).json({ message: 'Please provide productName or productId' });
    }

    let deleteQuery = '';

    if (productName) {
      // Delete based on product name
      deleteQuery = 'DELETE FROM products WHERE product_name = $1';
    } else if (productId) {
      // Delete based on product ID
      deleteQuery = 'DELETE FROM products WHERE product_id = $1';
    }

    const result = await db.query(deleteQuery, [productName || productId]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Product removed successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/admin/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Example using query parameters
app.get('/categories/phones', async (req, res) => {
  const category = req.query.category; // Extracts category from query parameters
  const subCategory = req.query.subCategory; // Extracts subCategory from query parameters
  
  // Use category and subCategory as needed
  console.log(category, subCategory);

  // Your logic here...
});






app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});
