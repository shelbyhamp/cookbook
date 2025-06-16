import { useEffect, useState } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📖 Saved Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <ul className="space-y-4">
          {recipes.map((r) => (
            <li key={r.id} className="border p-4 rounded">
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p><strong>Ingredients:</strong> {r.ingredients}</p>
              <p><strong>Steps:</strong> {r.steps}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
