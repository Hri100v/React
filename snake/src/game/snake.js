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
import { MyContext } from './playground';

export class Snake extends React.PureComponent {
    static contextType = MyContext;

    constructor(props) {
        super(props);
        // console.log(1221, props);

        this.state = {
            // parent: props.parent,
            segments: [
                // Head
                {
                    prev: null,
                    coordinates: { x: 0, y: 0 },
                    next: null
                }
            ],
            color: "greenyellow",
            text: "initial state"
        };

        this.onClick = this.onClick.bind(this);
    }

    directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"
    }

    render() {
        return <div onClick={this.onClick}>

            <h2>The Snake</h2>
            <p>{this.state.text}</p>
            <Segment color={this.state.color} margin={1}>first</Segment>
            <Segment color={"green"} margin={1}>second</Segment>
        </div>;
    }

    componentDidMount() {
        document.addEventListener("keydown", event => {
            if (this.directions[event.key]) {
                console.log(this.directions[event.key]);
                this.move(this.directions[event.key]);
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
                this.setState((previousState, currentProps) => {
                    console.log("this.setState", previousState, currentProps)
                    let x = previousState.segments[0].coordinates.x;
                    let y = previousState.segments[0].coordinates.y;
                    return {
                        segments: [
                            {
                                parent: null,
                                coordinates: { x: x + 1, y: y + 1 }
                            }
                        ]
                    }
                });
                // setTimeout(() => {
                //     console.log(this.state, 6543);
                // }, 1000);
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

    // Think about grow (with/without animation)
    grow() { }

    componentDidUpdate(prevProps, prevState) {
        // console.log(8998, prevProps, prevState);
        console.log(8998);
    }

    // Way to pass data to the Parent
    onClick = () => {
        console.log("Snake class - clicking");
        console.log(this.state);

        this.setState({
            color: "green",
            text: "update state"
        });

        // color1: "green",
        // color2: "yellowgreen",
        // color3: "red"

        // this.context.doSomething(this.props.value);
    };
}