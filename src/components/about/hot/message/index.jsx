import React from 'react';
import {useLocation} from "react-router-dom";

export default function Message(props) {

    const {state} = useLocation();
    console.log(state)

    return (
        <div>
            <h4>消息列表</h4>
            <ul>
                <li>{state.id}</li>
                <li>{state.title}</li>
                <li>{state.content}</li>
            </ul>
        </div>
    );
}
