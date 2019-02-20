import React from 'react'

export const GameSnake = (props) => {
    const width = props.width || 800;
    const height = props.height || 800;
    return <div style={{ width: width, height: height }} className={"playground"}>
        <h1>This is the game</h1>
    </div>
};
