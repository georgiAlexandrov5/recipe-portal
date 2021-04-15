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
import { useEffect, useState, useContext } from 'react';
import { auth } from './firebase/firebase';
import Error404 from "./Pages/Error404"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"







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
      <Header {...authInfo}/>
      <Switch>
          <Route path="/" exact render={props => <Recipes {...props} {...authInfo} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" render={() => {
                  auth.signOut();
                  authInfo.isAuthenticated = false;
                  return <Redirect to="/" />
                }} />
         
          <ProtectedRoute path='/details/:id' component={Details} {...authInfo}/>
          <ProtectedRoute exact path='/add-recipe'  component={AddRecipe} />
          <Route exact path='/unauthorized' component={Unauthorized} />

          <Route component={Error404} />




      </Switch>
      <Footer />

      
    </>
  );
}

export default App;
