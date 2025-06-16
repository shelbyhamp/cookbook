import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const user = import.meta.env.VITE_USER || 'Guest';

    return (
        <div className="home">
            <h1 className="title font-bold mb-8">{`${user}'s Cookbook`}</h1>
            <div className="space-x-4">
                <Link to="/recipes">
                    <button className="buttons px-6 py-2 rounded">View Recipes</button>
                </Link>
                <Link to="/add">
                    <button className="buttons px-6 py-2 rounded">Add New Recipe</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;