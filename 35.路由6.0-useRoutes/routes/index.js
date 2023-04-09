import Home from "../components/home";
import About from "../components/about";
import {Navigate} from "react-router-dom";
import React from "react";
import Message from "../components/home/hot";

export default [
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/',
        element: <Navigate to={'/about'}/>
    }
]
