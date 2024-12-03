import styles from './JournalForm.module.css'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import CN from 'classnames'

function JournalForm({ submit }) {
    const INITIAL_STATE = {
        title: true,
        post: true,
        date: true,
    }

    const [formValidateState, setFormValidateState] = useState(INITIAL_STATE)

    useEffect(() => {
        let timerID
        if (
            !formValidateState.date ||
            !formValidateState.post ||
            !formValidateState.title
        ) {
            timerID = setTimeout(() => {
                console.log('Очистка состояния')
                setFormValidateState(INITIAL_STATE)
            }, 2000)
        }
        return () => {
            clearTimeout(timerID)
        }
    }, [formValidateState])

    const addJournalItem = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        // console.log(formProps);

        let isFormValid = true
        // console.log("formValidateState.date: ", formValidateState.date);
        // console.log("formProps.date: ", formProps.date);
        if (!formProps.title?.trim().length) {
            setFormValidateState(state => ({ ...state, title: false }))
            isFormValid = false
        } else {
            setFormValidateState(state => ({ ...state, title: true }))
        }
        if (!formProps.post?.trim().length) {
            setFormValidateState(state => ({ ...state, post: false }))
            isFormValid = false
        } else {
            setFormValidateState(state => ({ ...state, post: true }))
        }
        if (!formProps.date) {
            setFormValidateState(state => ({ ...state, date: false }))
            isFormValid = false
        } else {
            setFormValidateState(state => ({ ...state, date: true }))
        }

        if (!isFormValid) {
            return
        }
        submit(formProps)
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
                            [styles['invalid']]: !formValidateState.title,
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
                            [styles['invalid']]: !formValidateState.date,
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
                        [styles['invalid']]: !formValidateState.post,
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
