import { forwardRef } from 'react'
import styles from './Input.module.css'
import CN from 'classnames'

const Input = forwardRef(function Input(
    {
        /* type, onChange, values, */ className,
        isValid = true,
        appearance,
        ...props
    },
    ref,
) {
    return (
        <input
            // onChange={onChange}
            // type={type}
            // name="title"
            // value={values}
            // className={`${styles['input']} ${formValidateState.title ? '' : styles['invalid']}`}
            {...props}
            ref={ref}
            className={CN(className, styles['input'], {
                [styles['invalid']]: !isValid,
                [styles['input-title']]: appearance === 'title',
            })}
        />
    )
})

export default Input
