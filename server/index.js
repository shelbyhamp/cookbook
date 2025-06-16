// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// variables
let recipes = [];

// GET endpoint to retrieve all recipes
app.get('api/recipes/', (req, res) => {
    res.json(recipes);
});

// POST endpoint to add a new recipe
app.post('/api/recipes', (req, res) => {
    const recipe = req.body;
    if (!recipe.title || !recipe.ingredients || !recipe.steps) {
        return res.status(400).json({error: 'Missing requrired fields'});
    }

    recipe.id = Date.now();
    recipes.push(recipe);
    res.status(201).json(recipe);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
