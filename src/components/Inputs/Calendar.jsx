export default function InputCalendar({ attrProps }) {
	return <input className='inputs-calendar' type='date' {...attrProps} />;
}

const padStr = (data) => (data + '').padStart(2, '0');
export function formatDate(date) {
	return `${date.getFullYear()}-${padStr(date.getMonth() + 1)}-${padStr(date.getDate())}`;
}
