import React, { useState, useContext, useEffect } from 'react';
import { auth } from './firebase';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in

        setUser(authUser);
      } else {
        //user is logged out
        setUser(null);
      }
    });
  }, []);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider};