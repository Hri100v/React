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

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                testText: "Updated Text!"
            });
        }, 4000);
    }

    moving(event) {
        console.log(event, 4444);
    }

    clicked() {
        console.log('clicked');
    }

    render() {
        return <div>
            <h1>{this.state.testText}</h1>
            <h2>Loading Snake Position</h2>
            <PlayGround ref={this.board} columns={20} rows={20}>
                <Snake ref={this.snake}
                    // parent={this.state.board}
                    width={120}
                    onClick={this.clicked}
                    onKeyPress={this.moving}
                >
                    Snake Heart
                </Snake>
            </PlayGround>

            <p>
                TODO: Need to add food after snake grow!
                (it happens once)
            </p>
            <p>TODO: Catch the errors (boundary)</p>
        </div>;
    }
}
