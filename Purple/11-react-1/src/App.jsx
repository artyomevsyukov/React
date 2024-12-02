import './App.css'
// import JournalItem from './components/JournalItem/JournalItem';
// import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useEffect, useState } from 'react'

function App() {
    // [
    //     {
    //         id: 1,
    //         title: "Подготовка к обновлению курсов",
    //         post: "Горные походы открывают удивительные природные ландшафт",
    //         date: "02/12/2024",
    //     },
    //     {
    //         id: 2,
    //         title: "Поход в годы",
    //         post: "Думал, что очень много времени",
    //         date: "02/12/2024",
    //     },
    // ];
    // const INITIAL_DATA = [
    //     {
    //         id: 1,
    //         title: 'Подготовка к обновлению курсов',
    //         post: 'Горные походы открывают удивительные природные ландшафт',
    //         date: new Date(),
    //     },
    //     {
    //         id: 2,
    //         title: 'Поход в годы',
    //         post: 'Думал, что очень много времени',
    //         date: new Date(),
    //     },
    // ];
    // const [items, setItems] = useState(INITIAL_DATA);
    // const [items, setItems] = useState([]);

    const [items, setItems] = useState(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        return data
            ? data.map(item => ({
                  ...item,
                  date: new Date(item.date),
              }))
            : []
    })

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("data"));
    //     if (data) {
    //         setItems(
    //             data.map(item => ({
    //                 ...item,
    //                 date: new Date(item.date),
    //             })),
    //         );
    //     }
    // }, []);

    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('data', JSON.stringify(items))
        }
    }, [items])

    const addItem = item => {
        setItems(oldItems => [
            ...oldItems,
            {
                title: item.title,
                post: item.post,
                date: new Date(item.date),
                // id: Math.max(0, ...oldItems.map(item => item.id)) + 1,
                id:
                    oldItems.length > 0
                        ? Math.max(0, ...oldItems.map(item => item.id)) + 1
                        : 1,
            },
        ])
    }

    return (
        <div className="app">
            <LeftPanel>
                <Header />
                <JournalList items={items}>
                    <JournalAddButton />
                    {/* {list} */}
                    {/* {items.length === 0 ? (
                        <p>Записей пока нет, добавьте первую</p>
                    ) : (
                        items.sort(sortItem).map(item => (
                            <CardButton key={item.id}>
                                <JournalItem data={item} />
                            </CardButton>
                        ))
                    )} */}
                    {/* {items.length === 0 && (
                        <p>Записей пока нет, добавьте первую</p>
                    )}
                    {items.length > 0 &&
                        items.sort(sortItem).map(item => (
                            <CardButton key={item.id}>
                                <JournalItem data={item} />
                            </CardButton>
                        ))} */}
                    {/* <CardButton>
                        <JournalItem
                            title={data[0].title}
                            text={data[0].text}
                            date={data[0].date}
                        />

                    </CardButton>
                    <CardButton>
                        <JournalItem
                            title={data[1].title}
                            text={data[1].text}
                            date={data[1].date}
                            />
                    </CardButton> */}
                    {/* <JournalItem data={data[0]} />
                    <JournalItem data={data[1]} />
                    <JournalItem data={data[2]} /> */}
                </JournalList>
            </LeftPanel>
            <Body>
                <JournalForm submit={addItem} />
            </Body>

            {/* {data.map((item, index) => {
				return <JournalItem key={index} data={item} />;
			})} */}
            {/* {data.map((item, index) => (
				<JournalItem key={index} data={item} />
			))} */}
        </div>
    )
}

export default App
