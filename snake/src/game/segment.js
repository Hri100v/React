/**
 * Coordinates and size
 */

import React from 'react';
import { MyContext } from './playground';

export class Segment extends React.PureComponent {
    static contextType = MyContext;

    constructor(props) {
        super(props);

        this.state = {
            bodyColor: !!props.color ? props.color : "mistyrose",
            margin: !!props.margin ? props.margin : 0
        }
    }

    coordinates = { x: 0, y: 0 };

    render() {
        const size = 10;
        return <div className={"snake-segment"}
            // onClick={this.onClick}
            style={{
                margin: this.state.margin,
                width: size,
                height: size,
                backgroundColor: this.state.bodyColor,
                display: "inline-block"
            }}>
            {this.props.value}
        </div>;
    }

    transfer(...args) {
        console.log(...args, 1771);
    }

    componentDidMount() {
        // console.log("componentDidMount", this.props);        
    }

    // MyContext
    // // Way to pass data to the Parent
    // onClick = () => {
    //     this.context.doSomething(this.props.value);
    // };
}