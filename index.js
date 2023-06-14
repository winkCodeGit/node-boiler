// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({"id":1,"message":"done"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
