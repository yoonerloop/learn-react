import React from 'react';
import {BrowserRouter, NavLink, Router,Route, Routes, Navigate} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Demo from "./components/demo";

/**
 * 路由6.0
 */
export default function App(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/home'} element={<Demo/>}/>
                <Route path={'/'} element={<Navigate to={'/about'}/>}/>
            </Routes>

            <h4>内容</h4>
            {/*className监听点击事件传递是否被点击*/}
            <NavLink className={(isActive) => {
                console.log(isActive)
            }} to={'/home'}>Home</NavLink>
            <NavLink className={(isActive) => {
                console.log(isActive)
            }} to={'/about'}>About</NavLink>
        </BrowserRouter>
    );
}
