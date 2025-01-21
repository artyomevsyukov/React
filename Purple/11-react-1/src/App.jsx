import './App.css'
import LeftPanel from './layout/LeftPanel/LeftPanel'
import Body from './layout/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import { UserContextProvider } from './context/user.context'
import { useState } from 'react'

function mapItems(items) {
    if (!items) {
        return []
    }
    return items.map(i => ({
        ...i,
        date: new Date(i.date),
    }))
}

function App() {
    const [items, setItems] = useLocalStorage('data')
    const [selectedItem, setSelectedItem] = useState({})

    const addItem = item => {
        setItems([
            ...mapItems(items),
            {
                ...item,
                date: new Date(item.date),
                id:
                    items.length > 0
                        ? Math.max(...items.map(i => i.id)) + 1
                        : 1,
            },
        ])
    }

    return (
        <UserContextProvider>
            <div className="app">
                <LeftPanel>
                    <Header />
                    <JournalAddButton />
                    <JournalList items={mapItems(items)} setItem={setItem} />
                </LeftPanel>
                <Body>
                    <JournalForm submit={addItem} />
                </Body>
            </div>
        </UserContextProvider>
    )
}

export default App
