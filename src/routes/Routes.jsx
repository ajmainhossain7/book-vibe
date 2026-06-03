import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import Chart from "../pages/chart/Chart";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: "/books",
                element: <Books></Books>
            },
            {
                path: "/bookDetails/:bookId",
                Component: BookDetails,
                loader: () => fetch("/booksData.json")
            },
            {
                path: "/chart",
                element: <Chart></Chart>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])