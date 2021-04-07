import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Recipes from "./Components/Recipes/Recipes"
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase';




function App() {

  const [user, setUser] = useState(null);

 

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <>
      <Header />
      <Switch>
      <Route path="/" exact render={props => <Recipes {...props} {...authInfo} />} />
      </Switch>
    </>
  );
}

export default App;
