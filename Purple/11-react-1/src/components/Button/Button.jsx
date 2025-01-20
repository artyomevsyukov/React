import './Button.css'

function Button({ children, onClick, type = 'button' }) {
    return (
        <button className="button accent" type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
