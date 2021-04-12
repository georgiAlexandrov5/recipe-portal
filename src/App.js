import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { Route, Switch, Redirect } from 'react-router-dom';
import Recipes from "./Components/Recipes/Recipes"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase';





function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);
 

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <>
      <Header />
      <Switch>
      <Route path="/" exact render={props => <Recipes {...props} {...authInfo} />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" render={() => {
              auth.signOut();
              authInfo.isAuthenticated = false;
              return <Redirect to="/" />
            }} />



      </Switch>
      <Footer />

      
    </>
  );
}

export default App;
