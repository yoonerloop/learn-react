import React, {Component} from 'react';
import Demo1 from "./components/1_setState";
import Demo2 from "./components/2_lazyLoad";

export default class App extends Component {


    render() {
        return (
            <div>
                <Demo1/><hr/>
                <Demo2/>
            </div>
        );
    }
}
