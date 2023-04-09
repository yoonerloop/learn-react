import React, {useState} from 'react';

export default function Demo1_useState(props) {

    //注意这里是数组，不是对象
    const [count,setCount] = useState(0)

    //使用
    function add() {
        //第一种写法
        //setCount(count=>count+1)
        //第二种写法
        setCount(count+1)
    }

    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>点击</button>
        </div>
    );
}
