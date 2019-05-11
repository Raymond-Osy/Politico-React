import React, { Component } from 'react';

class App extends Component {
    componentDidMount(){
        console.log('I am a chosen');
    }

    render() {
        return (
            <div>
                <h1>This is my Politico react app</h1>
            </div>
        );
    }
}

export default App;