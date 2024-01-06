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

app.get('/api/admin/phones', async (req, res) => {
  const category = 'phones';
  const subCategory = 'screenGuardCover';
  
  try {
    const result = await db.query('SELECT * FROM products WHERE category=$1', [category]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/admin/accessories', async (req, res) => {
  const category = 'accessories';
  const subCategory = 'screenGuardCover';
  
  try {
    const result = await db.query('SELECT * FROM products WHERE category=$1', [category]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/api/admin/teams/add', async (req, res) => {
  try {
    const { name, title, image, description } = req.body;

    const result = await db.query(
      'INSERT INTO team_members (name, title, image_link, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, title, image, description]
    );

    const addedMember = result.rows[0];

    res.status(200).json({ success: true, message: 'Team member added successfully', member: addedMember });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/admin/teams/remove', async (req, res) => {
  try {
    const { id, name } = req.body;

    // Check if either ID or name is provided
    if (!id && !name) {
      return res.status(400).json({ success: false, message: 'Provide either ID or name for deletion' });
    }

    let result;

    if (id) {
      // Delete by ID
      result = await db.query('DELETE FROM team_members WHERE id = $1 RETURNING *', [id]);
    } else {
      // Delete by name
      result = await db.query('DELETE FROM team_members WHERE name = $1 RETURNING *', [name]);
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    const deletedMember = result.rows[0];

    res.status(200).json({ success: true, message: 'Team member deleted successfully', member: deletedMember });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.get('/api/admin/teams', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM team_members');
    const teamMembers = result.rows;

    res.status(200).json(teamMembers);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/admin/editmember', async (req, res) => {
  try {
    const {
      id,
      name,
      title,
      description,
      Image, // Include image_link in the request body
      // Add other fields as needed
    } = req.body;

    

    // Assuming you're using PostgreSQL
    const result = await db.query(
      'UPDATE team_members SET name=$1, title=$2, description=$3, image_link=$4 WHERE id=$5 RETURNING *',
      [name, title, description, Image, id]
    );

    // Check if the update was successful
    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Team member updated successfully'});
    } else {
      res.status(404).json({ message: 'Team member not found or update failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});
