const express = require('express');
const app = express();

app.use(express.json());

const restaurants = [
  { id: 1, name: 'Restaurant A' },
  { id: 2, name: 'Restaurant B' },
  { id: 3, name: 'Restaurant C' }
];

app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});

app.post('/restaurants', (req, res) => {
  const { name } = req.body;
  const id = restaurants.length + 1;
  const newRestaurant = { id, name };
  restaurants.push(newRestaurant);
  console.log(req.body)
  res.status(201).json(newRestaurant);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
