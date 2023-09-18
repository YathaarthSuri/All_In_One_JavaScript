import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/grocery';
import NameContext from './utils/NameContext';

const Grocery = lazy(() => import('./components/grocery'));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and fetch User Name

    const data = {
      name: 'Yathaarth Suri',
    };

    setUserName(data.name);
  }, []);

  return (
    <NameContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Here value will be Yathaarth Suri */}
      <div className='app'>
        {/* <NameContext.Provider value={{ loggedInUser: 'Hehe' }}> */}
        {/* Header will have Hehe */}
        <Header />
        {/* </NameContext.Provider> */}
        <Outlet />
      </div>
    </NameContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
