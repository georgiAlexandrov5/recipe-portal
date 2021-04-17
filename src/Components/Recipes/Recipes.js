import { useState, useEffect } from 'react';
import './Recipes.css';
import { Link } from 'react-router-dom'
import ref from "../../static/firebaseRef"





const Recipes = ({
    username
}) => {

    const [recipes, setRecipes] = useState([]);



    function getRecipes() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((recipe) => {
                items.push(recipe.data());

            });
            setRecipes(items);
        });
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <article className="recipeContainer" >
            <div className="dashboard" >
                <h1 className="dashboard-title">All Recipes</h1>
                <ul className="RecipesList">
                    {recipes.map((recipe) => (

                        <li className="recipeWrap" key={recipe.id}>
                            <div className="recipeFront">
                                <img src={recipe.imgUrl} alt="" />
                                <h3>{recipe.title}</h3>
                            </div>

                            <div className="recipeBack">
                                <div className="back-side-info">
                                    <h4>Ingredients</h4>
                                    <ul>
                                        {recipe.ingredients.map((item, index) => {
                                            return <li className="ingredientLi" key={index}>{item}</li>;
                                        })}
                                    </ul>

                                    <Link to={`/details/${recipe.id}`}>Details</Link>


                                </div>

                                <img className="foodImage" src={recipe.imgUrl} alt="{meal}" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </article>

    );
}



export default Recipes;