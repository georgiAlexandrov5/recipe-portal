import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { Route, Switch, Redirect } from 'react-router-dom';
import Recipes from "./Components/Recipes/Recipes"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import AddRecipe from "./Components/Create/AddRecipe"
import Details from "./Components/Details/Details"
import Unauthorized from "./Pages/Unathorized"
import { useEffect, useState} from 'react';
import { auth } from './firebase/firebase';
import Error404 from "./Pages/Error404"
import AuthContext from './context/AuthContext';
import isAuth from './hoc/isAuth';








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
    <AuthContext.Provider value = {authInfo}>
      <Header {...authInfo} />
      <Switch>
        <Route path="/" exact render={props => <Recipes {...props} {...authInfo} />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" render={() => {
          auth.signOut();
          authInfo.isAuthenticated = false;
          return <Redirect to="/" />
        }} />

      <Route path="/add-recipe" component={isAuth(AddRecipe)} {...authInfo} />
      <Route path='/details/:id' component={isAuth(Details)} {...authInfo} />

        <Route exact path='/unauthorized' component={Unauthorized} />
        <Route component={Error404} />
      </Switch>
      <Footer />
      </AuthContext.Provider>

    </>
  );
}

export default App;
