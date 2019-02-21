import React from 'react';

export class GameSnake extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        return <div>
            <h2>Snake Position</h2>
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
