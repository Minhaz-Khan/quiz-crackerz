import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../ErrorHandle/Error";
import Home from "../Home/Home";
import Quizes from "../Quizes/Quizes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            },
            {
                path: '/Quizes/:id',
                element: <Quizes></Quizes>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
]) 