const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port from the environment or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add your other routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
