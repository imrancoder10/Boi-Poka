import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './conponents/Root/Root';
import ErrorPage from './conponents/ErrorPage/ErrorPage';
import Home from './conponents/Home/Home';
import DashBoard from './conponents/DashBoard/DashBoard';
import BookDetails from './conponents/BookDetails/BookDetails';
import ListedBooks from './conponents/ListedBooks/ListedBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json') //do not load all the books for one book. 
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        //worst way to load some data.
        loader: () => fetch('/booksData.json') // do not load all dat for some
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
