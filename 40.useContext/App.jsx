import React, {createContext, useContext, useState} from 'react';

const CountContext = createContext(0);

function App(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>父组件点击数量：{count}</p>
            <button onClick={() => setCount(count + 1)}>{"点击+1"}</button>
            <CountContext.Provider value={count}>
                <ChildA/>
            </CountContext.Provider>
        </div>
    );
}

function ChildA(props) {
    const count = useContext(CountContext);
    return <p>子组件获得的点击数量：{count}</p>;
}

export default App;