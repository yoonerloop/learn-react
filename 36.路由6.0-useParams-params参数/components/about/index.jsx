import React from 'react';
import {NavLink,Outlet} from "react-router-dom";

/**
 * 注意二级路由不能写斜杠
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function About(props) {
    return (
        <div>
            <h2>About组件</h2>
            <ul>
                <li>
                    <NavLink to={'hot'}>热门</NavLink>
                </li>
                <li>
                    <NavLink to={'mine'}>我的</NavLink>
                </li>
            </ul>
            {/*<h4>???</h4>*/}
            {/*指定路由组件位置*/}
            <Outlet/>
        </div>
    );
}
