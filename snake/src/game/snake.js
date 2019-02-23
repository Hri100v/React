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
            segments: [
                //head
                {
                    parent: null,
                    coordinates: { x: 0, y: 0 }

                }
            ]
        };
    }

    directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"
    }

    render() {
        return <div>
            <h2>The Snake</h2>
            <Segment color={"greenyellow"}>first</Segment>
            <Segment color={"greenyellow"}>second</Segment>
        </div>;
    }
 
    // pressedKey = null;
    componentDidMount() {
        document.addEventListener("keydown", event => {
            // console.log("-Snake- catch key pressings", event);
            if (this.directions[event.key]) {
                console.log(this.directions[event.key]);
            }
        });
    }

    move(direction) {
        // Move the head only
        // after that move its sibling on its position
        // continue to the next

        switch (direction) {
            case "up":
                // moving it up
                console.log("UP");
                
                break;
            case "down":
                // moving it down
                break;
            case "left":
                // moving it left
                break;
            case "right":
                // moving it right
                break;

            default:
                break;
        }
    }

    // Think about grow (with animation)
    grow() { }

}