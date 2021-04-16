import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from "../../firebase/context"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useGlobalContext();



  return (
    <Route
    {...rest}
    render={(props) =>
      user ? <Component {...props} /> : <Redirect to="/unauthorized" />
    }
  />

  )
}

export default ProtectedRoute;