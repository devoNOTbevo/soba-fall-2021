// 1 import dependencies/modules
const express = require('express');
// const cors = require('cors');

// 2 configuration - constants, initializations
const app = express();

// 3 define middleware
// app.use(cors());

// 4 define routes
app.get('/groceries', (req, res) => {
  // 1. get data from req
  // 2. send to client with res
  res.json({ success: true, groceries: ['apples', 'bananas'] });
});

app.post('/groceries', (req, res) => {
  res.json({ success: true });
});

// app.patch('/groceries', (req, res) => {

//   res.json({ success: true });
// });

// app.delete('/groceries', (req, res) => {

//   res.json({ success: true });
// });

// 5 start server - a.k.a listen for requests on a certain port
app.listen(8005, () => console.log('Server is listening on port 8005'));
