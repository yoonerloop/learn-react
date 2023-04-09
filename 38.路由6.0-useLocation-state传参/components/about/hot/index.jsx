import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

export default function Hot(props) {

    const [message] = useState([
        {id: '001', title: '标题1', content: '1111'},
        {id: '002', title: '标题2', content: '2222'},
        {id: '003', title: '标题3', content: '3333'},
        {id: '004', title: '标题4', content: '4444'}
    ]);

    return (
        <div>
            <ul>
                {
                    message.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link to={'message'}
                                      state={{
                                          id: m.id,
                                          title: m.title,
                                          content: m.content
                                      }}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    );
}

