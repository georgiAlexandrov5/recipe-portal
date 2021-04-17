import { auth } from '../../firebase/firebase';
import './Register.css';
import background2 from "../../public/background2.jpg"
import { notifyError, notifySuccess } from "../../services/notificationHandler"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'



const Register = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password != confirmPassword){
            notifyError('Password and Confirm password should match!');
            return;
        }

        auth.createUserWithEmailAndPassword(username, password)
            .then(notifySuccess('Registration successful!'))
            .then(
                setTimeout(
                    function() {
                    },
                    2000
                )
            )
            .then(res => {
                auth.signOut();
                history.push('/login');
            });


    }
    
    return (
        <div className="regBackground" style={{ backgroundImage: `url(${background2})`, backgroundSize: 'cover'} }>

        <section className="register">
            <form onSubmit={onRegisterSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor="username">Email</label>
                        <span className="input">
                            <input className="emailInput" type="text" name="username" id="username" placeholder="Email" />
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
                    <p className="field">
                        <label htmlFor="password" className="confirmPassLabel">Confirm Password</label>
                        <span className="input">
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                        
                    </p>
                    <input className="regBtn" type="submit"  value="Register" />
                </fieldset>
            </form>
            <p className="bottom-msg-paragraph">Already have an account? <Link to="/login">Log In</Link>!</p>

            <ToastContainer />
        </section>
        </div>

    );
}

export default Register;