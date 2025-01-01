const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let products = [
  {
    id: 1,
    name: 'Acne Cure Product 1',
    category: 'acne_cure',
    description: 'This is an acne cure product.',
    price: 10.99,
    image_url: 'https://via.placeholder.com/150',
    food_tips: 'Eat more leafy greens.',
  },
  // Add more initial products here
];

let adminUsers = [
  { email: 'admin@gmail.com', password: 'admin@123' },
  { email: 'user@gmail.com', password: 'user@123' },
];

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  const user = adminUsers.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, error: 'Invalid credentials' });
  }
});

app.post('/api/admin/add_product', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.json({ success: true, product_id: newProduct.id });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
