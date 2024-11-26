import './Button.css';
import { useState } from 'react';

function Button() {
    //  let text = 'Сохронить';
    const [text, setText] = useState('Save');
    console.log('rerender');

    const clicked = () => {
        // setText('Close');
        setText((t) => t + '!');
        console.log('text:', text);
    };

    return (
        <button onClick={clicked} className="button accent">
            {text}
        </button>
    );
}

export default Button;
