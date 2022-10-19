import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
    // constructor () {
    //     this.name = React.createRef();
    // }

    state = {
        firstName: 20,
        age: 20,
        designation: 'developer',
        strOrNum: 20,
        arrOfNum: [90, 89, 89],
        arrOfObject: [{
            name: 'harry',
            id: 1
        },
        {
            name: 'john',
            id: 2
        }, {
            name: 'alex',
            id: 3
        }],
        arrOfData: [{}, {}, {}],
        emails: 'admin@gmail.com'
    }


    render() {
        return (
            <>
                <Display firstName={this.state.firstName} age={this.state.age} designation={this.state.designation} strOrNum={this.state.strOrNum} arrOfObject={this.state.arrOfObject} emails={this.state.emails} arrOfNum={this.state.arrOfNum} />
                {/* <input ref={this.name} /> */}
            </>
        )
    }
}


export default App;



















