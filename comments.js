// Create web server
// Create a new server
const express = require('express');
const app = express();
const port = 3000;

// Create a new server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});