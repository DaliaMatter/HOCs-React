import React, { Component } from 'react'
import UpdatedComp from './Counter';

class HoverCounter extends Component {

    render() {
        const { count, incrementHandler } = this.props;
        return (
            <h1 onMouseOver={incrementHandler}>
                Hovered {count} times
            </h1>
        );
    }
}

export default UpdatedComp(HoverCounter)
