import './JournalForm.css';
// import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm({ onSubmit }) {
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
        onSubmit(formProps);
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
                <Button
                    text={'Сохронить'}
                    // onClick={() => {
                    //     console.log('object');
                    // }}
                />
            </form>
        </>
    );
}

export default JournalForm;
