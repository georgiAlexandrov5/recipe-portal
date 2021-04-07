import { Link } from 'react-router-dom'
import { useEffect } from 'react';

import './Header.css'
function Header() {

    return (
        <>
            <header id="site-header">
                <nav className="navbar">
                    <section className="navbar-dashboard">
                        <div className="first-bar">
                            <Link to="/">Dashboard</Link>
                            <Link className="button" to="#">All Recipes</Link>
                            <Link className="button" to="/pets/create">Add Recipe</Link>
                        </div>
                        <div className="second-bar">
                            <ul>
                                 <li>Welcome, Pesho!</li>                                

                                <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section className="navbar-anonymous">
                        <ul>
                            <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                        </ul>
                    </section>
                </nav>
            </header>

        </>
    );
};

export default Header;