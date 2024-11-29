import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({ submit }) {
    const [formValidateState, setFormValidateState] = useState({
        title: true,
        text: true,
        date: true,
    });

    const addJournalItem = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);

        let isFormValid = true;
        console.log('formValidateState.date: ', formValidateState.date);
        console.log('formProps.date: ', formProps.date);
        if (!formProps.title?.trim().length) {
            setFormValidateState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidateState(state => ({ ...state, title: true }));
        }
        if (!formProps.text?.trim().length) {
            setFormValidateState(state => ({ ...state, text: false }));
            isFormValid = false;
        } else {
            setFormValidateState(state => ({ ...state, text: true }));
        }
        if (!formProps.date) {
            setFormValidateState(state => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setFormValidateState(state => ({ ...state, date: true }));
        }

        if (!isFormValid) {
            return;
        }
        submit(formProps);
    };

    return (
        <>
            <form className="journal-form" onSubmit={addJournalItem}>
                <input
                    type="text"
                    name="title"
                    className={`input ${formValidateState.title ? '' : 'invalid'}`}
                />
                <input
                    type="date"
                    name="date"
                    className={`input ${formValidateState.date ? '' : 'invalid'}`}
                />
                <input type="text" name="tag" />
                <textarea
                    name="text"
                    id=""
                    cols="30"
                    className={`input ${formValidateState.text ? '' : 'invalid'}`}
                ></textarea>

                <Button
                    text="Сохранить"
                    type="submit"
                    onClick={() => console.log('На нас нажали')}
                />

                <Button
                    text="Другое действие"
                    onClick={() => console.log('Это не отправка формы')}
                    type="button"
                />

                <Button text="Сбросить" type="reset" />
            </form>
        </>
    );
}

export default JournalForm;
