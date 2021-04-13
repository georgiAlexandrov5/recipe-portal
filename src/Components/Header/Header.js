import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase';
import { useEffect, useContext } from 'react';
import AuthContext from '../../firebase/authContext';
import firebase from '../../firebase/firebase';


import './Header.css'
const Header =({
    username
}) => {

    const { isAuthenticated } = useContext(AuthContext);

    
    
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         return;
    //     }

    //     auth.currentUser.getIdToken()
    //         .then(function (idToken) {
    //             return fetch('http://localhost:3000', {
    //                 headers: {
    //                     'Authorization': idToken
    //                 }
    //             })
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         });
            
    //     useContext.isAuthenticated = true;
    //     console.log(isAuthenticated);


    // }, [isAuthenticated])

    

    return (

        <>
            <header>
                <nav className="navbar special-spanner">
                    <article className="nav-logo">
                        <h1 className="nav-title">
                            Recipe Portal
                </h1>
                        <article className="nav-subtitle">
                            BY GALEXANDROV
                </article>
                    </article>

                    < ul >
                        <li><Link className="button" to="/">All Recipes</Link></li>
                        {
                            !username ?
                                <>
                                    <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                                    <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                                </>
                                : <>
                                                                <li><Link to="/add-recipe"><i className="fas fa-user-plus"></i>Add Recipe</Link></li>

                                                                <li><Link to="/logout"><i className="fas fa-user-plus" ></i>Logout</Link></li>

                                </> 
                        }
                    </ul>


                </nav>

            </header>

        </>
    );
};

export default Header;