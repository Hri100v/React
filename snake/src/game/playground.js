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

    constructor(props) {
        super(props);

        this.state = {
            board: this.createBoard(props.rows, props.columns),
            cols: props.columns,
            rows: props.rows,
            // drawedBoard: this.draw()
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

    // boundary
    // randomly generated obstacles
    // randomly generated "food"

    componentDidMount() {
        // Board - initial state
        this.draw();

        setTimeout(() => {
            // update - add food
            this.update();
            // let rCell = this.getRandomCellWithCoordinates(5, 5);            
            // console.log(rCell, this.validationCell(rCell));
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

    validationCell(cell) {
        // avoid boundary = 1; free = 0
        if (cell.value === 0) {
            return true;
        }

        return false;
    }

    draw() {
        console.log("--drawing--");

        let segments = [];
        for (const row of this.state.board) {
            // console.log(2002, row);
            for (const col of row) {
                // console.log(2332, col);
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
                        console.log("food");

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

        // this.boardReference.current.innerHTML = '';
        // const parent = this.boardReference.current.parent();
        let boardContent = this.boardReference.current;
        let boardChildren = boardContent.children
        console.log(this.boardReference.current, boardChildren.length);

        let ll = 0;
        if (boardChildren.length !== 0) {
            console.log("Has children", boardChildren);
            ReactDOM.unmountComponentAtNode(this.boardReference.current)

            // for (const child of boardChildren) {
            //     if (ll < 10) {
            //         console.log(child, boardContent);
            //         boardContent.removeChild(child);
            //     }
            //     ll++;
            // }
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
            // console.log(randomCell, this.validationCell(randomCell));
            if (this.validationCell(randomCell)) {
                isValid = false;
                foodPlace = randomCell;
                foodPlace.value = 3;
            }
        } while (isValid);

        return foodPlace;
    }

    update() {
        console.log("Update Board!");
        // Re-draw the board
        let foodCell = this.addFood();
        console.log(foodCell);
        let col = foodCell.x;
        let row = foodCell.y;
        // let newBoard = Object.assign({}, this.state.board); //this.state.board.slice(0);
        // newBoard[row][col] = foodCell.value;
        let ar = this.state.board.map(rs => {
            return rs.map(c => {
                return c;
            });
        });
        ar[row][col] = foodCell.value;
        // console.log(ar, this.state.board);
        this.setState({
            board: ar
        });


        // console.log(this.state.board, newBoard);
        this.draw();

        // console.log("state before", this.state.board);

        // this.setState(state => {
        //     let newBoard = state.board;
        //     // newBoard
        //     return {
        //         board: newBoard,
        //         cols: state.columns,
        //         rows: state.rows
        //     }
        // });

        // setTimeout(() => {
        //     console.log("state after", this.state.board);
        // }, 1111);
    }

    doSomething = (value) => {
        // Do something here with value
        console.log("It is in the Parent!", value);
    };

    render() {
        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child => {
            return React.cloneElement(child, {
                playGround: this,
                board: this.state.board
            });
        });

        return <div className={"board"}>
            <h1>Board</h1>

            MyContext work!
            {/* <MyContext.Provider value={{ doSomething: this.doSomething }}>
                {this.props.children}
            </MyContext.Provider> */}
            <br />

            Another try:
            {childrenWithProps}

            <br />

            Classic approach:
            {/* {this.props.children} */}

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