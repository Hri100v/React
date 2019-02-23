/**
 * Coordinates and size
 */

import React from 'react';

export class Segment extends React.PureComponent {
    // constructor(...args) {
    constructor(props) {
        super(props);
        // console.log(...args);

        console.log(1234, props);
        this.state = {
            bodyColor: !!props.color ? props.color : "mistyrose"
        }
    }

    coordinates = { x: 0, y: 0 };

    render() {
        const size = 10;
        //const bodyColor = "red" | "greenyellow"; // to change it later
        console.log("render", this.state.bodyColor);

        return <div className={"snake-segment"} style={{
            margin: 1,
            width: size,
            height: size,
            backgroundColor: this.state.bodyColor,
            display: "inline-block"
        }}>
        </div>;
    }
}