import { auth } from '../../firebase/firebase';
import './Login.css';
import { Link } from 'react-router-dom'
import background2 from "../../public/background2.jpg"


const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;


        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                history.push('/');
            });
    };


    return (
           
                
        
        <div className="logBackground" style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover'} }>
            <section className="login" >
                <form onSubmit={onLoginFormSubmitHandler}>
                    <fieldset>
                        <legend>Login</legend>
                        <p className="field">
                            <label htmlFor="username">Username</label>
                            <span className="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                                <span className="actions"></span>
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <span className="actions"></span>
                                <i className="fas fa-key"></i>
                            </span>
                        </p>
                        <input className="logBtn" type="submit" value="Login" />
                    </fieldset>
                </form>
                <p className="bottom-msg-paragraph">Don't have an account? <Link to="/register">Sign Up</Link>!</p>

            </section>
        </div>

        

    );
};

export default Login;