import React from 'react';
import {NavLink, useRoutes} from "react-router-dom";
import routes from './routes'
import Header from "./components/header";

/**
 * 路由6.0
 */
export default function App() {

    const element = useRoutes(routes);

    return (
        <div>
            <Header/>
            <h4>内容</h4>
            {element}
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
    );
}
