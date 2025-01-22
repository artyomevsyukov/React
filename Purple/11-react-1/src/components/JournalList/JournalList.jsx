import './JournalList.css'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo } from 'react'
import { UserContext } from '../../context/user.context'

function JournalList({ items, setItem }) {
    const { userId } = useContext(UserContext)

    function sortItem(a, b) {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    }

    const filteredItems = useMemo(
        () => items.filter(el => el.userId === userId).sort(sortItem),
        [items, userId],
    )

    if (items.length === 0) {
        return <p>Записей пока нет, добавьте первую</p>
    }

    return (
        // <div className="lournal-list">
        <>
            {filteredItems.map(item => (
                <CardButton key={item.id} onClick={() => setItem(item)}>
                    <JournalItem data={item} />
                </CardButton>
            ))}
        </>
        // </div>
    )

    // return <div className="lournal-list">{items}</div>;
}

export default JournalList
