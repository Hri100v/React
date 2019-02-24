import React from 'react';

// Create Segment
// Import Segment

// Create Snake
// Import Snake

// Create PlayGround
// Import PlayGround

import { Snake } from './snake';
import { PlayGround } from './playground';

export class GameSnake extends React.PureComponent {
    board = React.createRef();
    snake = React.createRef();

    constructor(props) {
        super(props);
        // console.log('GameSnake', GameSnake, this);

        this.state = {
            board: this.board
        }
    }

    // TODO:
    // Try to bind to events and do logic HERE in the "game.js"

    // componentDidMount() {
    //     // console.log(1551, this.state);
    //     // setTimeout(() => {
    //     //     this.setState((state, props) => {
    //     //         console.log(7777, state, props);

    //     //         return { board: this.board.current, tt: props.ref };
    //     //     });
    //     //     // console.log("-setTimeout-", this.state.board.current.getSegment(0, 0));

    //     // }, 2000);
    // }

    moving(event) {
        console.log(event);
    }

    clicked() {
        console.log('clicked');
    }

    render() {
        return <div>
            <h2>Loading Snake Position</h2>
            <PlayGround ref={this.board} columns={5} rows={5}>
                <Snake ref={this.snake}
                    // parent={this.state.board}
                    width={120}
                    onClick={this.clicked}
                    onKeyPress={this.moving}
                >
                    Snake Heart
                </Snake>
            </PlayGround>
        </div>;
    }
}

// export { default as GameSnake } from "./index";

// export const GameSnake = (props) => {
//     console.log('-=GameSnake=-');
//     const width = props.width || 800;
//     const height = props.height || 800;
//     return <div style={{ width: width, height: height }} className={"playground"}>
//         <h1>This is the game</h1>
//     </div>
// };

// export default (props) => {
//     console.log('-=GameSnake=-');
//     const width = props.width || 800;
//     const height = props.height || 800;
//     return <div style={{ width: width, height: height }} className={"playground"}>
//         <h1>This is the game</h1>
//     </div>
// };

// export class GameSnake extends React.Component
