import React from 'react';

// Create Segment
// Import Segment

// Create Snake
// Import Snake

// Create PlayGround
// Import PlayGround

import { Snake } from './snake';

export class GameSnake extends React.PureComponent {
    constructor(...args) {
        super(...args);

        // console.log('GameSnake', GameSnake, this);
        
    }

    moving(event) {
        console.log(event);        
    }

    clicked() {
        console.log('clicked');
    }

    render() {
        return <div>
            <h2>Loading Snake Position</h2>
            <Snake width={120} onClick={this.clicked} onKeyPress={this.moving}>
                Snake Heart
            </Snake>
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
