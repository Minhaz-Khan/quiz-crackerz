import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../ErrorHandle/Error";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Home',
                element: <Home />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            }
        ]
    }
]) 