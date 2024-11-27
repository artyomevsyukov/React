import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

function App() {
    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы открывают удивительные природные ландшафт',
            date: new Date(),
        },
        {
            title: 'Поход в годы',
            text: 'Думал, что очень много времени',
            date: new Date(),
        },
        {
            title: 'Поход в годы',
            text: 'Думал, что очень много времени',
            date: new Date(),
        },
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Горные походы открывают удивительные природные ландшафт',
            date: new Date(),
        },
    ];

    return (
        <>
            <h1>Заголовок</h1>
            <p>Какой-то текст</p>
            <Button />
            <CardButton>
                <JournalItem
                    title={data[0].title}
                    text={data[0].text}
                    date={data[0].date}
                />

                {/* {data.map((item, index) => (
					<JournalItem key={index} data={item} />
				))} */}

                {/* <JournalItem data={data[0]} />
				<JournalItem data={data[1]} />
				<JournalItem data={data[2]} /> */}
            </CardButton>
            <CardButton>
                <JournalItem
                    title={data[1].title}
                    text={data[1].text}
                    date={data[1].date}
                />
            </CardButton>
            {/* {data.map((item, index) => {
				return <JournalItem key={index} data={item} />;
			})} */}
            {/* {data.map((item, index) => (
				<JournalItem key={index} data={item} />
			))} */}
        </>
    );
}

export default App;
