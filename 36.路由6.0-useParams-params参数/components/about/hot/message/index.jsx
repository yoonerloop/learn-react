import React from 'react';
import {useMatch, useParams} from "react-router-dom";

export default function Message(props) {

    const params = useParams()
    //下面这种方式也能获取到，但是不常用
    const a = useMatch('/about/hot/message/:id/:title/:content')
    console.log(a)
    return (
       <div>
           <h4>消息列表</h4>
           <ul>
               <li>{params.id}</li>
               <li>{params.title}</li>
               <li>{params.content}</li>
           </ul>
       </div>
    );
}
