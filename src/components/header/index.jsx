import React from 'react';
import {useNavigate,useInRouterContext,useNavigationType} from "react-router-dom";

export default function Header(props) {

    const navigate = useNavigate()

    function back() {
        navigate(-1)
    }

    function forward() {
        navigate(1)
    }

    return (
        <div>
            <h2>头部</h2>
            <button onClick={forward}>前进</button>
            <button onClick={back}>后退</button>
        </div>
    );
}
