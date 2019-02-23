/**
 * Snake
 * 
 * import Segment
 * coordinates { x, y }
 * size { created from segments }
 * direction { up, down, left, right }
 */

import React from 'react';
import { Segment } from './segment'

export class Snake extends React.PureComponent {
    constructor(props) {
        super(props);
        // console.log(1001, props);
        this.state = {
            segments = [
                //head
                { 
                    parent: null,
                    
                }
            ]
        };
    }

    directions = {
        up: "arrow Up - key code",
        down: "arrow Down",
        left: "arrow Left",
        right: "arrow Right"
    }

    render() {
        return <div>
            <h2>The Snake</h2>
            <Segment>first</Segment>
            <Segment>second</Segment>
        </div>;
    }

    move() {
        // Move the head only
        // after that move its sibling on its position
        // continue to the next

    }

    // Think about grow (with animation)
    grow() {}

}