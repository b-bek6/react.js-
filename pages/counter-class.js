import React from "react";


// traditional way using class


class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 110 };
    }
    increment(){
        console.log("increment");
        this.setState({
            count: This.state.count + 1  
        })
    }
    componentDidMount() {
        console.log("mount")
    }
    componentDidUpdate() {
        console.lof("update")
    }
    render(){
        console.log("render")
        return <>
            <h1>Count: 0</h1>
            <button onClick={this.increment}>increment</button>
        </>
    }
}

export default Counter