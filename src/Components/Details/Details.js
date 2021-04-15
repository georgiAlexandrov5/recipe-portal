import { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import firebase from "../../firebase/firebase"
import background1 from '../../public/background1.jpg'
import './Details.css';

function Details({ match, history }) {

    let recipeId = match.params.id;
    let [recipe, setRecipe] = useState([]);
    let [loading, setLoading] = useState(true);

    const ref = firebase.firestore().collection("recipes");

    function getRecipe() {
        // await ref.doc(recipeId).get()
        // .then(res => res.json)
        // .then(res => console.log(res));
        ref
            .doc(`${recipeId}`)
            .get()
            .then(res => setRecipe(recipe => ({
                title: res.data().title,
                description: res.data().description,
                ingredients: res.data().ingredients,
                time: res.data().time,
                imgUrl: res.data().imgUrl
            })),
                setLoading(false))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        getRecipe();
        // console.log(loading);

    }, [setRecipe, setLoading]);

    return (
        <>

            <div className="detailsWrapper" style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover' }}>
                <>
                    {!loading ? (
                        <>
                            <h2 className="recipeTitle">{recipe.title}</h2>

                            <div className="recipeInfo">

                                <article className="imgwrapper">
                                    <img className="recipeImage" src={recipe.imgUrl} alt="Logo"></img>
                                </article>
                                <article className="recipeInfoWrapper">
                                    <span className="recipeTime">Time to cook : {recipe.time}</span>

                                    <p className="recipeIngredients">Ingredients : {recipe.ingredients}</p>
                                    <p className="recipeDescription">{recipe.description}</p>

                                </article>
                            </div>

                        </>
                    )
                        : (<Spinner animation="border" />)}
                </>
            </div>
        </>
    )
}

export default Details;