import { Link } from 'react-router-dom'
import { useEffect } from 'react';

import './Header.css'
function Header() {

    const isAuthenticated = false;

    return (
        <>
            <header>
                <nav class="navbar special-spanner">
                    <article class="nav-logo">
                        <h1 class="nav-title">
                            Recipe Portal
                </h1>
                        <article class="nav-subtitle">
                            BY GALEXANDROV
                </article>
                    </article>

                    <ul>
                        <li><Link className="button" to="#">All Recipes</Link></li>
                        <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                    </ul>
                </nav>

            </header>

        </>
    );
};

export default Header;