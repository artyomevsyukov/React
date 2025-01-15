import styles from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useReducer } from 'react'
import CN from 'classnames'
import { INITIAL_STATE, formReducer } from './JournalFrom.state'

function JournalForm({ submit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, values, isFormReadyToSubmit } = formState

    useEffect(() => {
        let timerID
        if (!isValid.date || !isValid.post || !isValid.title) {
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
        }
    }, [isFormReadyToSubmit, values])

    const addJournalItem = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        // console.log(formProps);
        dispatchForm({ type: 'SUBMIT', payload: formProps })
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div>
                    <input
                        type="text"
                        name="title"
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
                        id="date"
                        type="date"
                        name="date"
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
                    />
                </div>
                <textarea
                    name="post"
                    id=""
                    cols="30"
                    rows="10"
                    spellCheck="true"
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
