/**
 * Coordinates and size
 */

import React from 'react';

export class Segment extends React.PureComponent {
    constructor(...args) {
        super(...args);
        // console.log(...args);
    }
    
    coordinates = { x: 0, y: 0 };
    
    render() {
        const size = 10;
        const bodyColor = "red" | "greenyellow"; // to change it later
        return <div className={"snake-segment"} style={{
            margin: 1,
            width: size,
            height: size,
            backgroundColor: "greenyellow",
            display: "inline-block"
        }}>
        </div>;
    }
}