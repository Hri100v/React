/**
 * Coordinates and size
 */

import React from 'react';
import { MyContext } from './playground';

export class Segment extends React.PureComponent {
    static contextType = MyContext;

    constructor(props) {
        super(props);

        this.state = {
            bodyColor: !!props.color ? props.color : "mistyrose",
            margin: !!props.margin ? props.margin : 0
        }
    }

    render() {
        const size = 10;
        return <div className={"snake-segment"}
            style={{
                margin: this.state.margin,
                width: size,
                height: size,
                backgroundColor: this.state.bodyColor,
                display: "inline-block"
            }}>
            {this.props.value}
        </div>;
    }

    componentDidMount() {
        // console.log("componentDidMount", this.props);        
    }
}