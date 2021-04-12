import { Component, useState, useEffect } from 'react';
import background1 from '../../public/background1.jpg'
import './Recipes.css';
import firebase from '../../firebase/firebase'
import { FaSchool } from 'react-icons/fa';




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



   
        return (
            <article className="recipeContainer" >
                <div className="dashboard" style={{ backgroundImage: `url(${background1})`,backgroundSize: 'cover' }}>
                    <h1 className="dashboard-title">All Recipes</h1>
                    <ul className="RecipesList">
                        {recipes.map((recipe) => (
                            <li>
                                <img src={recipe.imgUrl} alt="Logo"></img>
                                <h2>{recipe.title}</h2>
                                <p>{recipe.description}</p>
                                <p>
                                    {recipe.time}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>

        );
    }



export default Recipes;