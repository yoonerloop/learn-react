import React from 'react';
import {NavLink, useRoutes} from "react-router-dom";
import routes from './routes'

/**
 * 路由6.0
 */
export default function App() {

    const element = useRoutes(routes);

    return (
        <div>
            {element}
            <h4>内容</h4>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
    );
}
