export { default as OpenJSON } from './OpenJSON';
export { default as CBS } from './CBS';
export { default as Timer } from './Timer';
export { default as Page404 } from './Page404';
export { default as PlayWright } from './Playwright';
export { default as QSlayer } from './QSlayer';
export { default as Additional } from './Additional';
export { default as Json } from './Json';

export function Home() {
	const strongFstLetter = (str) => <span style={{ color: 'var(--strong-color)' }}>{str}</span>;

	return (
		<article style={{ fontSize: '3.2rem', padding: '1rem' }}>
			<div>{strongFstLetter('A')}utomatic</div>
			<div>{strongFstLetter('M')}aker</div>
			<div>{strongFstLetter('F')}rom V CBS</div>
		</article>
	);
}
