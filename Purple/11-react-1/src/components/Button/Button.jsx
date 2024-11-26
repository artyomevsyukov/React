import './Button.css';

function Button() {

	 let text = 'Сохронить';
     const clicked = () => {
         console.log('text:', text);
     };
	 
    return (
        <button onClick={clicked} className="button accent">
            {text}
        </button>
    );
}

export default Button;
