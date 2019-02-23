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
    constructor(props) {
        super(props);
        console.log(1001, props);

        this.state = {
            board: []
        };
    }

    createBoard() { }

    // boundery
    // randomly generated obstacles
    // randomly generated "food"

    componentDidMount() {
        // initial state
        // update
    }

    render() {
        return <div className={"board"}>
            <h1>Board</h1>
        </div>;
    }
}