import { Link } from 'react-router-dom'



import './Header.css'
const Header =({
    username
}) => {  

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