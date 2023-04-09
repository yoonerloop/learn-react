import React, {Component} from 'react';
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";

export default class App extends Component {

    render() {
        return (
            <div>
                <Person1/>
                <hr/>
                <Person2/>
            </div>
        );
    }
}
