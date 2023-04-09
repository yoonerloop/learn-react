import React from 'react';
import {useSearchParams,useLocation} from "react-router-dom";

export default function Message(props) {

    //setSearch：更新收到的参数
    const [search, setSearch] = useSearchParams()
    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');
    //不常用
    const x = useLocation();
    console.log(x)
    return (
        <div>
            <h4>消息列表</h4>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    );
}
