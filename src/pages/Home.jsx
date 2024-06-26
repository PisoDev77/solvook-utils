export default function Home() {
	const strongFstLetter = (str) => <span style={{ color: 'var(--strong-color)' }}>{str}</span>;

	return (
		<article style={{ fontSize: '3.2rem', padding: '1rem' }}>
			<div>{strongFstLetter('A')}utomatic</div>
			<div>{strongFstLetter('M')}aker</div>
			<div>{strongFstLetter('F')}rom V CBS</div>
		</article>
	);
}
