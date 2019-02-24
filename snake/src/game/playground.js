/**
 * PlayGround
 * 
 * It should look like one grid with rows and columns
 * The rows and columns will determinate the coordinates
 * It is an array
 */

import React from 'react';
import { Segment } from './segment'

export const MyContext = React.createContext();

export class PlayGround extends React.PureComponent {
    boardReference = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            board: this.createBoard(props.rows, props.columns),
            cols: props.columns,
            rows: props.rows
        };
    }

    createBoard(rows, cols) {
        const board = [];
        // Determinate boundary - first and last row/col
        let boundary = 1;
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
        // initial state
        // update
        //yconsole.log(this.state.board, 2222);

        this.draw();

        // this.update()
    }

    getCell(x, y) {
        const boardGrid = this.state.board;
        return boardGrid[x][y];
    }

    randomSize(size) {
        let number = Math.floor(Math.random() * size);
        return number;
    }

    getRandomCell() {
        let rX = 0;
    }

    validationCell(cell) {
        // avoid boundary = 1; free = 0
        if (cell == 0) {
            return true;
        }

        return false;
    }

    draw() {
        for (const row of this.state.board) {
            // console.log(2002, row);
            for (const col of row) {
                // console.log(2332, col);
                if (col === 1) {
                    // boundery
                }

                switch (col) {
                    case 1:
                        // boundary

                        break;
                    case 2:
                        // snake

                        break;
                    case 3:
                        // food

                        break;
                    case 4:
                        // obstacle

                        break;

                    default:
                        // free space
                        break;
                }
            }
        }
    }

    update() {
        console.log("Update Board!");
        // Re-draw the board
    }

    doSomething = (value) => {
        // Do something here with value
        console.log("It is in the Parent!", value);
    };

    render() {
        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child => {
            // child.props.transfer = "Test Transfer!";
            // console.log(child, this, children)

            return React.cloneElement(child, {
                playGround: this,
                board: this.state.board
            });
            // React.cloneElement(child, { transfer: { foo: 1234, bar: 43221 } })
        });
        console.log(1001, children);
        console.log("randomSize", this.randomSize(this.state.cols));
        


        // setTimeout(() => {
        //     console.log("setTimeout", this.getCell(1, 1));            
        // }, 2000);

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

            <div ref={this.boardReference}>
                create board here - with adding segments
            </div>
        </div>;
    }
}