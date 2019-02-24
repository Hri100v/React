/**
 * Coordinates and size
 */

import React from 'react';
import { MyContext } from './playground';

export class Segment extends React.PureComponent {
    static contextType = MyContext;

    // constructor(...args) {
    constructor(props) {
        super(props);
        // console.log(...args);

        // console.log(1234, props);
        this.state = {
            bodyColor: !!props.color ? props.color : "mistyrose"
        }
    }

    coordinates = { x: 0, y: 0 };

    render() {
        const size = 10;
        //const bodyColor = "red" | "greenyellow"; // to change it later
        // console.log("render", this.state.bodyColor);

        return <div className={"snake-segment"}
            // onClick={this.onClick}
            style={{
                margin: 1,
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