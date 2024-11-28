import './JournalForm.css';
// import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm({ submit }) {
    // const [inputData, setInputData] = useState('');

    // const inputChange = e => {
    //     setInputData(e.target.value);
    //     console.log(inputData);
    // };

    const addJournalItem = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
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
                <Button text="Сохранить" type="submit" />
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
