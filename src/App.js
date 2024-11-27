import { RouterProvider } from 'react-router-dom';
import { getRoutes } from './navigation/routes/routes';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './card_files/card';

export const AuthContext = createContext(null);

export const ListContext = createContext(null);

export const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isList, setIsList] = useState(products);
  const routes = getRoutes(isAuth);

  // useEffect((isAuth) => {
  //   if (isAuth) {
  //     navigate('/admin');
  //     console.log('эффект выполнен')
  //   }
  // }, [isAuth])

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <ListContext.Provider value={{isList, setIsList}}>
          <RouterProvider router={routes} />
        </ListContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};
