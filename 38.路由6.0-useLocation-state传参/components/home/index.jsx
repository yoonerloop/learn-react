import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

export default function Home() {
    const [sum, setSun] = useState(0)
    return (
        <div>
            <h2>我是当前Home的内容</h2>
            {/*默认replace是false，即push的形式*/}
            {sum === 4 ? <Navigate to={'/about'} replace={false}/> : <h3>当前sum的值是：{sum}</h3>}
            <button onClick={() => setSun(prevState => prevState + 1)}>点我+1</button>
        </div>
    );
}
