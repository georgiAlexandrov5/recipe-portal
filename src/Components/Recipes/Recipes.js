import { Component, useState, useEffect } from 'react';
import background2 from '../../public/background2.jpg'
import './Recipes.css';
import firebase from '../../firebase/firebase'
import { Link } from 'react-router-dom'





function Recipes() {

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
                <div className="dashboard" style={{ backgroundImage: `url(${background2})`,backgroundSize: 'cover' }}>
                    <h1 className="dashboard-title">All Recipes</h1>
                    <ul className="RecipesList">
                        {recipes.map((recipe) => (

                            <li>
                                <img className= "recipeImg" src={recipe.imgUrl} alt="Logo"></img>
                                <h2>{recipe.title}</h2>
                                <p>{recipe.ingredients}</p>
                                <p>
                                    Time Needed : {recipe.time}
                                </p>
                                <Link to={`details/${recipe.id}`}><i className="fas fa-sign-in-alt"></i> Details </Link>                            </li>
                        ))}
                    </ul>
                </div>
            </article>

        );
    }



export default Recipes;