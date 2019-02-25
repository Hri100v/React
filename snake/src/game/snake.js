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
        console.log(1221, props, this.props.initState.coordinates);

        this.state = {
            // parent: props.parent,
            // Head - first item in the array
            segments: this.props.initState,
            color: "greenyellow",
            text: "initial state",
            direction: "none"
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

        console.log('componentDidMount', this.state);

    }

    moveUp(grid, shape) {
        // direction up
        shape[0].coordinates.x = shape[0].coordinates.x;
        shape[0].coordinates.y = shape[0].coordinates.y - 1;
        return shape;
    }

    // Look ok
    moveBody(shape, i, prevCoor) {
        let coordinates = shape[i].coordinates;
        shape[i].coordinates = prevCoor;
        let next = shape[i].next;
        if (next !== null) {
            this.moveBody(shape, next, coordinates);
        } else {
            return shape;
        }
    }

    // Work on that way
    moveDown(shape, i) {
        let coordinates = Object.assign({}, shape[i].coordinates);
        shape[i].coordinates.x = shape[i].coordinates.x;
        shape[i].coordinates.y = shape[i].coordinates.y + 1;
        let next = shape[i].next;
        if (next !== null) {
            this.moveBody(shape, shape[i].next, coordinates);
        }
        return shape;
    }

    moveLeft(shape, i) {
        shape[i].coordinates.x = shape[i].coordinates.x - 1;
        shape[i].coordinates.y = shape[i].coordinates.y;
        return shape;
    }

    moveRight(shape) {
        shape[0].coordinates.x = shape[0].coordinates.x + 1;
        shape[0].coordinates.y = shape[0].coordinates.y;
        return shape;
    }

    move(direction) {
        // Move the head only
        // after that move its sibling on its position
        // continue to the next
        switch (direction) {
            case "up":
                // moving it up
                console.log("UP");
                this.moveUp(this.testGrid);
                break;
            case "down":
                // moving it down
                if (this.state.direction !== direction) {
                    let positionDown = this.moveDown(this.state.segments, 0);
                    console.log(positionDown);
                }

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

    someFn = () => {
        this.props.onMoving({ info: "DataInfo Object!" })
    }

    // Think about grow (with/without animation)
    grow() { }

    componentDidUpdate(prevProps, prevState) {
        // console.log(8998, prevProps, prevState);
        console.log(8998);
        this.someFn();
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