import { Component, useState, useEffect } from 'react';
import background2 from '../../public/background2.jpg'
import './Recipes.css';
import firebase from '../../firebase/firebase'
import { Link } from 'react-router-dom'





const Recipes = ({
    username
}) => {

    const [recipes, setRecipes] = useState([]);



    const ref = firebase.firestore().collection("recipes");


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

    // function recipeDetails(recipe){
    //     return <Redirect to="/details/${recipe.id}" />    
    // }




    return (
        <article className="recipeContainer" >
            <div className="dashboard" >
                <h1 className="dashboard-title">All Recipes</h1>
                <ul className="RecipesList">
                    {recipes.map((recipe) => (

                        <li className="recipeWrap" key="1">
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

                                    <Link to={`/details/${recipe.id}`}>View the recipe</Link>


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