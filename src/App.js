import { RouterProvider } from 'react-router-dom';
import { getRoutes } from './navigation/routes/routes';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './card_files/card';

export const AuthContext = createContext(null);

export const ListContext = createContext(null);

export const CardContext = createContext(null);

export const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isList, setIsList] = useState(products);
  const [isCard, setIsCard] = useState([]);
  const routes = getRoutes(isAuth);

  if(!localStorage.getItem('count')){
      localStorage.setItem('count', 0)
  }


  useEffect(() => {
    if(localStorage.getItem('access token')){
    setIsAuth(true);
  }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <ListContext.Provider value={{isList, setIsList}}>
          <CardContext.Provider value={{isCard, setIsCard}}>
            <RouterProvider router={routes} />
          </CardContext.Provider>
        </ListContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};
