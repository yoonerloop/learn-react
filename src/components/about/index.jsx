import React from 'react';
import {NavLink, Outlet, useOutlet,useResolvedPath} from "react-router-dom";

/**
 * 注意二级路由不能写斜杠
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function About(props) {

    const a = useOutlet();
    console.log('useOutlet', a)

    const x = useResolvedPath('/user/index.js?name=zhangsan&age=30')
    console.log(x)

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
