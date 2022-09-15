import React, {useRef} from 'react';

export default function Demo3_useRef() {

    const myRef = useRef();

    function getContent(){
        alert(myRef.current.value)
    }

    return (
        <div>
            <input ref={myRef}/>
            <button onClick={getContent}>获取内容</button>
        </div>
    );
}
