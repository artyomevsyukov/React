import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

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
        <div className="app">
            <LeftPanel>
                <Header />
                <JournalList>
                    <JournalAddButton />
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
                </JournalList>
            </LeftPanel>
            <Body>
                <JournalForm />
            </Body>

            {/* {data.map((item, index) => {
				return <JournalItem key={index} data={item} />;
			})} */}
            {/* {data.map((item, index) => (
				<JournalItem key={index} data={item} />
			))} */}
        </div>
    );
}

export default App;
