import React, {Component} from 'react';
import store from "./reducer/store";
import CountContainer from "./containers/count";

export default class App extends Component {

    render() {
        return (
            //store必须从这里传递，不能在CountContainer中引入
            <CountContainer store={store}/>
        );
    }
}
