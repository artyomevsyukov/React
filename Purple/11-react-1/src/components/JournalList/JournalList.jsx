import './JournalList.css'
import CardButton from '../CardButton/CardButton'
import JournalItem from '../JournalItem/JournalItem'

function JournalList({ items }) {
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
            {items
                // .filter(userId => userId === UserContext.userId)
                .sort(sortItem)
                .map(item => (
                    <CardButton key={item.id}>
                        <JournalItem data={item} />
                    </CardButton>
                ))}
        </div>
    )

    // return <div className="lournal-list">{items}</div>;
}

export default JournalList
