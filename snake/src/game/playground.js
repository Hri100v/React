/**
 * PlayGround
 * 
 * It should look like one grid with rows and columns
 * The rows and columns will determinate the coordinates
 * It is an array
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Segment } from './segment'

export const MyContext = React.createContext();

export class PlayGround extends React.PureComponent {
    boardReference = React.createRef();
    updatedBoard = null;

    constructor(props) {
        super(props);

        this.state = {
            board: this.createBoard(props.rows, props.columns),
            cols: props.columns,
            rows: props.rows,
            snake: [
                {
                    prev: null,
                    coordinates: { x: (props.columns / 2 | 1), y: (props.rows / 2 | 1) },
                    // next: 1
                    next: null
                },
                // {
                //     prev: 0,
                //     coordinates: { x: (props.columns / 2 | 1) + 1, y: (props.rows / 2 | 1) },
                //     next: 2
                // },
                // {
                //     prev: 1,
                //     coordinates: { x: (props.columns / 2 | 1) + 2, y: (props.rows / 2 | 1) },
                //     next: null
                // }
            ]
        };
    }

    createBoard(rows, cols) {
        const board = [];
        // Determinate boundary - first and last row/col
        for (let r = 0; r < rows; r++) {
            // const row = rows[r];
            const row = [];
            for (let c = 0; c < cols; c++) {
                // const col = 0;
                let boardCell = 0;
                if (r === 0 || r === (rows - 1)) {
                    boardCell = 1;
                } else if (c === 0 || c === (cols - 1)) {
                    boardCell = 1;
                } else {
                    boardCell = 0;
                }

                row.push(boardCell);
            }

            board.push(row);
        }

        return board;
    }

    onSnakeMove = (event) => {
        // console.log("onSnakeMove");
        this.clear();
        let newBoard = this.deepCopyOfBoard(this.state.board);
        let segments = event.segments;
        // snake segment is 2
        for (const segment of segments) {
            let coordinates = segment.coordinates
            newBoard[coordinates.y][coordinates.x] = 2;
        }

        this.update(newBoard);
    }

    // boundary
    // randomly generated obstacles
    // randomly generated "food"
    componentDidMount() {
        this.setState(state => {
            let updateOnBoard = state.board;
            let snakePosition = state.snake[0].coordinates;
            updateOnBoard[snakePosition.y][snakePosition.x] = 2;

            return {
                board: updateOnBoard
            }
        });

        // Board - initial state
        this.draw();

        setTimeout(() => {
            // update - add food
            let foodCell = this.addFood();
            let col = foodCell.x;
            let row = foodCell.y;
            let newBoard = this.deepCopyOfBoard(this.state.board);
            newBoard[row][col] = foodCell.value;
            this.update(newBoard);
        }, 2000);
    }

    getCell(x, y) {
        const boardGrid = this.state.board;
        return boardGrid[x][y];
    }

    randomSize(size) {
        let number = Math.floor(Math.random() * size);
        return number;
    }

    getRandomCellWithCoordinates(cols, rows) {
        let rX = this.randomSize(cols);
        let rY = this.randomSize(rows);
        let cellValue = this.getCell(rX, rY);
        return {
            x: rX,
            y: rY,
            value: cellValue
        };
    }

    // TODO: Check for food under the snake
    validationCell(cell) {
        // avoid boundary = 1; free = 0
        if (cell.value === 0) {
            return true;
        }

        return false;
    }

    draw() {
        // console.log("--drawing--");
        let segments = [];
        for (const row of this.state.board) {
            for (const col of row) {
                switch (col) {
                    case 1:
                        // boundary
                        const boundary = <Segment color={"gray"} />;
                        segments.push(boundary);
                        break;
                    case 2:
                        // snake
                        const snake = <Segment color={"green"} />;
                        segments.push(snake);
                        break;
                    case 3:
                        // food
                        const food = <Segment color={"red"} />;
                        segments.push(food);
                        break;
                    case 4:
                        // obstacle
                        const obstacle = <Segment color={"darkgray"} />;
                        segments.push(obstacle);
                        break;

                    default:
                        // free space
                        const free = <Segment color={"mistyrose"} />;
                        segments.push(free);
                        break;
                }
            }
        }

        let loop = 0;
        const boardSegments = React.Children.map(segments, segment => {
            return React.cloneElement(segment, {
                key: loop++
            });
        });

        let boardContent = this.boardReference.current;
        let boardChildren = boardContent.children

        if (boardChildren.length !== 0) {
            // console.log("Has children", boardChildren);
            ReactDOM.unmountComponentAtNode(this.boardReference.current);
        }

        ReactDOM.render(
            boardSegments,
            this.boardReference.current
        );

        return segments;
    }

    addFood() {
        let isValid = true;
        let foodPlace = null;
        const colsSize = this.state.cols;
        const rowsSize = this.state.rows;
        do {
            let randomCell = this.getRandomCellWithCoordinates(colsSize, rowsSize);
            if (this.validationCell(randomCell)) {
                isValid = false;
                foodPlace = randomCell;
                foodPlace.value = 3;
            }
        } while (isValid);

        return foodPlace;
    }

    deepCopyOfBoard(originalArray) {
        let arrayCopy = originalArray.map(rs => {
            return rs.map(c => {
                return c;
            });
        });
        return arrayCopy;
    }

    clear() {
        let clearBoard = this.deepCopyOfBoard(this.state.board);
        for (let i = 0; i < clearBoard.length; i++) {
            const row = clearBoard[i];
            for (let k = 0; k < row.length; k++) {
                const cell = row[k];
                if (cell === 2) {
                    clearBoard[i][k] = 0;
                }
            }
        }

        this.setState({ board: clearBoard });
    }

    update(newBoard) {
        // Re-draw the board
        this.setState({
            board: newBoard
        });

        this.draw();
    }

    render() {
        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child => {
            return React.cloneElement(child, {
                playGround: this,
                board: this.state.board,
                initState: this.state.snake,
                onMoving: this.onSnakeMove
            });
        });

        return <div className={"board"}>
            {childrenWithProps}
            <br />
            <div ref={this.boardReference}
                style={{
                    width: (this.state.cols * 10),
                    lineHeight: 0
                }}
            >
                create board here - with adding segments
            </div>
        </div>;
    }
}