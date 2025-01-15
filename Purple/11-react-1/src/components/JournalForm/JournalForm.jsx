import styles from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useReducer, useRef } from 'react'
import CN from 'classnames'
import { INITIAL_STATE, formReducer } from './JournalFrom.state'

function JournalForm({ submit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, values, isFormReadyToSubmit } = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const postRef = useRef()

    function focusError(isValid) {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus()
                break
            case !isValid.date:
                dateRef.current.focus()
                break
            case !isValid.post:
                postRef.current.focus()
                break
        }
    }

    useEffect(() => {
        let timerID
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid)
            timerID = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' })
            }, 2000)
        }
        return () => {
            clearTimeout(timerID)
        }
    }, [isValid])

    useEffect(() => {
        if (isFormReadyToSubmit) {
            submit(values)
            dispatchForm({ type: 'CLEAR' })
        }
    }, [isFormReadyToSubmit, values, submit])

    const onChange = e => {
        dispatchForm({
            type: 'SET_VALUE',
            payload: { [e.target.name]: e.target.value },
        })
    }

    const addJournalItem = e => {
        e.preventDefault()
        dispatchForm({ type: 'SUBMIT' })
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div>
                    <input
                        onChange={onChange}
                        type="text"
                        name="title"
                        value={values.title}
                        ref={titleRef}
                        // className={`${styles['input']} ${formValidateState.title ? '' : styles['invalid']}`}
                        className={CN(styles['input-title'], {
                            [styles['invalid']]: !isValid.title,
                        })}
                    />
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Иконка календаря" />
                        <span>Дата</span>
                    </label>
                    <input
                        onChange={onChange}
                        id="date"
                        type="date"
                        name="date"
                        value={values.date}
                        ref={dateRef}
                        // className={`${styles['input']} ${formValidateState.date ? '' : styles['invalid']}`}
                        className={CN(styles['input'], {
                            [styles['invalid']]: !isValid.date,
                        })}
                    />
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Иконка папки" />
                        <span>Метки</span>
                    </label>
                    <input
                        className={styles['input']}
                        type="text"
                        name="tag"
                        id="tag"
                        value={values.tag}
                        onChange={onChange}
                    />
                </div>
                <textarea
                    name="post"
                    id=""
                    cols="30"
                    rows="10"
                    spellCheck="true"
                    value={values.post}
                    onChange={onChange}
                    ref={postRef}
                    // className={`${styles['input']} ${formValidateState.text ? '' : styles['invalid']}`}
                    className={CN(styles['input'], {
                        [styles['invalid']]: !isValid.post,
                    })}
                ></textarea>

                <Button
                    text="Сохранить"
                    type="submit"
                    // onClick={() => console.log("На нас нажали")}
                />
            </form>
        </>
    )
}

export default JournalForm
