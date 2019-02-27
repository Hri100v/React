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
            direction: "none",
            playGround: this.props.playGround
        };

        this.onClick = this.onClick.bind(this);
    }

    // TODO: Clear if do not use
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
                // console.log(this.directions[event.key]);
                this.move(this.directions[event.key]);
            }
        });

        console.log('componentDidMount', this.state);
    }

    checkForFood(board, head) {
        // console.log(board, head, 1001);

        let cellValue = board[head.coordinates.y][head.coordinates.x];
        if (cellValue === 3) {
            console.log("Eat Food!");
            let foodPosition = { x: head.coordinates.x, y: head.coordinates.y };
            // this.grow();
            return foodPosition;
        }
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

    moveUp(shape, i) {
        let coordinates = Object.assign({}, shape[i].coordinates);
        shape[i].coordinates.x = shape[i].coordinates.x;
        shape[i].coordinates.y = shape[i].coordinates.y - 1;
        let next = shape[i].next;
        if (next !== null) {
            this.moveBody(shape, shape[i].next, coordinates);
        }
        return shape;
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
        let coordinates = Object.assign({}, shape[i].coordinates);
        shape[i].coordinates.x = shape[i].coordinates.x - 1;
        shape[i].coordinates.y = shape[i].coordinates.y;
        let next = shape[i].next;
        if (next !== null) {
            this.moveBody(shape, shape[i].next, coordinates);
        }
        return shape;
    }

    moveRight(shape, i) {
        let coordinates = Object.assign({}, shape[i].coordinates);
        shape[i].coordinates.x = shape[i].coordinates.x + 1;
        shape[i].coordinates.y = shape[i].coordinates.y;
        let next = shape[i].next;
        if (next !== null) {
            this.moveBody(shape, shape[i].next, coordinates);
        }
        return shape;
    }

    move(direction) {
        // Move the head only
        // after that move its sibling on its position
        // continue to the next


        // C H A N G E
        // position of .grow() method after the .refreshMove()
        switch (direction) {
            case "up":
                // moving it up
                // console.log("UP");
                // this.moveUp(this.testGrid);
                if (this.state.direction !== direction) {
                    let positionSnake = this.moveUp(this.state.segments, 0);

                    let food = this.checkForFood(this.state.playGround.state.board, positionSnake[0]);
                    if (food) {
                        // console.log("Important!", direction, positionSnake, food);
                        
                        let newSegments = this.grow(food);
                        this.setState({ direction: direction, segments: newSegments.segments });
                    } else {
                        this.setState({ direction: direction, segments: positionSnake });
                    }                    
                }

                break;
            case "down":
                // moving it down
                // if (this.state.direction !== direction) {
                let positionSnake2 = this.moveDown(this.state.segments, 0);
                let food2 = this.checkForFood(this.state.playGround.state.board, positionSnake2[0]);
                if (food2) {
                    let newSegments = this.grow(food2);
                    this.setState({ direction: direction, segments: newSegments.segments });
                } else {
                    this.setState({ direction: direction, segments: positionSnake2 });
                } 
                // console.log(positionSnake);
                // console.log(positionSnake[0].coordinates);
                // this.setState({ segments: positionSnake });
                // this.setState({ direction: direction, segments: positionSnake2 });
                // }
                break;
            case "left":
                // moving it left
                // if (this.state.direction !== direction) {
                let positionSnake3 = this.moveLeft(this.state.segments, 0);
                let food3 = this.checkForFood(this.state.playGround.state.board, positionSnake3[0]);
                if (food3) {
                    let newSegments = this.grow(food3);
                    this.setState({ direction: direction, segments: newSegments.segments });
                } else {
                    this.setState({ direction: direction, segments: positionSnake3 });
                } 
                // this.setState({ direction: direction, segments: positionSnake3 });
                // }
                break;
            case "right":
                // moving it right
                // if (this.state.direction !== direction) {
                let positionSnake4 = this.moveRight(this.state.segments, 0);
                let food4 = this.checkForFood(this.state.playGround.state.board, positionSnake4[0]);
                if (food4) {
                    let newSegments = this.grow(food4);
                    this.setState({ direction: direction, segments: newSegments.segments });
                } else {
                    this.setState({ direction: direction, segments: positionSnake4 });
                } 
                // console.log(positionSnake);
                // console.log(positionSnake[0].coordinates);
                // this.setState(state => {return { segments: positionSnake }});
                // this.setState({ direction: direction, segments: positionSnake4 });
                // }
                break;

            default:
                break;
        }
        this.refreshMove();
    }

    refreshMove() {
        this.props.onMoving({ direction: this.state.direction, segments: this.state.segments })
    }

    // Think about grow (with/without animation)
    grow(foodPosition) {
        console.log("Snake Grow");
        console.log("%cShould add new food - return event for growing", "color: red;");
        

        // this.setState(state => {
            // TODO: Check for the last item and add a new one after it
            // also should be checked other (changes on the last item)
            let length = this.state.segments.length;
            let lastSegment = this.state.segments[length - 1];
            console.log("lastSegment", lastSegment);
            // let segments = Object.assign({}, this.state.segments);
            let segments = [];

            segments[0] = this.state.segments[0];

            /** 
             * coordinates: {x: 2, y: 8}
                next: null
                prev: null
            */

            // TODO: Should check if here do not have a second item
            // TODO: Check for available cell - playGround.getCell(x, y)
            if (length == 1) {
                console.log(this.state.direction);
                segments[0].next = 1;
                segments[1] = {};
                segments[1].next = null;
                segments[1].prev = 0;
                switch (this.state.direction) {
                    case "up":
                        segments[1].coordinates = {
                            x: lastSegment.coordinates.x,
                            y: lastSegment.coordinates.y + 1
                        };
                        break;
                    case "down":
                        segments[1].coordinates = {
                            x: lastSegment.coordinates.x,
                            y: lastSegment.coordinates.y - 1
                        };
                        break;
                    case "left":
                        segments[1].coordinates = {
                            x: lastSegment.coordinates.x + 1,
                            y: lastSegment.coordinates.y
                        };
                        break;
                    case "right":
                        segments[1].coordinates = {
                            x: lastSegment.coordinates.x - 1,
                            y: lastSegment.coordinates.y
                        };
                        break;
                    default:
                        break;
                }

                return {
                    segments: segments
                };
            } else {
                let segmentBeforeLastOne = this.state.segments[length - 2];
                segments[length - 1].next = length;
                // x x x x x ~
                // 1 1 1 1 1 y
                // 1 0 0 0 1 y
                // 1 0 0 0 1 y
                // 1 0 0 0 1 y
                // 1 1 1 1 1 y
                console.log("Check this logic below!");

                // x1 - x2
                // let dX = -1; // x1 < x2
                // let dX = 1;  // x1 > x2
                let dX = segmentBeforeLastOne.coordinates.x - lastSegment.coordinates.x;
                let dY = segmentBeforeLastOne.coordinates.y - lastSegment.coordinates.y;

                // ANOTHER option is to be 0 => dX = 0; or dY = 0;

                // Check if 
                //      dX == 0         => same column      => then I should move it on UP or DOWN (dY)
                //      dX < 0  -> -1   => should set on the right
                //      dX > 0  -> +1   => should set on the left

                if (dY === 0) {
                    // the same row
                    segments.push({
                        coordinates: {
                            x: lastSegment.coordinates.x - dX,
                            y: lastSegment.coordinates.y
                        },
                        next: null,
                        prev: (length - 1)
                    });
                }

                if (dX === 0) {
                    // the same column
                    segments.push({
                        coordinates: {
                            x: lastSegment.coordinates.x,
                            y: lastSegment.coordinates.y - dY
                        },
                        next: null,
                        prev: (length - 1)
                    });
                }

                // segments.push({
                //     coordinates: {
                //         x: lastSegment.coordinates.x - dX,
                //         y: 1
                //     },
                //     next: null,
                //     prev: (length - 1)
                // });
                return {
                    segments: segments
                };
            }


        // }); // SetState
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(8998, prevProps, prevState);
        console.log(8998);
        // debugger;
        // this.refreshMove();
    }

    // Way to pass data to the Parent
    onClick() {
        console.log("Snake class - clicking");
        console.log(this.state);

        // this.setState({
        //     color: "green",
        //     text: "update state"
        // });

        // color1: "green",
        // color2: "yellowgreen",
        // color3: "red"

        // this.context.doSomething(this.props.value);
    };
}