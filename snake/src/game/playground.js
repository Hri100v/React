/**
 * PlayGround
 * 
 * It should look like one grid with rows and columns
 * The rows and columns will determinate the coordinates
 * It is an array
 */

import React from 'react';
import { Segment } from './segment'

export class PlayGround extends React.PureComponent {
    boardReference = React.createRef();

    constructor(props) {
        super(props);
        console.log(1001, props);

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

    getSegment(x, y) {
        const boardGrid = this.state.board;
        return boardGrid[x][y];
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
    }

    render() {
        return <div className={"board"}>
            <h1>Board</h1>
            {this.props.children}

            <div ref={this.boardReference}>
                create board here - with adding segments
            </div>
        </div>;
    }
}