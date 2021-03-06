import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import background1 from '../../public/background1.jpg'
import './Details.css';
import isAuth from "../../hoc/isAuth"
import ref from "../../static/firebaseRef"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import likeOne from "../../services/recipeServices/likeOne"






function Details({ match, history, username }) {

    let recipeId = match.params.id;
    let [recipe, setRecipe] = useState([]);
    let [loading, setLoading] = useState(true);


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
                imgUrl: res.data().imgUrl,
                likesCounter: res.data().likesCounter
            })),
                setLoading(false))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        getRecipe();
    }, [setRecipe, setLoading]);

    const onRecipeLikeButtonClickHandler = () => {
        
        const incrementedLikes = Number(recipe.likesCounter) + 1;
        likeOne(recipeId, incrementedLikes).then(() => {
          setRecipe((oldState) => ({
            ...oldState,
            likesCounter: incrementedLikes,
          }));
        });
      };

      const onRecipeDislikeButtonClickHandler = () => {
        
        const incrementedLikes = Number(recipe.likesCounter) - 1;
        likeOne(recipeId, incrementedLikes).then(() => {
          setRecipe((oldState) => ({
            ...oldState,
            likesCounter: incrementedLikes,
          }));
        });
      };


    

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
                                    <p className="recipeTime">Time to cook : {recipe.time}
                                    </p>


                                    <p className="recipeIngredients">Ingredients: <br>
                                    </br>

                                        {recipe.ingredients}

                                    </p>
                                    <p className="recipeDescription">{recipe.description}</p>
                                    <p className="likes"> <FaThumbsUp className="thumb" onClick = {onRecipeLikeButtonClickHandler} /> 
                                     {recipe.likesCounter}                    
                                      <FaThumbsDown  className="thumb" onClick = {onRecipeDislikeButtonClickHandler}/>
                                      </p>

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

export default isAuth(Details);