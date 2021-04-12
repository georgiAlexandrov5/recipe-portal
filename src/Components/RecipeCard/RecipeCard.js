import React, { useEffect, useState } from "react";
import firebase from '../../firebase/firebase';

const RecipeCard = (props) => {
    let [recipe, setRecipe] = useState([]);


    useEffect(() => {
        firebase.firestore().collection(props.userEmail).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((recipe) => {
                    setRecipe([{
                        recipeId: recipe.id,
                        title: recipe.data().name,
                        time: recipe.data().time,
                        ingredients: recipe.data().ingredients,
                        description: recipe.data().description,
                        imgUrl: recipe.data().imgUrl,
                        
                    }])
                });
            });
    }, []);



}