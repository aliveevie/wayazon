const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.post('/api/admin/login', (req, res) => {
    console.log(req.body);
    // Add your login logic here
    // Respond with appropriate status or data
    res.sendStatus(200); // For example, respond with a success status
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});
