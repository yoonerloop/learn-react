import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// store.subscribe(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// })
