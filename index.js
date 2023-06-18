const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const products = JSON.parse(data);

    res.json(products);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
