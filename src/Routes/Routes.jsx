import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../Root/Rootlayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import BookDetails from "../Pages/BookDetails";
import ReadList from "../Pages/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index : true,
        path: "/",
        loader : () => fetch('booksData.json') ,
        Component: Home,
      },
      {
        path: '/readList',
        loader : () => fetch('booksData.json') ,
        Component : ReadList
      },
      {
        path : '/bookdetails/:id',
        loader : () => fetch('booksData.json') ,
        Component : BookDetails,
      },
    ],
  },
]);
