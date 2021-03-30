import React, { Component } from 'react'
import Counter from "./Counter";

class ClickCounter extends Component {
    
    render() {
        const {count, incrementHandler} = this.props
        return (
            <div>
                <button onClick={incrementHandler}>
                    {this.props.name} Clicked {count} times
                </button>
            </div>
        );
    }
}

export default Counter(ClickCounter, 5);
