import Home from "../components/home";
import About from "../components/about";
import {Navigate} from "react-router-dom";
import React from "react";
import Hot from "../components/about/hot";
import Mine from "../components/about/mine";
import Message from "../components/about/hot/message";

/**
 * 注意children路由组件下面element没有path没斜杠('/')，否则报错
 */
export default [
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>,
        children: [
            {
                path: 'hot',
                element: <Hot/>,
                children:[
                    {
                        path: 'message',
                        element: <Message/>
                    }
                ]
            },
            {
                path: 'mine',
                element: <Mine/>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/about'}/>
    }
]
