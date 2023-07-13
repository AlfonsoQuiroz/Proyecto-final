import { createBrowserRouter } from "react-router-dom";

import NotFound from '../pages/NotFound';
import App from "../App";
import Movies from "../components/Movies";
import MovieDetail from "../pages/MovieDetail";
import Categories from "../components/Categories";
import Series from "../components/Series";
import SeriesDetail from "../pages/SeriesDEtail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: < Categories />,
            },
            {
                path: "movies/:movieId",
                element: <MovieDetail />,
            },
            {
                path: "Tv",
                element: <Series />,
            },
            {
                path: "Movies",
                element: <Movies />,
            },
            {
                path: "Tv/:tvId",
                element: <SeriesDetail />,
            }
        ]
    }
]);