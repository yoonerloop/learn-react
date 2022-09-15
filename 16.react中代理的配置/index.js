import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * 请求地址：http://localhost:3000
 *
 * 解决跨域问题
 * 方法1：package.json配置proxy
 * 例如 "proxy": "http://localhost:5000"，设置代理为端口为5000的服务器，请求3000端口如何没有资源，会找代理服务器的5000要
 * 缺点：只能代理一台服务器，不能代理多台服务器
 *
 * 方法2：在src下建立setupProxy.js--->使用commonJs代码。
 * 1、引入http-proxy-middleware
 * 2、参考：https://www.cnblogs.com/rzl795/p/15096518.html
 *
 *
 */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);



