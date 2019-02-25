import React from 'react';

import { Snake } from './snake';
import { PlayGround } from './playground';

export class GameSnake extends React.PureComponent {
    board = React.createRef();
    snake = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            board: this.board,
            testText: "Initial state"
        }
    }

    // TODO:
    // Try to bind to events and do logic HERE in the "game.js"

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                testText: "Updated Text!"
            });
        }, 4000);
    }



    moving(event) {
        console.log(event);
    }

    clicked() {
        console.log('clicked');
    }

    render() {
        return <div>
            <h1>{this.state.testText}</h1>
            <h2>Loading Snake Position</h2>
            <PlayGround ref={this.board} columns={15} rows={15}>
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
