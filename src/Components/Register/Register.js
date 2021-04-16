import { auth } from '../../firebase/firebase';
import './Register.css';
import background2 from "../../public/background2.jpg"



const Register = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(username, password)
            .then(res => {
                console.log('Register');
                history.push('/');
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
                    <input className="regBtn" type="submit"  value="Register" />
                </fieldset>
            </form>
        </section>
        </div>

    );
}

export default Register;