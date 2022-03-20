import React, { useState } from 'react';

export const subtract = (x, y) => {
    return x - y;
};

export const clickHandling = () => {
    return 'Changed Button';
};

export const Button = ({handlingClick}) => {
    const [text, setText] = useState('Old Content');

    return (
        <div>
            <button
                data-testid='button'
                // onClick={() => setText('New Content')}
                // onClick={() => setText(clickHandling())}
                onClick={() => setText(handlingClick())}
            >
                {text}
            </button>
        </div>
    );
};

// export default Button;
