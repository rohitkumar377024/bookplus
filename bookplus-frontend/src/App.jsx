import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBooks from "./pages/MyBooks";
import PublishBook from "./pages/PublishBook";
import AllBooks from "./pages/AllBooks";
import SearchBooks from "./pages/SearchBooks";
import UnpublishBook from "./pages/UnpublishBook";

import {Provider} from 'react-redux';
import store from './store';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/my-books",
      element: <MyBooks />,
    },
    {
      path: "/publish-book",
      element: <PublishBook />,
    },
    {
      path: "/all-books",
      element: <AllBooks />,
    },
    {
      path: "/search-books",
      element: <SearchBooks />,
    },
    {
      path: "/unpublish-book",
      element: <UnpublishBook />,
    },
  ]);

  return <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
}

export default App;
