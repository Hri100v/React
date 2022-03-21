import React, { useState } from 'react';

export const Button = ({handlingClick}) => {
    const [text, setText] = useState('Submit');

    return (
        <div>
            <button
                data-testid='button'
                onClick={() => setText(handlingClick())}
            >
                {text}
            </button>
        </div>
    );
};
