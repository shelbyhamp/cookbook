import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function RecipeForm() {
    const [form, setForm] = useState({ title: '', ingredients: '', steps: ''});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/recipes', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            setForm({ title: '', ingredients: '', steps: ''});
            navigate('/recipes');
        }
    }
    return (
        <div className="p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              className="border w-full p-2"
              placeholder="Recipe title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              className="border w-full p-2"
              placeholder="Ingredients"
              value={form.ingredients}
              onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
            />
            <textarea
              className="border w-full p-2"
              placeholder="Steps"
              value={form.steps}
              onChange={(e) => setForm({ ...form, steps: e.target.value })}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
              Save Recipe
            </button>
          </form>
        </div>
      );
    }
    
export default RecipeForm;