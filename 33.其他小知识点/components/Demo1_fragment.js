import React, {useRef,Fragment} from 'react';

export default function Demo1_useRef() {

    //省略多余的div的嵌套，还可以使用空标签，二者区别，Fragment可以使用遍历时候指定的key，
    // return (
    //     <Fragment key={index}>
    //         <input />
    //         <button onClick={getContent}>获取内容</button>
    //     </Fragment>
    // );

     return (
        <>
            <input />
            <button onClick={getContent}>获取内容</button>
        </>
    );
}
