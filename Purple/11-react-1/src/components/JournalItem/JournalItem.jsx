import './JournalItem.css';

// function JournalItem({ title, text, date, },) {
function JournalItem(props,) {
	// console.log('props:', props,);
	// console.log('props.data: ',props.data,);
	const {title, text, date,} = props.data;
	const formateDate = new Intl.DateTimeFormat('ru-Ru').format(date);


	return (
		<div className="journal-item">
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formateDate}</div>
				<div className="journal-item__text">{text}</div>
			</h2>
		</div>
	);
}

export default JournalItem;