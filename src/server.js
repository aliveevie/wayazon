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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});
