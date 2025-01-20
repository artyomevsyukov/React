import './JournalList.css'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo } from 'react'
import { UserContext } from '../../context/user.context'

function JournalList({ items }) {
    const { userId } = useContext(UserContext)
    const sorteredItems = useMemo(
        () => items.filter(el => el.userId === userId).sort(sortItem),
        [items, userId],
    )

    if (items.length === 0) {
        return <p>Записей пока нет, добавьте первую</p>
    }
    function sortItem(a, b) {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div className="lournal-list">
            {sorteredItems.map(item => (
                <CardButton key={item.id}>
                    <JournalItem data={item} />
                </CardButton>
            ))}
        </div>
    )

    // return <div className="lournal-list">{items}</div>;
}

export default JournalList
