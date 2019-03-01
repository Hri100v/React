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
        // console.log(1221, props, this.props.initState.coordinates);

        this.state = {
            // parent: props.parent,
            // Head - first item in the array
            segments: this.props.initState,
            color: "greenyellow",
            text: "initial state",
            direction: "none",
            playGround: this.props.playGround,
            // TODO: Update speed to change the difficulty
            speed: 600
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

            <h4>The Snake</h4>
            <p>{this.state.text}</p>
            <Segment color={this.state.color} margin={1}>first</Segment>
            <Segment color={this.state.color} margin={1}>second</Segment>
        </div>;
    }

    isValidMove = true;
    componentDidMount() {
        let continueMoving = null;
        document.addEventListener("keydown", event => {
            if (this.isValidMove) {

                if (this.directions[event.key]) {
                    let direction = this.directions[event.key];
                    let isMoving = false;
                    if (this.setDirection !== direction) {
                        this.setDirection = direction;
                        // new direction
                        if (!isMoving) {
                            if (continueMoving) {
                                clearInterval(continueMoving);
                                continueMoving = null;
                            }

                            isMoving = true;
                            continueMoving = setInterval(_ => {
                                // Check the cell in front
                                if (this.checkIsValidMove(this.state.playGround.state.board, this.state.segments[0], direction)) {
                                    this.movingProcess(direction);
                                } else {
                                    // Show end of the game!
                                    clearInterval(continueMoving);
                                    this.isValidMove = false;
                                    this.setState({
                                        text: " * * * * Game Over * * * *"
                                    });
                                    
                                    // TODO: Return event to change the color of the snake
                                }

                            }, this.state.speed);
                        }
                    }
                }
            }
        });
    }

    checkIsValidMove(board, head, dir) {
        let cellInFront = { x: -1, y: -1 };
        switch (dir) {
            case this.directions.ArrowUp:
                cellInFront.x = head.coordinates.x;
                cellInFront.y = head.coordinates.y - 1;
                break;
            case this.directions.ArrowDown:
                cellInFront.x = head.coordinates.x;
                cellInFront.y = head.coordinates.y + 1;
                break;
            case this.directions.ArrowLeft:
                cellInFront.x = head.coordinates.x - 1;
                cellInFront.y = head.coordinates.y;
                break;
            case this.directions.ArrowRight:
                cellInFront.x = head.coordinates.x + 1;
                cellInFront.y = head.coordinates.y;
                break;
            default:
                break;
        }

        // Has impossible position
        let cell = board[cellInFront.y][cellInFront.x];
        if (cell === 1) {
            // boundary = 1
            return false;
        }
        // TODO: Check for itself and avoid food (true)

        return true;
    }

    checkForFood(board, head) {
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

    isProcessed = false;
    setDirection = "none";
    movingProcess(dir) {
        this.move(dir);
    }

    move(direction) {
        // Move the head only
        // after that move its sibling on its position
        // continue to the next
        let positionSnake = null;
        let food = null;

        // C H A N G E
        // position of .grow() method after the .refreshMove()
        switch (direction) {
            case "up":
                positionSnake = this.moveUp(this.state.segments, 0);
                food = this.checkForFood(this.state.playGround.state.board, positionSnake[0]);
                break;
            case "down":
                positionSnake = this.moveDown(this.state.segments, 0);
                food = this.checkForFood(this.state.playGround.state.board, positionSnake[0]);
                break;
            case "left":
                positionSnake = this.moveLeft(this.state.segments, 0);
                food = this.checkForFood(this.state.playGround.state.board, positionSnake[0]);
                break;
            case "right":
                positionSnake = this.moveRight(this.state.segments, 0);
                food = this.checkForFood(this.state.playGround.state.board, positionSnake[0]);
                break;

            default:
                break;
        }

        if (food) {
            let newSegments = this.grow(food);
            this.setState({ direction: direction, segments: newSegments.segments });
        } else {
            this.setState({ direction: direction, segments: positionSnake });
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
        let length = this.state.segments.length;
        let lastSegment = this.state.segments[length - 1];
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

            return {
                segments: segments
            };
        }
    }

    // Way to pass data to the Parent
    onClick() {
        console.log("Snake class - clicking");
        console.log(this.state);
        // color1: "green",
        // color2: "yellowgreen",
        // color3: "red"
    };
}