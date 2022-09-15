import React, {useEffect, useState} from 'react';

/**
 * https://www.cnblogs.com/guanghe/p/14178482.html
 */
export default function Demo2_useEffect(props) {

    const [time,setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime(time=>time+1)
        },1000)
    },[])

    return (
        <div>time:{time}</div>
    );
}
