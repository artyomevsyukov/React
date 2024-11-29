import './JournalForm.css';
// import { useState } from 'react';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({ submit }) {
    // const [inputData, setInputData] = useState('');

    // const inputChange = e => {
    //     setInputData(e.target.value);
    //     console.log(inputData);
    // };
    const [validateFormState, setValidateFormState] = useState({
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
        if (!formProps.title?.trim().length) {
            setValidateFormState(state => ({ ...state, title: false }));
            isFormValid = false;
        }
        if (!formProps.text?.trim().length) {
            setValidateFormState(state => ({ ...state, text: false }));
            isFormValid = false;
        }
        if (!formProps.date) {
            setValidateFormState(state => ({ ...state, date: false }));
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }

        submit(formProps);
    };

    return (
        <>
            <form className="journal-form" onSubmit={addJournalItem}>
                <input type="text" name="title" />
                <input type="date" name="date" />
                <input
                    type="text"
                    name="tag"
                    /*   value={inputData}
                    onChange={inputChange} */
                />
                <textarea name="text" id="" cols="30"></textarea>
                {/* <Button
                    type="button"
                    text={'Сохронить'}
                    // onClick={() => {
                    //     console.log('object');
                    // }}
                /> */}
                {/* Кнопка "Отправить форму" */}
                {/* <Button text="Сохранить" /> */}
                <Button
                    text="Сохранить"
                    type="submit"
                    onClick={() => console.log('На нас нажали')}
                />
                {/* Кнопка "Просто действие" */}
                <Button
                    text="Другое действие"
                    onClick={() => console.log('Это не отправка формы')}
                    type="button"
                />

                {/* Кнопка "Сброс формы" */}
                <Button text="Сбросить" type="reset" />
            </form>
        </>
    );
}

export default JournalForm;
